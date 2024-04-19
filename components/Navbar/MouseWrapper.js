export default function MouseWrapper({ children, mouseEnterHandler, mouseLeaveHandler }) {
  return (
    <div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
      {children}
    </div>
  );
}
