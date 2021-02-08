const Cliente = require("../models/cliente")

test('Quando eu digitar um CPF para um cliente válido, deveria retornar true', () => {
  var cliente = new Cliente("Guilherme", "42436598851")
  expect(cliente.validarCPF()).toBe(true);
});

test('Quando eu digitar um CPF para um cliente válido formatado, deveria retornar true', () => {
  var cliente = new Cliente("Guilherme", "424.365.988-51")
  expect(cliente.validarCPF()).toBe(true);
});

test('Quando eu digitar um CPF não definido, deveria retornar false', () => {
  var cliente = new Cliente("Guilherme", undefined)
  expect(cliente.validarCPF()).toBe(false);
});

test('Quando eu digitar um CPF 00000000000 deveria retornar false', () => {
  var cliente = new Cliente("Guilherme", "00000000000")
  expect(cliente.validarCPF()).toBe(false);
});

test('Quando eu digitar um CPF 000000000000 deveria retornar false', () => {
  var cliente = new Cliente("Guilherme", "000000000000")
  expect(cliente.validarCPF()).toBe(false);
});

test('Quando eu digitar um CPF 0000000000 deveria retornar false', () => {
  var cliente = new Cliente("Guilherme", "0000000000")
  expect(cliente.validarCPF()).toBe(false);
});

test('Quando eu digitar um CPF 11111111111 deveria retornar false', () => {
  var cliente = new Cliente("Guilherme", "11111111111")
  expect(cliente.validarCPF()).toBe(false);
});

test('Quando eu digitar um CPF para um cliente inválido, deveria retornar false', () => {
  var cliente = new Cliente("Danilo", "64440783001")
  expect(cliente.validarCPF()).toBe(false);
});