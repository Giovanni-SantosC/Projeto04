import { useEffect, useState } from "react";

function ConversorDeMoedas(){
    const [moedas, setMoedas] = useState([]);
    const [deMoeda, setDeMoeda] = useState('USD');
    const [paraMoeda, setParaMoeda] = useState('EUR');
    const [quantidade, setQuantidade] = useState(1);
    const [resultado, setResultado] = useState(0);
}

useEffect(() => {
    fetch('https://api.exchangeratesapi.io/latest')
    .then(response => response.json())
    .then(data => {
        setMoedas([...Object.keys(data.rates)]);
    })
    .catch(error=> console.error('Erro ao buscar moedas:', error));
}, []);

const converterMoeda = () =>{
    fetch(`https://api.exchangeratesapi.io/latest?base=${deMoeda}&symbols=${paraMoeda} `)
}