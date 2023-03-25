fn main() {
    let a = 1.0;
    let b = 2.0;
    let erro1 = 0.001;
    let erro2 = erro1;
    let x0 = 1.5;

    println!("resultado: {:.5}", pontofixo(x0,erro1,erro2));

}

fn funcao(x:f64) -> f64 {
    return (x*x*x)-x-1.0; // Função definida como x³-x-1
}

fn funcaophi(x:f64) -> f64 {
    return (x + 1.0).powf(1.0 / 3.0); // Função Phi definida como 3√(x+1)
}

fn abs(x:f64) -> f64 {//função para calcular o valor absoluto de um número(módulo)
    let y = if x >= 0.0 { x } else { -x };
    y
}

fn pontofixo(x:f64, erroum:f64,errodois:f64) -> f64 {
    let mut xx= funcaophi(x);
    let mut xxnovo = funcaophi(xx);
    
    while abs(xxnovo - xx) > erroum && abs(xxnovo) > errodois{
        xx = xxnovo;
        xxnovo = funcaophi(xx);
    }

    return funcaophi(xxnovo);
}

