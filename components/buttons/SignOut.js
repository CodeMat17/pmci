

const SignOut = () => {
  return (
    <div>
      <form action='/auth/signout' method='post'>
        <button
          className='button block text-red-700 bg-gradient-to-t from-red-400 to-red-100 transition duration-500 hover:bg-red-400 shadow-md rounded-full px-6 py-2'
          type='submit'>
          Sign out
        </button>
      </form>
    </div>
  );
}

export default SignOut