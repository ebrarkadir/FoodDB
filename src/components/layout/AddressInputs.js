export default function AddressInputs({addressProps,setAddressProp,disabled=false}) {
  const {phone, streetAddress, postalCode, city, country} = addressProps;
  return (
    <>
      <label>Telefon</label>
      <input
        disabled={disabled}
        type="tel" placeholder="Telefon Numarası"
        value={phone || ''} onChange={ev => setAddressProp('phone', ev.target.value)} />
      <label>Adres</label>
      <input
        disabled={disabled}
        type="text" placeholder="Adres"
        value={streetAddress || ''} onChange={ev => setAddressProp('streetAddress', ev.target.value)}
      />
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label>Posta Kodu</label>
          <input
            disabled={disabled}
            type="text" placeholder="Posta Kodu"
            value={postalCode || ''} onChange={ev => setAddressProp('postalCode', ev.target.value)}
          />
        </div>
        <div>
          <label>Şehir</label>
          <input
            disabled={disabled}
            type="text" placeholder="Şehir"
            value={city || ''} onChange={ev => setAddressProp('city', ev.target.value)}
          />
        </div>
      </div>
      <label>Ülke</label>
      <input
        disabled={disabled}
        type="text" placeholder="Ülke"
        value={country || ''} onChange={ev => setAddressProp('country', ev.target.value)}
      />
    </>
  );
}