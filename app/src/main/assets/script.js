(() => {
  // Radio base que usaremos como "contenedor"
  const input = document.getElementById("face0-0");
  const label = document.querySelector("label[for='face0-0']");
  const faces = document.querySelector(".faces");

  if (!input || !label) return;

  // Ocultar selector original
  if (faces) faces.style.display = "none";

  // Crear input libre de emoji
  const emojiInput = document.createElement("input");
  emojiInput.type = "text";
  emojiInput.placeholder = "Escribe cualquier emoji 😈";
  emojiInput.autocomplete = "off";

  // Estilo móvil-friendly
  Object.assign(emojiInput.style, {
    fontSize: "20px",
    padding: "10px",
    width: "100%",
    boxSizing: "border-box",
    marginBottom: "12px"
  });

  // Insertar antes del textarea
  const textarea = document.querySelector("textarea[name='content']");
  textarea.parentNode.insertBefore(emojiInput, textarea);

  // Estado inicial
  input.checked = true;
  emojiInput.value = input.value || "🙂";

  // Sincronización
const DEFAULT_EMOJI = "🫥";

emojiInput.addEventListener("input", () => {
  let value = emojiInput.value;

  if (!value) {
    emojiInput.value = DEFAULT_EMOJI;
    input.value = DEFAULT_EMOJI;
    label.textContent = DEFAULT_EMOJI;
    input.checked = true;
    return;
  }

  const lastChar = [...value].pop();

  emojiInput.value = lastChar;
  input.value = lastChar;
  label.textContent = lastChar;
  input.checked = true;
});

	const style = document.createElement("style");
style.textContent = `
  body {
    background-color: black;
	color: white;
  }
`;
document.head.appendChild(style);

})();
