export default function Sumas() {
  return (
    <>
      <h1 className="text-primary fs-1 text-center py-4">Suma de Quebrados</h1>

      <p>
        La suma de quebrados o fracciones es una operación que se realiza cuando
        se tienen dos o más fracciones y se quiere saber el resultado de la suma
        de las fracciones. Pero antes de realizar la suma de quebrados, debemos
        de tener en cuenta que las fracciones deben de tener el mismo
        denominador. Y si no tienen el mismo denominador, debemos de buscar el
        mínimo común múltiplo (mcm) de los denominadores de las fracciones.
      </p>

      <section className="mb-3">
        <article>
          <h2 className="text-success">
            Suma de fracciones con el mismo denominador
          </h2>
          <p>
            Para sumar fracciones con el mismo denominador se tienen que sumar
            los numeradores dejando el mismo denominador.
          </p>
        </article>

        <article className="text-center">
          <img
            src="/src/assets/suma-mismo-denominador.jpg"
            alt="suma de quebrados con mismo denominador"
            className="img-fluid w-50"
          />
        </article>
      </section>

      <section className="mb-3">
        <article>
          <h2 className="text-success">
            Suma de fracciones con distinto denominador
          </h2>
          <p>
            Para hacer suma de fracciones con distinto denominador, lo primero
            que hay que hacer es poner un denominador común: esto es el mínimo
            común múltiplo entre los denominadores que haya. Después
            multiplicamos cada numerador por el número que hayamos multiplicado
            al denominador.
          </p>
        </article>

        <article className="text-center">
          <img
            src="/src/assets/suma-diferente-denominador.jpg"
            alt="suma de quebrados con distinto denominador"
            className="img-fluid w-50"
          />
        </article>
      </section>
    </>
  );
}
