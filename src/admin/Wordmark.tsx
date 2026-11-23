type WordmarkProps = { size?: 'sm' | 'lg' };

// Cores oficiais: "H" e "O" em vermelho, "EaR" em azul.
export function Wordmark({ size = 'sm' }: WordmarkProps) {
  return (
    <span className={`adm-wordmark adm-wordmark--${size}`} role="img" aria-label="HEaRO">
      <span className="adm-wm-red" aria-hidden="true">H</span>
      <span className="adm-wm-teal" aria-hidden="true">EaR</span>
      <span className="adm-wm-red" aria-hidden="true">O</span>
    </span>
  );
}
