const FormatedCurrency = ({ item, itemcolor }) => {
  const amount = item.toLocaleString();

  return (
    <div>
      <p className={`text-2xl text-${itemcolor}`}>₦{amount}</p>
    </div>
  );
};

export default FormatedCurrency;
