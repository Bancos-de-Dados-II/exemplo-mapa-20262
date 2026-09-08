# exemplo-mapa-20262

## Função para criar a viewBox
```
CREATE OR REPLACE FUNCTION viewbox_municipio(p_nome text)
RETURNS text
LANGUAGE plpgsql
AS $$
DECLARE
    v_envelope geometry;
    v_xmin     double precision;
    v_ymin     double precision;
    v_xmax     double precision;
    v_ymax     double precision;
    v_viewbox  text;
BEGIN
    -- Junta todas as geometrias que casarem com o nome (caso haja mais de uma)
    -- e calcula o envelope (bounding box) delas
    SELECT ST_Envelope(ST_Collect(geom))
    INTO v_envelope
    FROM municipios
    WHERE nome ILIKE p_nome;

    IF v_envelope IS NULL THEN
        RAISE EXCEPTION 'Município "%" não encontrado na tabela municipios.', p_nome;
    END IF;

    v_xmin := ST_XMin(v_envelope);
    v_ymin := ST_YMin(v_envelope);
    v_xmax := ST_XMax(v_envelope);
    v_ymax := ST_YMax(v_envelope);

    -- Formato viewBox: minX minY largura altura
    v_viewbox := format('%s %s %s %s',
                         v_xmin,
                         v_ymax*-1,
                         v_xmax - v_xmin,
                         v_ymax - v_ymin);

    RETURN v_viewbox;
END;
$$;
```