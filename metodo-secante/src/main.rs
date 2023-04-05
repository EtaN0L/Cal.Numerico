fn main() {
 let mut x0:f64 = 0.5;
 let mut x1:f64 = 1.0;
 let mut x2: f64;
 let mut f0: f64;
 let mut f1: f64;
 let mut f2: f64;
 let epsilon: f64 = 1e-4;
let mut iteration: u32 = 0;

 loop {
    f0 = funcao(x0);
    f1 = funcao(x1);
    x2 = x1 - (f1 * (x1 - x0)) / (f1 - f0);
    f2 = funcao(x2);
    iteration += 1;

    if f2.abs() < epsilon {
        println!("A raiz é: {:.6} em {} interações", x2,iteration );
        break;
    }

    x0 = x1;
    x1 = x2;

    if iteration > 100 {
        println!("Não foi possível encontrar a raiz em 100 iterações.");
        break;
    }
}
 
}

fn funcao(x:f64) -> f64 { // a função, x³-9x+3
    x*x*x-9.0*x+3.0
}

