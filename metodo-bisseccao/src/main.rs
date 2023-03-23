use std::io;
fn main() {
    let mut a = String::new();
    let mut b = String::new();
    let mut erro = String::new();

    println!("Digite o limite a:");
    io::stdin()
    .read_line(&mut a)
    .expect("Falha ao ler.");

    println!("Digite o limite b:");
    io::stdin()
    .read_line(&mut b)
    .expect("Falha ao ler.");

    println!("Digite a tolerancia:");
    io::stdin()
    .read_line(&mut erro)
    .expect("Falha ao ler.");
}

