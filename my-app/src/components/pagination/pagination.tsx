
export const Pagination = () => (
   <div className="pagination">
      <button className='pagination__prev' type="button">← Prev</button>
      <div className="pagination__pages">
         <span className="is-active">1</span>
         <span>2</span>
         <span>3</span>
         <span>…</span>
         <span>8</span>
      </div>
      <button className='pagination__next' type="button">Next →</button>
   </div>
)

