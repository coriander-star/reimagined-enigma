function HomeworkCard() {
   return (
      <div style={{
        border: '1px solid #e0e0e0',
        padding: '15px',
        margin: '15px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        transition: 'transform 0.2s ease' 
      }}>
        <h2 style={{ color: '#2c3e50' }}>作业标题</h2>
        <p style={{ color: '#666' }}>作业内容简介</p>
        <p style={{ 
          color: '#95a5a6',
          fontSize: '0.9em',
          marginTop: '10px'
        }}>2025-4-30</p>
      </div>
   )
}
export default HomeworkCard;