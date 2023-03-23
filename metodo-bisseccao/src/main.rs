fn funcao(x:f64) ->f64{
    return x*x*x-9.0*x+3.0;
}
fn main() {
    let a = -4.0;
    let b = -3.0;
    let m:f64;
    let erro = 0.0001;

    if (funcao(a)*funcao(b))<0.0 {
        m = (a+b)/2.0;

        while funcao(m)>erro {
            
        }
    }
}

