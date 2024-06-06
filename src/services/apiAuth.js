const adicionarDados = async (dados) => {
  try {
    const response = await fetch("http://localhost:3000/api/v1/new-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    });
    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.error("Erro ao adicionar dados:", error);
  }
};
export default adicionarDados;
