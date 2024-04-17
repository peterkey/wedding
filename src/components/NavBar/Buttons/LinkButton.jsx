import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./LinkButton.css";

const LinkButton = ({ page, title, onClick }) => {
  return (
    <NavLink
      to={page}
      onClick={onClick}
      className='text-[#4c4c4c] hover:text-[#888888] hover:underline hover:decoration-solid hover:decoration-[#7f1734] px-3 py-2'>
      {title}
    </NavLink>
  );
};

LinkButton.propTypes = {
  page: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
};

export default LinkButton;
