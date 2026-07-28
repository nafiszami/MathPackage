async function addition() {
  const response = await fetch(
    '/api/addition',
    {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        firstNumber: Number(
          document.getElementById('add1').value,
        ),

        secondNumber: Number(
          document.getElementById('add2').value,
        ),

        thirdNumber: Number(
          document.getElementById('add3').value,
        ),
      }),
    },
  );

  const data = await response.json();

  document.getElementById('addResult').innerHTML
        = data.result;
}

async function division() {
  const response = await fetch(
    '/api/division',
    {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        firstNumber: Number(
          document.getElementById('div1').value,
        ),

        secondNumber: Number(
          document.getElementById('div2').value,
        ),

        thirdNumber: document.getElementById('div3').value
          ? Number(
              document.getElementById('div3').value,
            )
          : null,
      }),
    },
  );

  const data = await response.json();

  document.getElementById('divisionResult').innerHTML
        = data.result;
}

async function prime() {
  const response = await fetch(
    '/api/prime',
    {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        number: Number(
          document.getElementById('prime').value,
        ),
      }),
    },
  );

  const data = await response.json();

  document.getElementById('primeResult').innerHTML
        = data.result;
}
