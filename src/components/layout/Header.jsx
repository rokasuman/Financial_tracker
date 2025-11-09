import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { IoIosLogIn } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { IoIosCreate } from "react-icons/io";
import { MdSpaceDashboard } from "react-icons/md";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { useUser } from "../../context/UserContext.jsx";

export const Header = () => {
  const data = useUser();
  console.log(data);

  const { user, setUser } = useUser();

  const handleOnLogOut = () => {
    alert("Sure you want to logout");
    //deleting the accessJWT
    localStorage.removeItem("accessJWT");
    //reseting the user from the gobal state
    setUser({});
  };

  return (
    <Navbar variant="dark" className="bg-body-dark">
      <Container>
        <Navbar.Brand href="#home">FT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user?._id ? (
              <>
                <Link className="nav-link" to="/dashboard">
                  <MdSpaceDashboard />
                  Dashboard
                </Link>
                <Link className="nav-link" to="/transaction">
                  <FaMoneyBillTransfer />
                  Transcation
                </Link>
                <Link
                  onClick={() => handleOnLogOut("./")}
                  className="nav-link"
                  to="/"
                >
                  <IoIosLogOut />
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link className="nav-link" to="/signup">
                  <IoIosCreate />
                  Sign Up
                </Link>
                <Link className="nav-link" to="/">
                  <IoIosLogIn />
                  Login
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
