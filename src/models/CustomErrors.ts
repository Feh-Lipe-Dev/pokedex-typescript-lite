// classes de erro personalizadas para lidar com erros específicos da aplicação
export class APIError extends Error {
  public statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.name = "APIError";
    this.statusCode = statusCode;
  }
}

// Erro para problemas relacionados à caixa de Pokémon local (salvar, carregar, etc.)
export class LocalBoxError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "LocalBoxError";
  }
}
