import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ pageNum, onPrevClick, onNextClick }) => (
  <section className="pagination">
    <span className="prev" onClick={onPrevClick} />
    <div className="page-num">Page {pageNum}</div>
    <span className="next" onClick={onNextClick} />
  </section>
);

Pagination.propTypes = {
  pageNum: PropTypes.number,
  onPrevClick: PropTypes.func,
  onNextClick: PropTypes.func
};

export default Pagination;
