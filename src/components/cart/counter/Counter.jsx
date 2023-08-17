function Counter({ quantity }) {
  return (
    <div className='bg-white w-5 h-4 rounded-lg text-xs absolute -top-0 -right-0'>{quantity}</div>
  );
}

Counter.defaultProps = {
  quantity: 0
};

export default Counter;
