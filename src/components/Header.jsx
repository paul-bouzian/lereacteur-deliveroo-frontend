import deliverooLogo from "../assets/images/logo-teal.svg";

function Header() {
  return (
    <header className="border border-b-slate-200 px-6 py-2">
      <div className="m-auto max-w-6xl">
        <div className="w-44">
          <img src={deliverooLogo} alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
