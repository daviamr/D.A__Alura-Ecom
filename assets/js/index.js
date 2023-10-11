const endpoint = `https://dummyjson.com/products`;

async function meupintu() {
    const teste = await fetch(endpoint);
    const converte = await teste.json();
    console.table(converte.products);
}

meupintu();