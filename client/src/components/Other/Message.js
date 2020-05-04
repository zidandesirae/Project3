import React from "react";
import Proptypes from "prop-types"; 

const Message = ({ msg }) => {
    return (
<div classNAME="alert alert-info alert-dismissible fade show" role="alert">
  {msg}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
    )
}

Message.propTypes = {
msg: propTypes.string.isRequired
}

export default Message