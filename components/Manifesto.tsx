
export default function Manifesto() {
  return (
    <div className="manifesto">
      <p className="manifesto-q">"That government is best which governs least."</p>
      <p className="manifesto-attr">
        Henry David Thoreau &nbsp;·&nbsp;
        <em
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontStyle: 'italic',
            color: 'rgba(250, 250, 247, 0.5)',
          }}
        >
          Pemerintah terbaik adalah yang paling sedikit memerintah.
        </em>
      </p>
    </div>
  )
}
