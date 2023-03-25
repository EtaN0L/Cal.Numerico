use std::{io, process::exit};
fn main() {// Início da entrada de dados
    let mut a = String::new();
    let mut b = String::new();
    let mut erro = String::new();

    println!("Digite o limite a:");
    io::stdin()
    .read_line(&mut a)
    .expect("Falha ao ler.");
    let a:f64 = a.trim().parse().expect("Erro1");

    println!("Digite o limite b:");
    io::stdin()
    .read_line(&mut b)
    .expect("Falha ao ler.");
    let b:f64 = b.trim().parse().expect("Erro1.2");

    println!("Digite a tolerancia:");
    io::stdin()
    .read_line(&mut erro)
    .expect("Falha ao ler.");
    let erro:f64 = erro.trim().parse().expect("Erro1.3"); // Fim da entrada de dados

    if funcao(a) * funcao(b) > 0.0 { // Verifica se o intervalo é aceitavel, crasha o app se não for
        println!("Intervalo não aplicável.");
        exit(0);
    }

    println!("A raiz aproximada é: {:.3}",bissec(a, b, erro));// printa a raiz

}

fn funcao(x:f64) -> f64{
    return (x*x*x)-(9.0*x)+3.0; //Função definida como x³-9x+3
}

fn abs(x:f64) -> f64 {//função para calcular o valor absoluto de um número(módulo)
    let y = if x >= 0.0 { x } else { -x };
    y
}

fn bissec(mut x:f64,mut y:f64,err:f64) -> f64 { // O método da bisseção
    let mut fx = funcao(x);
    let mut fy = funcao(y);
    let mut c:f64;
    while abs(y-x) > err { // Enquanto |b-a| for maior que a tolerancia ele vai rodar
        c = (x+y)/2.0;        
        let fc = funcao(c);
        if fx * fc < 0.0 {
            y = c;
            fy = fc;
        }else {
            x = c;
            fx = fc;
        }
    }
    c = (x + y)/2.0;
    return c;    
}


