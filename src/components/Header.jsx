import deliverooLogo from "../assets/images/logo-teal.svg";

function Header() {
  return (
    <header className="border-b border-slate-200 px-6 py-2">
      <div className="m-auto max-w-7xl">
        <div className="w-44">
          <img src={deliverooLogo} alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
