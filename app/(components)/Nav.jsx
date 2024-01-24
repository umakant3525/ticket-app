import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const Nav = () => {
  return (
    <Nav className="flex justify-between bg-nav p-4">
        <div className="flex items-center space-x-4">
            <Link href="/">
                <FontAwesomeIcon icon={faHome} className="icon"/>
            </Link>
            <Link href="/TicketPage/new">
                <FontAwesomeIcon icon={Ticket} className="icon"/>
            </Link>
        </div>
        <div>
            <p className="text-default-text ">umakant3525@gmail.com</p>
        </div>
    </Nav>
  )
}

export default Nav 