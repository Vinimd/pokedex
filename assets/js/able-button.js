export default function AbleButton(button01, button02) {
  const buttons = [button01, button02];
  buttons.forEach((button) => {
    if (button.hasAttribute("disabled")) {
      button.disabled = false;
    }
  });
}
