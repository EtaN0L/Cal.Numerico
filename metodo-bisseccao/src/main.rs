use std::io;
fn main() {
    let mut a = String::new();
    let mut b = String::new();
    let mut erro = String::new();

    println!("Digite o limite a:");
    io::stdin()
    .read_line(&mut a)
    .expect("Falha ao ler.");
    let mut a:f64 = a.trim().parse().expect("Erro1");

    println!("Digite o limite b:");
    io::stdin()
    .read_line(&mut b)
    .expect("Falha ao ler.");
    let mut b:f64 = b.trim().parse().expect("Erro1.2");

    println!("Digite a tolerancia:");
    io::stdin()
    .read_line(&mut erro)
    .expect("Falha ao ler.");
    let erro:f64 = erro.trim().parse().expect("Erro1.3");

    let mut i=0;
    let mut c = (a+b)/2.0;
    if abs(b-a) < erro {
        println!("O valor de c é: {}, foram {} interações.", c,i);
    }else {
        while abs(b-a) > erro {
            let mut c = (a+b)/2.0;
            println!("o valor de c{}",c);
            if (funcao(a) * funcao(c)) < 0.0 {
                b = c;
            }else {
                a = c;
            }
            
            i+=1;
        }
    }
    

}

fn funcao(x:f64) -> f64{
    return (x*x*x)-(9.0*x)+3.0; //Função definida como x³-9x+3
}

fn abs(x:f64) -> f64 {
    let y = if x >= 0.0 { x } else { -x };
    y
}