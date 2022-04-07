import { colors } from '../js/products';

export default function FilterForm({colorId, setColorId}) {
  return (
    <div className="color-filter">
        <label htmlFor="color">Farbe </label>
          <select name="color" id="color" value={colorId} onChange={(e) => setColorId(parseInt(e.target.value))}>
            <option value="0">Bitte wählen</option>
            {colors.map(({id, name}) => (<option value={id} key={id}>{name}</option>
                ))}
          </select>
      </div>
  )
};