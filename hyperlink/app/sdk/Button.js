'use client';

export default function SDKButton({ label, onClick, style = {} }) {
  return (
    <button className="button" style={style} onClick={onClick}>
      {label}
    </button>
  );
}
