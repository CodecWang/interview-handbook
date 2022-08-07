const clipboard = navigator.clipboard;

setTimeout(async () => {
  const text = await navigator.clipboard.readText();
  console.log(text);
}, 2000);

clipboard.write();
clipboard.writeText();
clipboard.read();
clipboard.readText();
