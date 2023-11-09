export default function Multiplicacion() {
  return (
    <>
      <h1 className="text-primary fs-1 text-center py-4">
        Multiplicación de Decimales
      </h1>

      <p>
        La multiplicación de decimales es una operación que se realiza cuando
        los números tienen dos o más decimales y se quiere saber el resultado de
        esa operación
      </p>

      <section className="mb-3">
        <article>
          <h2 className="text-success">
            Multiplicación de decimales con números enteros
          </h2>
          <p>
            Para multiplicar un número decimal por un número entero, se debe
            multiplicar el número decimal por el número entero y se debe colocar
            la coma en el resultado.
          </p>
        </article>

        <article className="text-center">
          <img
            src="/img/multiplicacion-enteros.png"
            alt="multiplicación de decimales con números enteros"
            className="img-fluid w-50"
          />
        </article>
      </section>

      <section className="mb-3">
        <article>
          <h2 className="text-success">
            Multiplicación de decimales con números decimales
          </h2>
          <p>
            Para multiplicar un número decimal por otro número decimal, se debe
            multiplicar el número decimal por el otro número decimal y se debe
            colocar la coma en el resultado.
          </p>
        </article>

        <article className="text-center">
          <img
            src="/img/multiplicacion-decimales.png"
            alt="multiplicación de decimales con números decimales"
            className="img-fluid w-50"
          />
        </article>
      </section>
    </>
  );
}
