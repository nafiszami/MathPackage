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


async function multiplication() {
  const response = await fetch(
    '/api/multiplication',
    {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        firstNumber: Number(
          document.getElementById('mul1').value,
        ),

        secondNumber: Number(
          document.getElementById('mul2').value,
        ),

        thirdNumber: Number(
          document.getElementById('mul3').value,
        ),
      }),
    },
  );

  const data = await response.json();

  document.getElementById('mulResult').innerHTML
        = data.result;
}

async function subtraction() {
  const response = await fetch(
    '/api/subtraction',
    {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        firstNumber: Number(
          document.getElementById('sub1').value,
        ),

        secondNumber: Number(
          document.getElementById('sub2').value,
        ),

        thirdNumber: Number(
          document.getElementById('sub3').value,
        ),
      }),
    },
  );

  const data = await response.json();

  document.getElementById('subResult').innerHTML
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

async function maxFinder() {
  const response = await fetch(
    '/api/maximum',
    {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        firstNumber: Number(
          document.getElementById('max1').value,
        ),

        secondNumber: Number(
          document.getElementById('max2').value,
        ),

        thirdNumber: Number(
          document.getElementById('max3').value,
        ),
      }),
    },
  );

  const data = await response.json();

  document.getElementById('maxResult').innerHTML
        = data.result;
}