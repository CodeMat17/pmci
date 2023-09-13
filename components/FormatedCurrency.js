const FormatedCurrency = ({ item, itemcolor, size }) => {
  const amount = item.toLocaleString();

  return (
    <div>
      <p className={`text-${size} text-${itemcolor}`}>₦{amount}</p>
    </div>
  );
};

export default FormatedCurrency;
