
fn main() {
    let x0:f64 = 1.5; // O x0 é 1.5
    let x1:f64 = 1.7; // O x1 é 1.7
    let mut x:f64 = x0 - funcao(x0)/funcaophi(x0, x1);

    for i in 1..1000 {
        let xx = x - funcao(x)/funcaophi(x0, x1);
        println!("O valor de x é: {}",x);
        
        x = xx; 
    
    }
}

fn funcao(x:f64) -> f64 { // a função é x²+x-6
    x*x+x-6.0
}

fn funcaophi(x0:f64,x1:f64) -> f64 { // a função phi é x*f(x+1)-x+1*f(x)/f(x1)-f(x)
    (x0*funcao(x1))-(x1*funcao(x0))/funcao(x1)-funcao(x0)
}












/*if true{
            println!("Valor de x{} é {:.6}",i-1,xx);
            exit(0); // ao encontrar a raiz printa e crasha, maximo de 100 interações
        } */