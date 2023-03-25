use std::io;
fn main() {
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
    let erro:f64 = erro.trim().parse().expect("Erro1.3");


    println!("A raiz aproximada é: {:.4}",posicaofalsa(a, b, erro)); // Printando o resultado
}

fn funcao(x:f64) -> f64 {
    return (x*x*x)-x-4.0; // Função definida como x³-x-4
}

fn abs(x:f64) -> f64 { // função para calcular o valor absoluto de um número(módulo)
    let y = if x >= 0.0 { x } else { -x };
    y
}

fn posicaofalsa(mut x:f64, mut y:f64, err:f64) -> f64 { // Método da posição falsa
    let mut fx = funcao(x);
    let mut fy = funcao(y);
    let mut c:f64 = (funcao(x)*y - funcao(y)*x)/(funcao(x) - funcao(y));
    let mut fc = funcao(c);
    while abs(funcao(c)) > err { // Verifica que |f(c)| > 0 para ficar rodando
        c = (funcao(x)*y - funcao(y)*x)/(funcao(x) - funcao(y));
        fc = funcao(c);
        if fx * fc < 0.0 {
            y = c;
            fy = fc;
        }else {
            x = c;
            fx = fc;
        }
    }
    
    return c;
}