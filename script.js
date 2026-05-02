async function getBalance() {
    const wallet = document.getElementById("wallet").value;

    const response = await fetch(`https://mainnet.base.org`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            jsonrpc: "2.0",
            method: "eth_getBalance",
            params: [wallet, "latest"],
            id: 1,
        }),
    });

    const data = await response.json();
    const balanceWei = parseInt(data.result, 16);
    const balanceEth = balanceWei / 1e18;

    document.getElementById("result").innerText =
        "Balance on Base: " + balanceEth + " ETH";
}
