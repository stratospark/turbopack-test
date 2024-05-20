
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Card_prompts
 * 
 */
export type Card_prompts = {
  /**
   * @zod.string.uuid()
   */
  id: string
  text: string
  state: prompt_state
  /**
   * @zod.string.uuid()
   */
  deck_id: string
  created_at: Date
  updated_at: Date
}

/**
 * Model Cards
 * 
 */
export type Cards = {
  /**
   * @zod.string.uuid()
   */
  id: string
  /**
   * @zod.string.uuid()
   */
  card_prompt_id: string
  front_text: string
  back_text: string | null
  created_at: Date
  updated_at: Date
}

/**
 * Model Decks
 * 
 */
export type Decks = {
  /**
   * @zod.string.uuid()
   */
  id: string
  name: string
  description: string | null
  created_at: Date
  updated_at: Date
}

/**
 * Model Multimedia
 * 
 */
export type Multimedia = {
  /**
   * @zod.string.uuid()
   */
  id: string
  /**
   * @zod.string.uuid()
   */
  multimedia_prompt_id: string
  media_type: string
  url: string | null
  metadata: Prisma.JsonValue | null
  created_at: Date
  updated_at: Date
}

/**
 * Model Multimedia_prompts
 * 
 */
export type Multimedia_prompts = {
  /**
   * @zod.string.uuid()
   */
  id: string
  text: string
  state: prompt_state
  /**
   * @zod.string.uuid()
   */
  card_id: string
  created_at: Date
  updated_at: Date
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const prompt_state: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  FAILED_RETRY: 'FAILED_RETRY',
  FAILED: 'FAILED',
  COMPLETE: 'COMPLETE'
};

export type prompt_state = (typeof prompt_state)[keyof typeof prompt_state]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Card_prompts
 * const card_prompts = await prisma.card_prompts.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Card_prompts
   * const card_prompts = await prisma.card_prompts.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel}): Promise<R>;

      /**
   * `prisma.card_prompts`: Exposes CRUD operations for the **Card_prompts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Card_prompts
    * const card_prompts = await prisma.card_prompts.findMany()
    * ```
    */
  get card_prompts(): Prisma.Card_promptsDelegate<GlobalReject>;

  /**
   * `prisma.cards`: Exposes CRUD operations for the **Cards** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cards
    * const cards = await prisma.cards.findMany()
    * ```
    */
  get cards(): Prisma.CardsDelegate<GlobalReject>;

  /**
   * `prisma.decks`: Exposes CRUD operations for the **Decks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Decks
    * const decks = await prisma.decks.findMany()
    * ```
    */
  get decks(): Prisma.DecksDelegate<GlobalReject>;

  /**
   * `prisma.multimedia`: Exposes CRUD operations for the **Multimedia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Multimedias
    * const multimedias = await prisma.multimedia.findMany()
    * ```
    */
  get multimedia(): Prisma.MultimediaDelegate<GlobalReject>;

  /**
   * `prisma.multimedia_prompts`: Exposes CRUD operations for the **Multimedia_prompts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Multimedia_prompts
    * const multimedia_prompts = await prisma.multimedia_prompts.findMany()
    * ```
    */
  get multimedia_prompts(): Prisma.Multimedia_promptsDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.8.1
   * Query Engine version: d6e67a83f971b175a593ccc12e15c4a757f93ffe
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
export type InputJsonValue = null | string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Card_prompts: 'Card_prompts',
    Cards: 'Cards',
    Decks: 'Decks',
    Multimedia: 'Multimedia',
    Multimedia_prompts: 'Multimedia_prompts'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Card_promptsCountOutputType
   */


  export type Card_promptsCountOutputType = {
    cards: number
  }

  export type Card_promptsCountOutputTypeSelect = {
    cards?: boolean
  }

  export type Card_promptsCountOutputTypeGetPayload<S extends boolean | null | undefined | Card_promptsCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Card_promptsCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (Card_promptsCountOutputTypeArgs)
    ? Card_promptsCountOutputType 
    : S extends { select: any } & (Card_promptsCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Card_promptsCountOutputType ? Card_promptsCountOutputType[P] : never
  } 
      : Card_promptsCountOutputType




  // Custom InputTypes

  /**
   * Card_promptsCountOutputType without action
   */
  export type Card_promptsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Card_promptsCountOutputType
     * 
    **/
    select?: Card_promptsCountOutputTypeSelect | null
  }



  /**
   * Count Type CardsCountOutputType
   */


  export type CardsCountOutputType = {
    multimedia_prompts: number
  }

  export type CardsCountOutputTypeSelect = {
    multimedia_prompts?: boolean
  }

  export type CardsCountOutputTypeGetPayload<S extends boolean | null | undefined | CardsCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CardsCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CardsCountOutputTypeArgs)
    ? CardsCountOutputType 
    : S extends { select: any } & (CardsCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CardsCountOutputType ? CardsCountOutputType[P] : never
  } 
      : CardsCountOutputType




  // Custom InputTypes

  /**
   * CardsCountOutputType without action
   */
  export type CardsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CardsCountOutputType
     * 
    **/
    select?: CardsCountOutputTypeSelect | null
  }



  /**
   * Count Type DecksCountOutputType
   */


  export type DecksCountOutputType = {
    card_prompts: number
  }

  export type DecksCountOutputTypeSelect = {
    card_prompts?: boolean
  }

  export type DecksCountOutputTypeGetPayload<S extends boolean | null | undefined | DecksCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DecksCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (DecksCountOutputTypeArgs)
    ? DecksCountOutputType 
    : S extends { select: any } & (DecksCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof DecksCountOutputType ? DecksCountOutputType[P] : never
  } 
      : DecksCountOutputType




  // Custom InputTypes

  /**
   * DecksCountOutputType without action
   */
  export type DecksCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the DecksCountOutputType
     * 
    **/
    select?: DecksCountOutputTypeSelect | null
  }



  /**
   * Count Type Multimedia_promptsCountOutputType
   */


  export type Multimedia_promptsCountOutputType = {
    multimedia: number
  }

  export type Multimedia_promptsCountOutputTypeSelect = {
    multimedia?: boolean
  }

  export type Multimedia_promptsCountOutputTypeGetPayload<S extends boolean | null | undefined | Multimedia_promptsCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Multimedia_promptsCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (Multimedia_promptsCountOutputTypeArgs)
    ? Multimedia_promptsCountOutputType 
    : S extends { select: any } & (Multimedia_promptsCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Multimedia_promptsCountOutputType ? Multimedia_promptsCountOutputType[P] : never
  } 
      : Multimedia_promptsCountOutputType




  // Custom InputTypes

  /**
   * Multimedia_promptsCountOutputType without action
   */
  export type Multimedia_promptsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Multimedia_promptsCountOutputType
     * 
    **/
    select?: Multimedia_promptsCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Card_prompts
   */


  export type AggregateCard_prompts = {
    _count: Card_promptsCountAggregateOutputType | null
    _min: Card_promptsMinAggregateOutputType | null
    _max: Card_promptsMaxAggregateOutputType | null
  }

  export type Card_promptsMinAggregateOutputType = {
    id: string | null
    text: string | null
    state: prompt_state | null
    deck_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Card_promptsMaxAggregateOutputType = {
    id: string | null
    text: string | null
    state: prompt_state | null
    deck_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Card_promptsCountAggregateOutputType = {
    id: number
    text: number
    state: number
    deck_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Card_promptsMinAggregateInputType = {
    id?: true
    text?: true
    state?: true
    deck_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Card_promptsMaxAggregateInputType = {
    id?: true
    text?: true
    state?: true
    deck_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Card_promptsCountAggregateInputType = {
    id?: true
    text?: true
    state?: true
    deck_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Card_promptsAggregateArgs = {
    /**
     * Filter which Card_prompts to aggregate.
     * 
    **/
    where?: Card_promptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Card_prompts to fetch.
     * 
    **/
    orderBy?: Enumerable<Card_promptsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: Card_promptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Card_prompts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Card_prompts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Card_prompts
    **/
    _count?: true | Card_promptsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Card_promptsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Card_promptsMaxAggregateInputType
  }

  export type GetCard_promptsAggregateType<T extends Card_promptsAggregateArgs> = {
        [P in keyof T & keyof AggregateCard_prompts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCard_prompts[P]>
      : GetScalarType<T[P], AggregateCard_prompts[P]>
  }




  export type Card_promptsGroupByArgs = {
    where?: Card_promptsWhereInput
    orderBy?: Enumerable<Card_promptsOrderByWithAggregationInput>
    by: Array<Card_promptsScalarFieldEnum>
    having?: Card_promptsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Card_promptsCountAggregateInputType | true
    _min?: Card_promptsMinAggregateInputType
    _max?: Card_promptsMaxAggregateInputType
  }


  export type Card_promptsGroupByOutputType = {
    id: string
    text: string
    state: prompt_state
    deck_id: string
    created_at: Date
    updated_at: Date
    _count: Card_promptsCountAggregateOutputType | null
    _min: Card_promptsMinAggregateOutputType | null
    _max: Card_promptsMaxAggregateOutputType | null
  }

  type GetCard_promptsGroupByPayload<T extends Card_promptsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Card_promptsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Card_promptsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Card_promptsGroupByOutputType[P]>
            : GetScalarType<T[P], Card_promptsGroupByOutputType[P]>
        }
      >
    >


  export type Card_promptsSelect = {
    id?: boolean
    text?: boolean
    state?: boolean
    deck_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    decks?: boolean | DecksArgs
    cards?: boolean | Card_prompts$cardsArgs
    _count?: boolean | Card_promptsCountOutputTypeArgs
  }


  export type Card_promptsInclude = {
    decks?: boolean | DecksArgs
    cards?: boolean | Card_prompts$cardsArgs
    _count?: boolean | Card_promptsCountOutputTypeArgs
  } 

  export type Card_promptsGetPayload<S extends boolean | null | undefined | Card_promptsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Card_prompts :
    S extends undefined ? never :
    S extends { include: any } & (Card_promptsArgs | Card_promptsFindManyArgs)
    ? Card_prompts  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'decks' ? DecksGetPayload<S['include'][P]> :
        P extends 'cards' ? Array < CardsGetPayload<S['include'][P]>>  :
        P extends '_count' ? Card_promptsCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (Card_promptsArgs | Card_promptsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'decks' ? DecksGetPayload<S['select'][P]> :
        P extends 'cards' ? Array < CardsGetPayload<S['select'][P]>>  :
        P extends '_count' ? Card_promptsCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Card_prompts ? Card_prompts[P] : never
  } 
      : Card_prompts


  type Card_promptsCountArgs = Merge<
    Omit<Card_promptsFindManyArgs, 'select' | 'include'> & {
      select?: Card_promptsCountAggregateInputType | true
    }
  >

  export interface Card_promptsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Card_prompts that matches the filter.
     * @param {Card_promptsFindUniqueArgs} args - Arguments to find a Card_prompts
     * @example
     * // Get one Card_prompts
     * const card_prompts = await prisma.card_prompts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Card_promptsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Card_promptsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Card_prompts'> extends True ? Prisma__Card_promptsClient<Card_promptsGetPayload<T>> : Prisma__Card_promptsClient<Card_promptsGetPayload<T> | null, null>

    /**
     * Find one Card_prompts that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Card_promptsFindUniqueOrThrowArgs} args - Arguments to find a Card_prompts
     * @example
     * // Get one Card_prompts
     * const card_prompts = await prisma.card_prompts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Card_promptsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Card_promptsFindUniqueOrThrowArgs>
    ): Prisma__Card_promptsClient<Card_promptsGetPayload<T>>

    /**
     * Find the first Card_prompts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Card_promptsFindFirstArgs} args - Arguments to find a Card_prompts
     * @example
     * // Get one Card_prompts
     * const card_prompts = await prisma.card_prompts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Card_promptsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Card_promptsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Card_prompts'> extends True ? Prisma__Card_promptsClient<Card_promptsGetPayload<T>> : Prisma__Card_promptsClient<Card_promptsGetPayload<T> | null, null>

    /**
     * Find the first Card_prompts that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Card_promptsFindFirstOrThrowArgs} args - Arguments to find a Card_prompts
     * @example
     * // Get one Card_prompts
     * const card_prompts = await prisma.card_prompts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Card_promptsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Card_promptsFindFirstOrThrowArgs>
    ): Prisma__Card_promptsClient<Card_promptsGetPayload<T>>

    /**
     * Find zero or more Card_prompts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Card_promptsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Card_prompts
     * const card_prompts = await prisma.card_prompts.findMany()
     * 
     * // Get first 10 Card_prompts
     * const card_prompts = await prisma.card_prompts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const card_promptsWithIdOnly = await prisma.card_prompts.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Card_promptsFindManyArgs>(
      args?: SelectSubset<T, Card_promptsFindManyArgs>
    ): PrismaPromise<Array<Card_promptsGetPayload<T>>>

    /**
     * Create a Card_prompts.
     * @param {Card_promptsCreateArgs} args - Arguments to create a Card_prompts.
     * @example
     * // Create one Card_prompts
     * const Card_prompts = await prisma.card_prompts.create({
     *   data: {
     *     // ... data to create a Card_prompts
     *   }
     * })
     * 
    **/
    create<T extends Card_promptsCreateArgs>(
      args: SelectSubset<T, Card_promptsCreateArgs>
    ): Prisma__Card_promptsClient<Card_promptsGetPayload<T>>

    /**
     * Create many Card_prompts.
     *     @param {Card_promptsCreateManyArgs} args - Arguments to create many Card_prompts.
     *     @example
     *     // Create many Card_prompts
     *     const card_prompts = await prisma.card_prompts.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Card_promptsCreateManyArgs>(
      args?: SelectSubset<T, Card_promptsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Card_prompts.
     * @param {Card_promptsDeleteArgs} args - Arguments to delete one Card_prompts.
     * @example
     * // Delete one Card_prompts
     * const Card_prompts = await prisma.card_prompts.delete({
     *   where: {
     *     // ... filter to delete one Card_prompts
     *   }
     * })
     * 
    **/
    delete<T extends Card_promptsDeleteArgs>(
      args: SelectSubset<T, Card_promptsDeleteArgs>
    ): Prisma__Card_promptsClient<Card_promptsGetPayload<T>>

    /**
     * Update one Card_prompts.
     * @param {Card_promptsUpdateArgs} args - Arguments to update one Card_prompts.
     * @example
     * // Update one Card_prompts
     * const card_prompts = await prisma.card_prompts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Card_promptsUpdateArgs>(
      args: SelectSubset<T, Card_promptsUpdateArgs>
    ): Prisma__Card_promptsClient<Card_promptsGetPayload<T>>

    /**
     * Delete zero or more Card_prompts.
     * @param {Card_promptsDeleteManyArgs} args - Arguments to filter Card_prompts to delete.
     * @example
     * // Delete a few Card_prompts
     * const { count } = await prisma.card_prompts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Card_promptsDeleteManyArgs>(
      args?: SelectSubset<T, Card_promptsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Card_prompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Card_promptsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Card_prompts
     * const card_prompts = await prisma.card_prompts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Card_promptsUpdateManyArgs>(
      args: SelectSubset<T, Card_promptsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Card_prompts.
     * @param {Card_promptsUpsertArgs} args - Arguments to update or create a Card_prompts.
     * @example
     * // Update or create a Card_prompts
     * const card_prompts = await prisma.card_prompts.upsert({
     *   create: {
     *     // ... data to create a Card_prompts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Card_prompts we want to update
     *   }
     * })
    **/
    upsert<T extends Card_promptsUpsertArgs>(
      args: SelectSubset<T, Card_promptsUpsertArgs>
    ): Prisma__Card_promptsClient<Card_promptsGetPayload<T>>

    /**
     * Count the number of Card_prompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Card_promptsCountArgs} args - Arguments to filter Card_prompts to count.
     * @example
     * // Count the number of Card_prompts
     * const count = await prisma.card_prompts.count({
     *   where: {
     *     // ... the filter for the Card_prompts we want to count
     *   }
     * })
    **/
    count<T extends Card_promptsCountArgs>(
      args?: Subset<T, Card_promptsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Card_promptsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Card_prompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Card_promptsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Card_promptsAggregateArgs>(args: Subset<T, Card_promptsAggregateArgs>): PrismaPromise<GetCard_promptsAggregateType<T>>

    /**
     * Group by Card_prompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Card_promptsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Card_promptsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Card_promptsGroupByArgs['orderBy'] }
        : { orderBy?: Card_promptsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Card_promptsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCard_promptsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Card_prompts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Card_promptsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    decks<T extends DecksArgs= {}>(args?: Subset<T, DecksArgs>): Prisma__DecksClient<DecksGetPayload<T> | Null>;

    cards<T extends Card_prompts$cardsArgs= {}>(args?: Subset<T, Card_prompts$cardsArgs>): PrismaPromise<Array<CardsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Card_prompts base type for findUnique actions
   */
  export type Card_promptsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Card_prompts
     * 
    **/
    select?: Card_promptsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Card_promptsInclude | null
    /**
     * Filter, which Card_prompts to fetch.
     * 
    **/
    where: Card_promptsWhereUniqueInput
  }

  /**
   * Card_prompts findUnique
   */
  export interface Card_promptsFindUniqueArgs extends Card_promptsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Card_prompts findUniqueOrThrow
   */
  export type Card_promptsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Card_prompts
     * 
    **/
    select?: Card_promptsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Card_promptsInclude | null
    /**
     * Filter, which Card_prompts to fetch.
     * 
    **/
    where: Card_promptsWhereUniqueInput
  }


  /**
   * Card_prompts base type for findFirst actions
   */
  export type Card_promptsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Card_prompts
     * 
    **/
    select?: Card_promptsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Card_promptsInclude | null
    /**
     * Filter, which Card_prompts to fetch.
     * 
    **/
    where?: Card_promptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Card_prompts to fetch.
     * 
    **/
    orderBy?: Enumerable<Card_promptsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Card_prompts.
     * 
    **/
    cursor?: Card_promptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Card_prompts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Card_prompts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Card_prompts.
     * 
    **/
    distinct?: Enumerable<Card_promptsScalarFieldEnum>
  }

  /**
   * Card_prompts findFirst
   */
  export interface Card_promptsFindFirstArgs extends Card_promptsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Card_prompts findFirstOrThrow
   */
  export type Card_promptsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Card_prompts
     * 
    **/
    select?: Card_promptsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Card_promptsInclude | null
    /**
     * Filter, which Card_prompts to fetch.
     * 
    **/
    where?: Card_promptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Card_prompts to fetch.
     * 
    **/
    orderBy?: Enumerable<Card_promptsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Card_prompts.
     * 
    **/
    cursor?: Card_promptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Card_prompts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Card_prompts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Card_prompts.
     * 
    **/
    distinct?: Enumerable<Card_promptsScalarFieldEnum>
  }


  /**
   * Card_prompts findMany
   */
  export type Card_promptsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Card_prompts
     * 
    **/
    select?: Card_promptsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Card_promptsInclude | null
    /**
     * Filter, which Card_prompts to fetch.
     * 
    **/
    where?: Card_promptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Card_prompts to fetch.
     * 
    **/
    orderBy?: Enumerable<Card_promptsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Card_prompts.
     * 
    **/
    cursor?: Card_promptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Card_prompts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Card_prompts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Card_promptsScalarFieldEnum>
  }


  /**
   * Card_prompts create
   */
  export type Card_promptsCreateArgs = {
    /**
     * Select specific fields to fetch from the Card_prompts
     * 
    **/
    select?: Card_promptsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Card_promptsInclude | null
    /**
     * The data needed to create a Card_prompts.
     * 
    **/
    data: XOR<Card_promptsCreateInput, Card_promptsUncheckedCreateInput>
  }


  /**
   * Card_prompts createMany
   */
  export type Card_promptsCreateManyArgs = {
    /**
     * The data used to create many Card_prompts.
     * 
    **/
    data: Enumerable<Card_promptsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Card_prompts update
   */
  export type Card_promptsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Card_prompts
     * 
    **/
    select?: Card_promptsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Card_promptsInclude | null
    /**
     * The data needed to update a Card_prompts.
     * 
    **/
    data: XOR<Card_promptsUpdateInput, Card_promptsUncheckedUpdateInput>
    /**
     * Choose, which Card_prompts to update.
     * 
    **/
    where: Card_promptsWhereUniqueInput
  }


  /**
   * Card_prompts updateMany
   */
  export type Card_promptsUpdateManyArgs = {
    /**
     * The data used to update Card_prompts.
     * 
    **/
    data: XOR<Card_promptsUpdateManyMutationInput, Card_promptsUncheckedUpdateManyInput>
    /**
     * Filter which Card_prompts to update
     * 
    **/
    where?: Card_promptsWhereInput
  }


  /**
   * Card_prompts upsert
   */
  export type Card_promptsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Card_prompts
     * 
    **/
    select?: Card_promptsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Card_promptsInclude | null
    /**
     * The filter to search for the Card_prompts to update in case it exists.
     * 
    **/
    where: Card_promptsWhereUniqueInput
    /**
     * In case the Card_prompts found by the `where` argument doesn't exist, create a new Card_prompts with this data.
     * 
    **/
    create: XOR<Card_promptsCreateInput, Card_promptsUncheckedCreateInput>
    /**
     * In case the Card_prompts was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<Card_promptsUpdateInput, Card_promptsUncheckedUpdateInput>
  }


  /**
   * Card_prompts delete
   */
  export type Card_promptsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Card_prompts
     * 
    **/
    select?: Card_promptsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Card_promptsInclude | null
    /**
     * Filter which Card_prompts to delete.
     * 
    **/
    where: Card_promptsWhereUniqueInput
  }


  /**
   * Card_prompts deleteMany
   */
  export type Card_promptsDeleteManyArgs = {
    /**
     * Filter which Card_prompts to delete
     * 
    **/
    where?: Card_promptsWhereInput
  }


  /**
   * Card_prompts.cards
   */
  export type Card_prompts$cardsArgs = {
    /**
     * Select specific fields to fetch from the Cards
     * 
    **/
    select?: CardsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CardsInclude | null
    where?: CardsWhereInput
    orderBy?: Enumerable<CardsOrderByWithRelationInput>
    cursor?: CardsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CardsScalarFieldEnum>
  }


  /**
   * Card_prompts without action
   */
  export type Card_promptsArgs = {
    /**
     * Select specific fields to fetch from the Card_prompts
     * 
    **/
    select?: Card_promptsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Card_promptsInclude | null
  }



  /**
   * Model Cards
   */


  export type AggregateCards = {
    _count: CardsCountAggregateOutputType | null
    _min: CardsMinAggregateOutputType | null
    _max: CardsMaxAggregateOutputType | null
  }

  export type CardsMinAggregateOutputType = {
    id: string | null
    card_prompt_id: string | null
    front_text: string | null
    back_text: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CardsMaxAggregateOutputType = {
    id: string | null
    card_prompt_id: string | null
    front_text: string | null
    back_text: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CardsCountAggregateOutputType = {
    id: number
    card_prompt_id: number
    front_text: number
    back_text: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CardsMinAggregateInputType = {
    id?: true
    card_prompt_id?: true
    front_text?: true
    back_text?: true
    created_at?: true
    updated_at?: true
  }

  export type CardsMaxAggregateInputType = {
    id?: true
    card_prompt_id?: true
    front_text?: true
    back_text?: true
    created_at?: true
    updated_at?: true
  }

  export type CardsCountAggregateInputType = {
    id?: true
    card_prompt_id?: true
    front_text?: true
    back_text?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CardsAggregateArgs = {
    /**
     * Filter which Cards to aggregate.
     * 
    **/
    where?: CardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     * 
    **/
    orderBy?: Enumerable<CardsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cards
    **/
    _count?: true | CardsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardsMaxAggregateInputType
  }

  export type GetCardsAggregateType<T extends CardsAggregateArgs> = {
        [P in keyof T & keyof AggregateCards]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCards[P]>
      : GetScalarType<T[P], AggregateCards[P]>
  }




  export type CardsGroupByArgs = {
    where?: CardsWhereInput
    orderBy?: Enumerable<CardsOrderByWithAggregationInput>
    by: Array<CardsScalarFieldEnum>
    having?: CardsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardsCountAggregateInputType | true
    _min?: CardsMinAggregateInputType
    _max?: CardsMaxAggregateInputType
  }


  export type CardsGroupByOutputType = {
    id: string
    card_prompt_id: string
    front_text: string
    back_text: string | null
    created_at: Date
    updated_at: Date
    _count: CardsCountAggregateOutputType | null
    _min: CardsMinAggregateOutputType | null
    _max: CardsMaxAggregateOutputType | null
  }

  type GetCardsGroupByPayload<T extends CardsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CardsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardsGroupByOutputType[P]>
            : GetScalarType<T[P], CardsGroupByOutputType[P]>
        }
      >
    >


  export type CardsSelect = {
    id?: boolean
    card_prompt_id?: boolean
    front_text?: boolean
    back_text?: boolean
    created_at?: boolean
    updated_at?: boolean
    card_prompts?: boolean | Card_promptsArgs
    multimedia_prompts?: boolean | Cards$multimedia_promptsArgs
    _count?: boolean | CardsCountOutputTypeArgs
  }


  export type CardsInclude = {
    card_prompts?: boolean | Card_promptsArgs
    multimedia_prompts?: boolean | Cards$multimedia_promptsArgs
    _count?: boolean | CardsCountOutputTypeArgs
  } 

  export type CardsGetPayload<S extends boolean | null | undefined | CardsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Cards :
    S extends undefined ? never :
    S extends { include: any } & (CardsArgs | CardsFindManyArgs)
    ? Cards  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'card_prompts' ? Card_promptsGetPayload<S['include'][P]> :
        P extends 'multimedia_prompts' ? Array < Multimedia_promptsGetPayload<S['include'][P]>>  :
        P extends '_count' ? CardsCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CardsArgs | CardsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'card_prompts' ? Card_promptsGetPayload<S['select'][P]> :
        P extends 'multimedia_prompts' ? Array < Multimedia_promptsGetPayload<S['select'][P]>>  :
        P extends '_count' ? CardsCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Cards ? Cards[P] : never
  } 
      : Cards


  type CardsCountArgs = Merge<
    Omit<CardsFindManyArgs, 'select' | 'include'> & {
      select?: CardsCountAggregateInputType | true
    }
  >

  export interface CardsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Cards that matches the filter.
     * @param {CardsFindUniqueArgs} args - Arguments to find a Cards
     * @example
     * // Get one Cards
     * const cards = await prisma.cards.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CardsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CardsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Cards'> extends True ? Prisma__CardsClient<CardsGetPayload<T>> : Prisma__CardsClient<CardsGetPayload<T> | null, null>

    /**
     * Find one Cards that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CardsFindUniqueOrThrowArgs} args - Arguments to find a Cards
     * @example
     * // Get one Cards
     * const cards = await prisma.cards.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CardsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CardsFindUniqueOrThrowArgs>
    ): Prisma__CardsClient<CardsGetPayload<T>>

    /**
     * Find the first Cards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardsFindFirstArgs} args - Arguments to find a Cards
     * @example
     * // Get one Cards
     * const cards = await prisma.cards.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CardsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CardsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Cards'> extends True ? Prisma__CardsClient<CardsGetPayload<T>> : Prisma__CardsClient<CardsGetPayload<T> | null, null>

    /**
     * Find the first Cards that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardsFindFirstOrThrowArgs} args - Arguments to find a Cards
     * @example
     * // Get one Cards
     * const cards = await prisma.cards.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CardsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CardsFindFirstOrThrowArgs>
    ): Prisma__CardsClient<CardsGetPayload<T>>

    /**
     * Find zero or more Cards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cards
     * const cards = await prisma.cards.findMany()
     * 
     * // Get first 10 Cards
     * const cards = await prisma.cards.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cardsWithIdOnly = await prisma.cards.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CardsFindManyArgs>(
      args?: SelectSubset<T, CardsFindManyArgs>
    ): PrismaPromise<Array<CardsGetPayload<T>>>

    /**
     * Create a Cards.
     * @param {CardsCreateArgs} args - Arguments to create a Cards.
     * @example
     * // Create one Cards
     * const Cards = await prisma.cards.create({
     *   data: {
     *     // ... data to create a Cards
     *   }
     * })
     * 
    **/
    create<T extends CardsCreateArgs>(
      args: SelectSubset<T, CardsCreateArgs>
    ): Prisma__CardsClient<CardsGetPayload<T>>

    /**
     * Create many Cards.
     *     @param {CardsCreateManyArgs} args - Arguments to create many Cards.
     *     @example
     *     // Create many Cards
     *     const cards = await prisma.cards.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CardsCreateManyArgs>(
      args?: SelectSubset<T, CardsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Cards.
     * @param {CardsDeleteArgs} args - Arguments to delete one Cards.
     * @example
     * // Delete one Cards
     * const Cards = await prisma.cards.delete({
     *   where: {
     *     // ... filter to delete one Cards
     *   }
     * })
     * 
    **/
    delete<T extends CardsDeleteArgs>(
      args: SelectSubset<T, CardsDeleteArgs>
    ): Prisma__CardsClient<CardsGetPayload<T>>

    /**
     * Update one Cards.
     * @param {CardsUpdateArgs} args - Arguments to update one Cards.
     * @example
     * // Update one Cards
     * const cards = await prisma.cards.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CardsUpdateArgs>(
      args: SelectSubset<T, CardsUpdateArgs>
    ): Prisma__CardsClient<CardsGetPayload<T>>

    /**
     * Delete zero or more Cards.
     * @param {CardsDeleteManyArgs} args - Arguments to filter Cards to delete.
     * @example
     * // Delete a few Cards
     * const { count } = await prisma.cards.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CardsDeleteManyArgs>(
      args?: SelectSubset<T, CardsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cards
     * const cards = await prisma.cards.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CardsUpdateManyArgs>(
      args: SelectSubset<T, CardsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Cards.
     * @param {CardsUpsertArgs} args - Arguments to update or create a Cards.
     * @example
     * // Update or create a Cards
     * const cards = await prisma.cards.upsert({
     *   create: {
     *     // ... data to create a Cards
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cards we want to update
     *   }
     * })
    **/
    upsert<T extends CardsUpsertArgs>(
      args: SelectSubset<T, CardsUpsertArgs>
    ): Prisma__CardsClient<CardsGetPayload<T>>

    /**
     * Count the number of Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardsCountArgs} args - Arguments to filter Cards to count.
     * @example
     * // Count the number of Cards
     * const count = await prisma.cards.count({
     *   where: {
     *     // ... the filter for the Cards we want to count
     *   }
     * })
    **/
    count<T extends CardsCountArgs>(
      args?: Subset<T, CardsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CardsAggregateArgs>(args: Subset<T, CardsAggregateArgs>): PrismaPromise<GetCardsAggregateType<T>>

    /**
     * Group by Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CardsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardsGroupByArgs['orderBy'] }
        : { orderBy?: CardsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CardsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Cards.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CardsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    card_prompts<T extends Card_promptsArgs= {}>(args?: Subset<T, Card_promptsArgs>): Prisma__Card_promptsClient<Card_promptsGetPayload<T> | Null>;

    multimedia_prompts<T extends Cards$multimedia_promptsArgs= {}>(args?: Subset<T, Cards$multimedia_promptsArgs>): PrismaPromise<Array<Multimedia_promptsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Cards base type for findUnique actions
   */
  export type CardsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Cards
     * 
    **/
    select?: CardsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CardsInclude | null
    /**
     * Filter, which Cards to fetch.
     * 
    **/
    where: CardsWhereUniqueInput
  }

  /**
   * Cards findUnique
   */
  export interface CardsFindUniqueArgs extends CardsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Cards findUniqueOrThrow
   */
  export type CardsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Cards
     * 
    **/
    select?: CardsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CardsInclude | null
    /**
     * Filter, which Cards to fetch.
     * 
    **/
    where: CardsWhereUniqueInput
  }


  /**
   * Cards base type for findFirst actions
   */
  export type CardsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Cards
     * 
    **/
    select?: CardsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CardsInclude | null
    /**
     * Filter, which Cards to fetch.
     * 
    **/
    where?: CardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     * 
    **/
    orderBy?: Enumerable<CardsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     * 
    **/
    cursor?: CardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     * 
    **/
    distinct?: Enumerable<CardsScalarFieldEnum>
  }

  /**
   * Cards findFirst
   */
  export interface CardsFindFirstArgs extends CardsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Cards findFirstOrThrow
   */
  export type CardsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Cards
     * 
    **/
    select?: CardsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CardsInclude | null
    /**
     * Filter, which Cards to fetch.
     * 
    **/
    where?: CardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     * 
    **/
    orderBy?: Enumerable<CardsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     * 
    **/
    cursor?: CardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     * 
    **/
    distinct?: Enumerable<CardsScalarFieldEnum>
  }


  /**
   * Cards findMany
   */
  export type CardsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Cards
     * 
    **/
    select?: CardsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CardsInclude | null
    /**
     * Filter, which Cards to fetch.
     * 
    **/
    where?: CardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     * 
    **/
    orderBy?: Enumerable<CardsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cards.
     * 
    **/
    cursor?: CardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CardsScalarFieldEnum>
  }


  /**
   * Cards create
   */
  export type CardsCreateArgs = {
    /**
     * Select specific fields to fetch from the Cards
     * 
    **/
    select?: CardsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CardsInclude | null
    /**
     * The data needed to create a Cards.
     * 
    **/
    data: XOR<CardsCreateInput, CardsUncheckedCreateInput>
  }


  /**
   * Cards createMany
   */
  export type CardsCreateManyArgs = {
    /**
     * The data used to create many Cards.
     * 
    **/
    data: Enumerable<CardsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Cards update
   */
  export type CardsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Cards
     * 
    **/
    select?: CardsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CardsInclude | null
    /**
     * The data needed to update a Cards.
     * 
    **/
    data: XOR<CardsUpdateInput, CardsUncheckedUpdateInput>
    /**
     * Choose, which Cards to update.
     * 
    **/
    where: CardsWhereUniqueInput
  }


  /**
   * Cards updateMany
   */
  export type CardsUpdateManyArgs = {
    /**
     * The data used to update Cards.
     * 
    **/
    data: XOR<CardsUpdateManyMutationInput, CardsUncheckedUpdateManyInput>
    /**
     * Filter which Cards to update
     * 
    **/
    where?: CardsWhereInput
  }


  /**
   * Cards upsert
   */
  export type CardsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Cards
     * 
    **/
    select?: CardsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CardsInclude | null
    /**
     * The filter to search for the Cards to update in case it exists.
     * 
    **/
    where: CardsWhereUniqueInput
    /**
     * In case the Cards found by the `where` argument doesn't exist, create a new Cards with this data.
     * 
    **/
    create: XOR<CardsCreateInput, CardsUncheckedCreateInput>
    /**
     * In case the Cards was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CardsUpdateInput, CardsUncheckedUpdateInput>
  }


  /**
   * Cards delete
   */
  export type CardsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Cards
     * 
    **/
    select?: CardsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CardsInclude | null
    /**
     * Filter which Cards to delete.
     * 
    **/
    where: CardsWhereUniqueInput
  }


  /**
   * Cards deleteMany
   */
  export type CardsDeleteManyArgs = {
    /**
     * Filter which Cards to delete
     * 
    **/
    where?: CardsWhereInput
  }


  /**
   * Cards.multimedia_prompts
   */
  export type Cards$multimedia_promptsArgs = {
    /**
     * Select specific fields to fetch from the Multimedia_prompts
     * 
    **/
    select?: Multimedia_promptsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Multimedia_promptsInclude | null
    where?: Multimedia_promptsWhereInput
    orderBy?: Enumerable<Multimedia_promptsOrderByWithRelationInput>
    cursor?: Multimedia_promptsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Multimedia_promptsScalarFieldEnum>
  }


  /**
   * Cards without action
   */
  export type CardsArgs = {
    /**
     * Select specific fields to fetch from the Cards
     * 
    **/
    select?: CardsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CardsInclude | null
  }



  /**
   * Model Decks
   */


  export type AggregateDecks = {
    _count: DecksCountAggregateOutputType | null
    _min: DecksMinAggregateOutputType | null
    _max: DecksMaxAggregateOutputType | null
  }

  export type DecksMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DecksMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DecksCountAggregateOutputType = {
    id: number
    name: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type DecksMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type DecksMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type DecksCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type DecksAggregateArgs = {
    /**
     * Filter which Decks to aggregate.
     * 
    **/
    where?: DecksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decks to fetch.
     * 
    **/
    orderBy?: Enumerable<DecksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: DecksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Decks
    **/
    _count?: true | DecksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DecksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DecksMaxAggregateInputType
  }

  export type GetDecksAggregateType<T extends DecksAggregateArgs> = {
        [P in keyof T & keyof AggregateDecks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDecks[P]>
      : GetScalarType<T[P], AggregateDecks[P]>
  }




  export type DecksGroupByArgs = {
    where?: DecksWhereInput
    orderBy?: Enumerable<DecksOrderByWithAggregationInput>
    by: Array<DecksScalarFieldEnum>
    having?: DecksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DecksCountAggregateInputType | true
    _min?: DecksMinAggregateInputType
    _max?: DecksMaxAggregateInputType
  }


  export type DecksGroupByOutputType = {
    id: string
    name: string
    description: string | null
    created_at: Date
    updated_at: Date
    _count: DecksCountAggregateOutputType | null
    _min: DecksMinAggregateOutputType | null
    _max: DecksMaxAggregateOutputType | null
  }

  type GetDecksGroupByPayload<T extends DecksGroupByArgs> = PrismaPromise<
    Array<
      PickArray<DecksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DecksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DecksGroupByOutputType[P]>
            : GetScalarType<T[P], DecksGroupByOutputType[P]>
        }
      >
    >


  export type DecksSelect = {
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    card_prompts?: boolean | Decks$card_promptsArgs
    _count?: boolean | DecksCountOutputTypeArgs
  }


  export type DecksInclude = {
    card_prompts?: boolean | Decks$card_promptsArgs
    _count?: boolean | DecksCountOutputTypeArgs
  } 

  export type DecksGetPayload<S extends boolean | null | undefined | DecksArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Decks :
    S extends undefined ? never :
    S extends { include: any } & (DecksArgs | DecksFindManyArgs)
    ? Decks  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'card_prompts' ? Array < Card_promptsGetPayload<S['include'][P]>>  :
        P extends '_count' ? DecksCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (DecksArgs | DecksFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'card_prompts' ? Array < Card_promptsGetPayload<S['select'][P]>>  :
        P extends '_count' ? DecksCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Decks ? Decks[P] : never
  } 
      : Decks


  type DecksCountArgs = Merge<
    Omit<DecksFindManyArgs, 'select' | 'include'> & {
      select?: DecksCountAggregateInputType | true
    }
  >

  export interface DecksDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Decks that matches the filter.
     * @param {DecksFindUniqueArgs} args - Arguments to find a Decks
     * @example
     * // Get one Decks
     * const decks = await prisma.decks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DecksFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DecksFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Decks'> extends True ? Prisma__DecksClient<DecksGetPayload<T>> : Prisma__DecksClient<DecksGetPayload<T> | null, null>

    /**
     * Find one Decks that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DecksFindUniqueOrThrowArgs} args - Arguments to find a Decks
     * @example
     * // Get one Decks
     * const decks = await prisma.decks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DecksFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DecksFindUniqueOrThrowArgs>
    ): Prisma__DecksClient<DecksGetPayload<T>>

    /**
     * Find the first Decks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecksFindFirstArgs} args - Arguments to find a Decks
     * @example
     * // Get one Decks
     * const decks = await prisma.decks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DecksFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DecksFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Decks'> extends True ? Prisma__DecksClient<DecksGetPayload<T>> : Prisma__DecksClient<DecksGetPayload<T> | null, null>

    /**
     * Find the first Decks that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecksFindFirstOrThrowArgs} args - Arguments to find a Decks
     * @example
     * // Get one Decks
     * const decks = await prisma.decks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DecksFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DecksFindFirstOrThrowArgs>
    ): Prisma__DecksClient<DecksGetPayload<T>>

    /**
     * Find zero or more Decks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecksFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Decks
     * const decks = await prisma.decks.findMany()
     * 
     * // Get first 10 Decks
     * const decks = await prisma.decks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const decksWithIdOnly = await prisma.decks.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DecksFindManyArgs>(
      args?: SelectSubset<T, DecksFindManyArgs>
    ): PrismaPromise<Array<DecksGetPayload<T>>>

    /**
     * Create a Decks.
     * @param {DecksCreateArgs} args - Arguments to create a Decks.
     * @example
     * // Create one Decks
     * const Decks = await prisma.decks.create({
     *   data: {
     *     // ... data to create a Decks
     *   }
     * })
     * 
    **/
    create<T extends DecksCreateArgs>(
      args: SelectSubset<T, DecksCreateArgs>
    ): Prisma__DecksClient<DecksGetPayload<T>>

    /**
     * Create many Decks.
     *     @param {DecksCreateManyArgs} args - Arguments to create many Decks.
     *     @example
     *     // Create many Decks
     *     const decks = await prisma.decks.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DecksCreateManyArgs>(
      args?: SelectSubset<T, DecksCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Decks.
     * @param {DecksDeleteArgs} args - Arguments to delete one Decks.
     * @example
     * // Delete one Decks
     * const Decks = await prisma.decks.delete({
     *   where: {
     *     // ... filter to delete one Decks
     *   }
     * })
     * 
    **/
    delete<T extends DecksDeleteArgs>(
      args: SelectSubset<T, DecksDeleteArgs>
    ): Prisma__DecksClient<DecksGetPayload<T>>

    /**
     * Update one Decks.
     * @param {DecksUpdateArgs} args - Arguments to update one Decks.
     * @example
     * // Update one Decks
     * const decks = await prisma.decks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DecksUpdateArgs>(
      args: SelectSubset<T, DecksUpdateArgs>
    ): Prisma__DecksClient<DecksGetPayload<T>>

    /**
     * Delete zero or more Decks.
     * @param {DecksDeleteManyArgs} args - Arguments to filter Decks to delete.
     * @example
     * // Delete a few Decks
     * const { count } = await prisma.decks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DecksDeleteManyArgs>(
      args?: SelectSubset<T, DecksDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Decks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Decks
     * const decks = await prisma.decks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DecksUpdateManyArgs>(
      args: SelectSubset<T, DecksUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Decks.
     * @param {DecksUpsertArgs} args - Arguments to update or create a Decks.
     * @example
     * // Update or create a Decks
     * const decks = await prisma.decks.upsert({
     *   create: {
     *     // ... data to create a Decks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Decks we want to update
     *   }
     * })
    **/
    upsert<T extends DecksUpsertArgs>(
      args: SelectSubset<T, DecksUpsertArgs>
    ): Prisma__DecksClient<DecksGetPayload<T>>

    /**
     * Count the number of Decks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecksCountArgs} args - Arguments to filter Decks to count.
     * @example
     * // Count the number of Decks
     * const count = await prisma.decks.count({
     *   where: {
     *     // ... the filter for the Decks we want to count
     *   }
     * })
    **/
    count<T extends DecksCountArgs>(
      args?: Subset<T, DecksCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DecksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Decks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DecksAggregateArgs>(args: Subset<T, DecksAggregateArgs>): PrismaPromise<GetDecksAggregateType<T>>

    /**
     * Group by Decks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DecksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DecksGroupByArgs['orderBy'] }
        : { orderBy?: DecksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DecksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDecksGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Decks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DecksClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    card_prompts<T extends Decks$card_promptsArgs= {}>(args?: Subset<T, Decks$card_promptsArgs>): PrismaPromise<Array<Card_promptsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Decks base type for findUnique actions
   */
  export type DecksFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Decks
     * 
    **/
    select?: DecksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DecksInclude | null
    /**
     * Filter, which Decks to fetch.
     * 
    **/
    where: DecksWhereUniqueInput
  }

  /**
   * Decks findUnique
   */
  export interface DecksFindUniqueArgs extends DecksFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Decks findUniqueOrThrow
   */
  export type DecksFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Decks
     * 
    **/
    select?: DecksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DecksInclude | null
    /**
     * Filter, which Decks to fetch.
     * 
    **/
    where: DecksWhereUniqueInput
  }


  /**
   * Decks base type for findFirst actions
   */
  export type DecksFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Decks
     * 
    **/
    select?: DecksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DecksInclude | null
    /**
     * Filter, which Decks to fetch.
     * 
    **/
    where?: DecksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decks to fetch.
     * 
    **/
    orderBy?: Enumerable<DecksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Decks.
     * 
    **/
    cursor?: DecksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Decks.
     * 
    **/
    distinct?: Enumerable<DecksScalarFieldEnum>
  }

  /**
   * Decks findFirst
   */
  export interface DecksFindFirstArgs extends DecksFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Decks findFirstOrThrow
   */
  export type DecksFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Decks
     * 
    **/
    select?: DecksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DecksInclude | null
    /**
     * Filter, which Decks to fetch.
     * 
    **/
    where?: DecksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decks to fetch.
     * 
    **/
    orderBy?: Enumerable<DecksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Decks.
     * 
    **/
    cursor?: DecksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Decks.
     * 
    **/
    distinct?: Enumerable<DecksScalarFieldEnum>
  }


  /**
   * Decks findMany
   */
  export type DecksFindManyArgs = {
    /**
     * Select specific fields to fetch from the Decks
     * 
    **/
    select?: DecksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DecksInclude | null
    /**
     * Filter, which Decks to fetch.
     * 
    **/
    where?: DecksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decks to fetch.
     * 
    **/
    orderBy?: Enumerable<DecksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Decks.
     * 
    **/
    cursor?: DecksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decks.
     * 
    **/
    skip?: number
    distinct?: Enumerable<DecksScalarFieldEnum>
  }


  /**
   * Decks create
   */
  export type DecksCreateArgs = {
    /**
     * Select specific fields to fetch from the Decks
     * 
    **/
    select?: DecksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DecksInclude | null
    /**
     * The data needed to create a Decks.
     * 
    **/
    data: XOR<DecksCreateInput, DecksUncheckedCreateInput>
  }


  /**
   * Decks createMany
   */
  export type DecksCreateManyArgs = {
    /**
     * The data used to create many Decks.
     * 
    **/
    data: Enumerable<DecksCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Decks update
   */
  export type DecksUpdateArgs = {
    /**
     * Select specific fields to fetch from the Decks
     * 
    **/
    select?: DecksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DecksInclude | null
    /**
     * The data needed to update a Decks.
     * 
    **/
    data: XOR<DecksUpdateInput, DecksUncheckedUpdateInput>
    /**
     * Choose, which Decks to update.
     * 
    **/
    where: DecksWhereUniqueInput
  }


  /**
   * Decks updateMany
   */
  export type DecksUpdateManyArgs = {
    /**
     * The data used to update Decks.
     * 
    **/
    data: XOR<DecksUpdateManyMutationInput, DecksUncheckedUpdateManyInput>
    /**
     * Filter which Decks to update
     * 
    **/
    where?: DecksWhereInput
  }


  /**
   * Decks upsert
   */
  export type DecksUpsertArgs = {
    /**
     * Select specific fields to fetch from the Decks
     * 
    **/
    select?: DecksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DecksInclude | null
    /**
     * The filter to search for the Decks to update in case it exists.
     * 
    **/
    where: DecksWhereUniqueInput
    /**
     * In case the Decks found by the `where` argument doesn't exist, create a new Decks with this data.
     * 
    **/
    create: XOR<DecksCreateInput, DecksUncheckedCreateInput>
    /**
     * In case the Decks was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<DecksUpdateInput, DecksUncheckedUpdateInput>
  }


  /**
   * Decks delete
   */
  export type DecksDeleteArgs = {
    /**
     * Select specific fields to fetch from the Decks
     * 
    **/
    select?: DecksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DecksInclude | null
    /**
     * Filter which Decks to delete.
     * 
    **/
    where: DecksWhereUniqueInput
  }


  /**
   * Decks deleteMany
   */
  export type DecksDeleteManyArgs = {
    /**
     * Filter which Decks to delete
     * 
    **/
    where?: DecksWhereInput
  }


  /**
   * Decks.card_prompts
   */
  export type Decks$card_promptsArgs = {
    /**
     * Select specific fields to fetch from the Card_prompts
     * 
    **/
    select?: Card_promptsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Card_promptsInclude | null
    where?: Card_promptsWhereInput
    orderBy?: Enumerable<Card_promptsOrderByWithRelationInput>
    cursor?: Card_promptsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Card_promptsScalarFieldEnum>
  }


  /**
   * Decks without action
   */
  export type DecksArgs = {
    /**
     * Select specific fields to fetch from the Decks
     * 
    **/
    select?: DecksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DecksInclude | null
  }



  /**
   * Model Multimedia
   */


  export type AggregateMultimedia = {
    _count: MultimediaCountAggregateOutputType | null
    _min: MultimediaMinAggregateOutputType | null
    _max: MultimediaMaxAggregateOutputType | null
  }

  export type MultimediaMinAggregateOutputType = {
    id: string | null
    multimedia_prompt_id: string | null
    media_type: string | null
    url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MultimediaMaxAggregateOutputType = {
    id: string | null
    multimedia_prompt_id: string | null
    media_type: string | null
    url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MultimediaCountAggregateOutputType = {
    id: number
    multimedia_prompt_id: number
    media_type: number
    url: number
    metadata: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type MultimediaMinAggregateInputType = {
    id?: true
    multimedia_prompt_id?: true
    media_type?: true
    url?: true
    created_at?: true
    updated_at?: true
  }

  export type MultimediaMaxAggregateInputType = {
    id?: true
    multimedia_prompt_id?: true
    media_type?: true
    url?: true
    created_at?: true
    updated_at?: true
  }

  export type MultimediaCountAggregateInputType = {
    id?: true
    multimedia_prompt_id?: true
    media_type?: true
    url?: true
    metadata?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type MultimediaAggregateArgs = {
    /**
     * Filter which Multimedia to aggregate.
     * 
    **/
    where?: MultimediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Multimedias to fetch.
     * 
    **/
    orderBy?: Enumerable<MultimediaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: MultimediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Multimedias from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Multimedias.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Multimedias
    **/
    _count?: true | MultimediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MultimediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MultimediaMaxAggregateInputType
  }

  export type GetMultimediaAggregateType<T extends MultimediaAggregateArgs> = {
        [P in keyof T & keyof AggregateMultimedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMultimedia[P]>
      : GetScalarType<T[P], AggregateMultimedia[P]>
  }




  export type MultimediaGroupByArgs = {
    where?: MultimediaWhereInput
    orderBy?: Enumerable<MultimediaOrderByWithAggregationInput>
    by: Array<MultimediaScalarFieldEnum>
    having?: MultimediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MultimediaCountAggregateInputType | true
    _min?: MultimediaMinAggregateInputType
    _max?: MultimediaMaxAggregateInputType
  }


  export type MultimediaGroupByOutputType = {
    id: string
    multimedia_prompt_id: string
    media_type: string
    url: string | null
    metadata: JsonValue | null
    created_at: Date
    updated_at: Date
    _count: MultimediaCountAggregateOutputType | null
    _min: MultimediaMinAggregateOutputType | null
    _max: MultimediaMaxAggregateOutputType | null
  }

  type GetMultimediaGroupByPayload<T extends MultimediaGroupByArgs> = PrismaPromise<
    Array<
      PickArray<MultimediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MultimediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MultimediaGroupByOutputType[P]>
            : GetScalarType<T[P], MultimediaGroupByOutputType[P]>
        }
      >
    >


  export type MultimediaSelect = {
    id?: boolean
    multimedia_prompt_id?: boolean
    media_type?: boolean
    url?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
    multimedia_prompts?: boolean | Multimedia_promptsArgs
  }


  export type MultimediaInclude = {
    multimedia_prompts?: boolean | Multimedia_promptsArgs
  } 

  export type MultimediaGetPayload<S extends boolean | null | undefined | MultimediaArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Multimedia :
    S extends undefined ? never :
    S extends { include: any } & (MultimediaArgs | MultimediaFindManyArgs)
    ? Multimedia  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'multimedia_prompts' ? Multimedia_promptsGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (MultimediaArgs | MultimediaFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'multimedia_prompts' ? Multimedia_promptsGetPayload<S['select'][P]> :  P extends keyof Multimedia ? Multimedia[P] : never
  } 
      : Multimedia


  type MultimediaCountArgs = Merge<
    Omit<MultimediaFindManyArgs, 'select' | 'include'> & {
      select?: MultimediaCountAggregateInputType | true
    }
  >

  export interface MultimediaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Multimedia that matches the filter.
     * @param {MultimediaFindUniqueArgs} args - Arguments to find a Multimedia
     * @example
     * // Get one Multimedia
     * const multimedia = await prisma.multimedia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MultimediaFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MultimediaFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Multimedia'> extends True ? Prisma__MultimediaClient<MultimediaGetPayload<T>> : Prisma__MultimediaClient<MultimediaGetPayload<T> | null, null>

    /**
     * Find one Multimedia that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MultimediaFindUniqueOrThrowArgs} args - Arguments to find a Multimedia
     * @example
     * // Get one Multimedia
     * const multimedia = await prisma.multimedia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MultimediaFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MultimediaFindUniqueOrThrowArgs>
    ): Prisma__MultimediaClient<MultimediaGetPayload<T>>

    /**
     * Find the first Multimedia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MultimediaFindFirstArgs} args - Arguments to find a Multimedia
     * @example
     * // Get one Multimedia
     * const multimedia = await prisma.multimedia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MultimediaFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MultimediaFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Multimedia'> extends True ? Prisma__MultimediaClient<MultimediaGetPayload<T>> : Prisma__MultimediaClient<MultimediaGetPayload<T> | null, null>

    /**
     * Find the first Multimedia that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MultimediaFindFirstOrThrowArgs} args - Arguments to find a Multimedia
     * @example
     * // Get one Multimedia
     * const multimedia = await prisma.multimedia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MultimediaFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MultimediaFindFirstOrThrowArgs>
    ): Prisma__MultimediaClient<MultimediaGetPayload<T>>

    /**
     * Find zero or more Multimedias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MultimediaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Multimedias
     * const multimedias = await prisma.multimedia.findMany()
     * 
     * // Get first 10 Multimedias
     * const multimedias = await prisma.multimedia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const multimediaWithIdOnly = await prisma.multimedia.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MultimediaFindManyArgs>(
      args?: SelectSubset<T, MultimediaFindManyArgs>
    ): PrismaPromise<Array<MultimediaGetPayload<T>>>

    /**
     * Create a Multimedia.
     * @param {MultimediaCreateArgs} args - Arguments to create a Multimedia.
     * @example
     * // Create one Multimedia
     * const Multimedia = await prisma.multimedia.create({
     *   data: {
     *     // ... data to create a Multimedia
     *   }
     * })
     * 
    **/
    create<T extends MultimediaCreateArgs>(
      args: SelectSubset<T, MultimediaCreateArgs>
    ): Prisma__MultimediaClient<MultimediaGetPayload<T>>

    /**
     * Create many Multimedias.
     *     @param {MultimediaCreateManyArgs} args - Arguments to create many Multimedias.
     *     @example
     *     // Create many Multimedias
     *     const multimedia = await prisma.multimedia.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MultimediaCreateManyArgs>(
      args?: SelectSubset<T, MultimediaCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Multimedia.
     * @param {MultimediaDeleteArgs} args - Arguments to delete one Multimedia.
     * @example
     * // Delete one Multimedia
     * const Multimedia = await prisma.multimedia.delete({
     *   where: {
     *     // ... filter to delete one Multimedia
     *   }
     * })
     * 
    **/
    delete<T extends MultimediaDeleteArgs>(
      args: SelectSubset<T, MultimediaDeleteArgs>
    ): Prisma__MultimediaClient<MultimediaGetPayload<T>>

    /**
     * Update one Multimedia.
     * @param {MultimediaUpdateArgs} args - Arguments to update one Multimedia.
     * @example
     * // Update one Multimedia
     * const multimedia = await prisma.multimedia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MultimediaUpdateArgs>(
      args: SelectSubset<T, MultimediaUpdateArgs>
    ): Prisma__MultimediaClient<MultimediaGetPayload<T>>

    /**
     * Delete zero or more Multimedias.
     * @param {MultimediaDeleteManyArgs} args - Arguments to filter Multimedias to delete.
     * @example
     * // Delete a few Multimedias
     * const { count } = await prisma.multimedia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MultimediaDeleteManyArgs>(
      args?: SelectSubset<T, MultimediaDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Multimedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MultimediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Multimedias
     * const multimedia = await prisma.multimedia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MultimediaUpdateManyArgs>(
      args: SelectSubset<T, MultimediaUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Multimedia.
     * @param {MultimediaUpsertArgs} args - Arguments to update or create a Multimedia.
     * @example
     * // Update or create a Multimedia
     * const multimedia = await prisma.multimedia.upsert({
     *   create: {
     *     // ... data to create a Multimedia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Multimedia we want to update
     *   }
     * })
    **/
    upsert<T extends MultimediaUpsertArgs>(
      args: SelectSubset<T, MultimediaUpsertArgs>
    ): Prisma__MultimediaClient<MultimediaGetPayload<T>>

    /**
     * Count the number of Multimedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MultimediaCountArgs} args - Arguments to filter Multimedias to count.
     * @example
     * // Count the number of Multimedias
     * const count = await prisma.multimedia.count({
     *   where: {
     *     // ... the filter for the Multimedias we want to count
     *   }
     * })
    **/
    count<T extends MultimediaCountArgs>(
      args?: Subset<T, MultimediaCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MultimediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Multimedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MultimediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MultimediaAggregateArgs>(args: Subset<T, MultimediaAggregateArgs>): PrismaPromise<GetMultimediaAggregateType<T>>

    /**
     * Group by Multimedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MultimediaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MultimediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MultimediaGroupByArgs['orderBy'] }
        : { orderBy?: MultimediaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MultimediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMultimediaGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Multimedia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MultimediaClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    multimedia_prompts<T extends Multimedia_promptsArgs= {}>(args?: Subset<T, Multimedia_promptsArgs>): Prisma__Multimedia_promptsClient<Multimedia_promptsGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Multimedia base type for findUnique actions
   */
  export type MultimediaFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Multimedia
     * 
    **/
    select?: MultimediaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MultimediaInclude | null
    /**
     * Filter, which Multimedia to fetch.
     * 
    **/
    where: MultimediaWhereUniqueInput
  }

  /**
   * Multimedia findUnique
   */
  export interface MultimediaFindUniqueArgs extends MultimediaFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Multimedia findUniqueOrThrow
   */
  export type MultimediaFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Multimedia
     * 
    **/
    select?: MultimediaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MultimediaInclude | null
    /**
     * Filter, which Multimedia to fetch.
     * 
    **/
    where: MultimediaWhereUniqueInput
  }


  /**
   * Multimedia base type for findFirst actions
   */
  export type MultimediaFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Multimedia
     * 
    **/
    select?: MultimediaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MultimediaInclude | null
    /**
     * Filter, which Multimedia to fetch.
     * 
    **/
    where?: MultimediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Multimedias to fetch.
     * 
    **/
    orderBy?: Enumerable<MultimediaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Multimedias.
     * 
    **/
    cursor?: MultimediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Multimedias from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Multimedias.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Multimedias.
     * 
    **/
    distinct?: Enumerable<MultimediaScalarFieldEnum>
  }

  /**
   * Multimedia findFirst
   */
  export interface MultimediaFindFirstArgs extends MultimediaFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Multimedia findFirstOrThrow
   */
  export type MultimediaFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Multimedia
     * 
    **/
    select?: MultimediaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MultimediaInclude | null
    /**
     * Filter, which Multimedia to fetch.
     * 
    **/
    where?: MultimediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Multimedias to fetch.
     * 
    **/
    orderBy?: Enumerable<MultimediaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Multimedias.
     * 
    **/
    cursor?: MultimediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Multimedias from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Multimedias.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Multimedias.
     * 
    **/
    distinct?: Enumerable<MultimediaScalarFieldEnum>
  }


  /**
   * Multimedia findMany
   */
  export type MultimediaFindManyArgs = {
    /**
     * Select specific fields to fetch from the Multimedia
     * 
    **/
    select?: MultimediaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MultimediaInclude | null
    /**
     * Filter, which Multimedias to fetch.
     * 
    **/
    where?: MultimediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Multimedias to fetch.
     * 
    **/
    orderBy?: Enumerable<MultimediaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Multimedias.
     * 
    **/
    cursor?: MultimediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Multimedias from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Multimedias.
     * 
    **/
    skip?: number
    distinct?: Enumerable<MultimediaScalarFieldEnum>
  }


  /**
   * Multimedia create
   */
  export type MultimediaCreateArgs = {
    /**
     * Select specific fields to fetch from the Multimedia
     * 
    **/
    select?: MultimediaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MultimediaInclude | null
    /**
     * The data needed to create a Multimedia.
     * 
    **/
    data: XOR<MultimediaCreateInput, MultimediaUncheckedCreateInput>
  }


  /**
   * Multimedia createMany
   */
  export type MultimediaCreateManyArgs = {
    /**
     * The data used to create many Multimedias.
     * 
    **/
    data: Enumerable<MultimediaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Multimedia update
   */
  export type MultimediaUpdateArgs = {
    /**
     * Select specific fields to fetch from the Multimedia
     * 
    **/
    select?: MultimediaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MultimediaInclude | null
    /**
     * The data needed to update a Multimedia.
     * 
    **/
    data: XOR<MultimediaUpdateInput, MultimediaUncheckedUpdateInput>
    /**
     * Choose, which Multimedia to update.
     * 
    **/
    where: MultimediaWhereUniqueInput
  }


  /**
   * Multimedia updateMany
   */
  export type MultimediaUpdateManyArgs = {
    /**
     * The data used to update Multimedias.
     * 
    **/
    data: XOR<MultimediaUpdateManyMutationInput, MultimediaUncheckedUpdateManyInput>
    /**
     * Filter which Multimedias to update
     * 
    **/
    where?: MultimediaWhereInput
  }


  /**
   * Multimedia upsert
   */
  export type MultimediaUpsertArgs = {
    /**
     * Select specific fields to fetch from the Multimedia
     * 
    **/
    select?: MultimediaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MultimediaInclude | null
    /**
     * The filter to search for the Multimedia to update in case it exists.
     * 
    **/
    where: MultimediaWhereUniqueInput
    /**
     * In case the Multimedia found by the `where` argument doesn't exist, create a new Multimedia with this data.
     * 
    **/
    create: XOR<MultimediaCreateInput, MultimediaUncheckedCreateInput>
    /**
     * In case the Multimedia was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<MultimediaUpdateInput, MultimediaUncheckedUpdateInput>
  }


  /**
   * Multimedia delete
   */
  export type MultimediaDeleteArgs = {
    /**
     * Select specific fields to fetch from the Multimedia
     * 
    **/
    select?: MultimediaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MultimediaInclude | null
    /**
     * Filter which Multimedia to delete.
     * 
    **/
    where: MultimediaWhereUniqueInput
  }


  /**
   * Multimedia deleteMany
   */
  export type MultimediaDeleteManyArgs = {
    /**
     * Filter which Multimedias to delete
     * 
    **/
    where?: MultimediaWhereInput
  }


  /**
   * Multimedia without action
   */
  export type MultimediaArgs = {
    /**
     * Select specific fields to fetch from the Multimedia
     * 
    **/
    select?: MultimediaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MultimediaInclude | null
  }



  /**
   * Model Multimedia_prompts
   */


  export type AggregateMultimedia_prompts = {
    _count: Multimedia_promptsCountAggregateOutputType | null
    _min: Multimedia_promptsMinAggregateOutputType | null
    _max: Multimedia_promptsMaxAggregateOutputType | null
  }

  export type Multimedia_promptsMinAggregateOutputType = {
    id: string | null
    text: string | null
    state: prompt_state | null
    card_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Multimedia_promptsMaxAggregateOutputType = {
    id: string | null
    text: string | null
    state: prompt_state | null
    card_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Multimedia_promptsCountAggregateOutputType = {
    id: number
    text: number
    state: number
    card_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Multimedia_promptsMinAggregateInputType = {
    id?: true
    text?: true
    state?: true
    card_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Multimedia_promptsMaxAggregateInputType = {
    id?: true
    text?: true
    state?: true
    card_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Multimedia_promptsCountAggregateInputType = {
    id?: true
    text?: true
    state?: true
    card_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Multimedia_promptsAggregateArgs = {
    /**
     * Filter which Multimedia_prompts to aggregate.
     * 
    **/
    where?: Multimedia_promptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Multimedia_prompts to fetch.
     * 
    **/
    orderBy?: Enumerable<Multimedia_promptsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: Multimedia_promptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Multimedia_prompts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Multimedia_prompts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Multimedia_prompts
    **/
    _count?: true | Multimedia_promptsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Multimedia_promptsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Multimedia_promptsMaxAggregateInputType
  }

  export type GetMultimedia_promptsAggregateType<T extends Multimedia_promptsAggregateArgs> = {
        [P in keyof T & keyof AggregateMultimedia_prompts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMultimedia_prompts[P]>
      : GetScalarType<T[P], AggregateMultimedia_prompts[P]>
  }




  export type Multimedia_promptsGroupByArgs = {
    where?: Multimedia_promptsWhereInput
    orderBy?: Enumerable<Multimedia_promptsOrderByWithAggregationInput>
    by: Array<Multimedia_promptsScalarFieldEnum>
    having?: Multimedia_promptsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Multimedia_promptsCountAggregateInputType | true
    _min?: Multimedia_promptsMinAggregateInputType
    _max?: Multimedia_promptsMaxAggregateInputType
  }


  export type Multimedia_promptsGroupByOutputType = {
    id: string
    text: string
    state: prompt_state
    card_id: string
    created_at: Date
    updated_at: Date
    _count: Multimedia_promptsCountAggregateOutputType | null
    _min: Multimedia_promptsMinAggregateOutputType | null
    _max: Multimedia_promptsMaxAggregateOutputType | null
  }

  type GetMultimedia_promptsGroupByPayload<T extends Multimedia_promptsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Multimedia_promptsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Multimedia_promptsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Multimedia_promptsGroupByOutputType[P]>
            : GetScalarType<T[P], Multimedia_promptsGroupByOutputType[P]>
        }
      >
    >


  export type Multimedia_promptsSelect = {
    id?: boolean
    text?: boolean
    state?: boolean
    card_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    multimedia?: boolean | Multimedia_prompts$multimediaArgs
    cards?: boolean | CardsArgs
    _count?: boolean | Multimedia_promptsCountOutputTypeArgs
  }


  export type Multimedia_promptsInclude = {
    multimedia?: boolean | Multimedia_prompts$multimediaArgs
    cards?: boolean | CardsArgs
    _count?: boolean | Multimedia_promptsCountOutputTypeArgs
  } 

  export type Multimedia_promptsGetPayload<S extends boolean | null | undefined | Multimedia_promptsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Multimedia_prompts :
    S extends undefined ? never :
    S extends { include: any } & (Multimedia_promptsArgs | Multimedia_promptsFindManyArgs)
    ? Multimedia_prompts  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'multimedia' ? Array < MultimediaGetPayload<S['include'][P]>>  :
        P extends 'cards' ? CardsGetPayload<S['include'][P]> :
        P extends '_count' ? Multimedia_promptsCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (Multimedia_promptsArgs | Multimedia_promptsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'multimedia' ? Array < MultimediaGetPayload<S['select'][P]>>  :
        P extends 'cards' ? CardsGetPayload<S['select'][P]> :
        P extends '_count' ? Multimedia_promptsCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Multimedia_prompts ? Multimedia_prompts[P] : never
  } 
      : Multimedia_prompts


  type Multimedia_promptsCountArgs = Merge<
    Omit<Multimedia_promptsFindManyArgs, 'select' | 'include'> & {
      select?: Multimedia_promptsCountAggregateInputType | true
    }
  >

  export interface Multimedia_promptsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Multimedia_prompts that matches the filter.
     * @param {Multimedia_promptsFindUniqueArgs} args - Arguments to find a Multimedia_prompts
     * @example
     * // Get one Multimedia_prompts
     * const multimedia_prompts = await prisma.multimedia_prompts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Multimedia_promptsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Multimedia_promptsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Multimedia_prompts'> extends True ? Prisma__Multimedia_promptsClient<Multimedia_promptsGetPayload<T>> : Prisma__Multimedia_promptsClient<Multimedia_promptsGetPayload<T> | null, null>

    /**
     * Find one Multimedia_prompts that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Multimedia_promptsFindUniqueOrThrowArgs} args - Arguments to find a Multimedia_prompts
     * @example
     * // Get one Multimedia_prompts
     * const multimedia_prompts = await prisma.multimedia_prompts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Multimedia_promptsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Multimedia_promptsFindUniqueOrThrowArgs>
    ): Prisma__Multimedia_promptsClient<Multimedia_promptsGetPayload<T>>

    /**
     * Find the first Multimedia_prompts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Multimedia_promptsFindFirstArgs} args - Arguments to find a Multimedia_prompts
     * @example
     * // Get one Multimedia_prompts
     * const multimedia_prompts = await prisma.multimedia_prompts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Multimedia_promptsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Multimedia_promptsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Multimedia_prompts'> extends True ? Prisma__Multimedia_promptsClient<Multimedia_promptsGetPayload<T>> : Prisma__Multimedia_promptsClient<Multimedia_promptsGetPayload<T> | null, null>

    /**
     * Find the first Multimedia_prompts that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Multimedia_promptsFindFirstOrThrowArgs} args - Arguments to find a Multimedia_prompts
     * @example
     * // Get one Multimedia_prompts
     * const multimedia_prompts = await prisma.multimedia_prompts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Multimedia_promptsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Multimedia_promptsFindFirstOrThrowArgs>
    ): Prisma__Multimedia_promptsClient<Multimedia_promptsGetPayload<T>>

    /**
     * Find zero or more Multimedia_prompts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Multimedia_promptsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Multimedia_prompts
     * const multimedia_prompts = await prisma.multimedia_prompts.findMany()
     * 
     * // Get first 10 Multimedia_prompts
     * const multimedia_prompts = await prisma.multimedia_prompts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const multimedia_promptsWithIdOnly = await prisma.multimedia_prompts.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Multimedia_promptsFindManyArgs>(
      args?: SelectSubset<T, Multimedia_promptsFindManyArgs>
    ): PrismaPromise<Array<Multimedia_promptsGetPayload<T>>>

    /**
     * Create a Multimedia_prompts.
     * @param {Multimedia_promptsCreateArgs} args - Arguments to create a Multimedia_prompts.
     * @example
     * // Create one Multimedia_prompts
     * const Multimedia_prompts = await prisma.multimedia_prompts.create({
     *   data: {
     *     // ... data to create a Multimedia_prompts
     *   }
     * })
     * 
    **/
    create<T extends Multimedia_promptsCreateArgs>(
      args: SelectSubset<T, Multimedia_promptsCreateArgs>
    ): Prisma__Multimedia_promptsClient<Multimedia_promptsGetPayload<T>>

    /**
     * Create many Multimedia_prompts.
     *     @param {Multimedia_promptsCreateManyArgs} args - Arguments to create many Multimedia_prompts.
     *     @example
     *     // Create many Multimedia_prompts
     *     const multimedia_prompts = await prisma.multimedia_prompts.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Multimedia_promptsCreateManyArgs>(
      args?: SelectSubset<T, Multimedia_promptsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Multimedia_prompts.
     * @param {Multimedia_promptsDeleteArgs} args - Arguments to delete one Multimedia_prompts.
     * @example
     * // Delete one Multimedia_prompts
     * const Multimedia_prompts = await prisma.multimedia_prompts.delete({
     *   where: {
     *     // ... filter to delete one Multimedia_prompts
     *   }
     * })
     * 
    **/
    delete<T extends Multimedia_promptsDeleteArgs>(
      args: SelectSubset<T, Multimedia_promptsDeleteArgs>
    ): Prisma__Multimedia_promptsClient<Multimedia_promptsGetPayload<T>>

    /**
     * Update one Multimedia_prompts.
     * @param {Multimedia_promptsUpdateArgs} args - Arguments to update one Multimedia_prompts.
     * @example
     * // Update one Multimedia_prompts
     * const multimedia_prompts = await prisma.multimedia_prompts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Multimedia_promptsUpdateArgs>(
      args: SelectSubset<T, Multimedia_promptsUpdateArgs>
    ): Prisma__Multimedia_promptsClient<Multimedia_promptsGetPayload<T>>

    /**
     * Delete zero or more Multimedia_prompts.
     * @param {Multimedia_promptsDeleteManyArgs} args - Arguments to filter Multimedia_prompts to delete.
     * @example
     * // Delete a few Multimedia_prompts
     * const { count } = await prisma.multimedia_prompts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Multimedia_promptsDeleteManyArgs>(
      args?: SelectSubset<T, Multimedia_promptsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Multimedia_prompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Multimedia_promptsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Multimedia_prompts
     * const multimedia_prompts = await prisma.multimedia_prompts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Multimedia_promptsUpdateManyArgs>(
      args: SelectSubset<T, Multimedia_promptsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Multimedia_prompts.
     * @param {Multimedia_promptsUpsertArgs} args - Arguments to update or create a Multimedia_prompts.
     * @example
     * // Update or create a Multimedia_prompts
     * const multimedia_prompts = await prisma.multimedia_prompts.upsert({
     *   create: {
     *     // ... data to create a Multimedia_prompts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Multimedia_prompts we want to update
     *   }
     * })
    **/
    upsert<T extends Multimedia_promptsUpsertArgs>(
      args: SelectSubset<T, Multimedia_promptsUpsertArgs>
    ): Prisma__Multimedia_promptsClient<Multimedia_promptsGetPayload<T>>

    /**
     * Count the number of Multimedia_prompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Multimedia_promptsCountArgs} args - Arguments to filter Multimedia_prompts to count.
     * @example
     * // Count the number of Multimedia_prompts
     * const count = await prisma.multimedia_prompts.count({
     *   where: {
     *     // ... the filter for the Multimedia_prompts we want to count
     *   }
     * })
    **/
    count<T extends Multimedia_promptsCountArgs>(
      args?: Subset<T, Multimedia_promptsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Multimedia_promptsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Multimedia_prompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Multimedia_promptsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Multimedia_promptsAggregateArgs>(args: Subset<T, Multimedia_promptsAggregateArgs>): PrismaPromise<GetMultimedia_promptsAggregateType<T>>

    /**
     * Group by Multimedia_prompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Multimedia_promptsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Multimedia_promptsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Multimedia_promptsGroupByArgs['orderBy'] }
        : { orderBy?: Multimedia_promptsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Multimedia_promptsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMultimedia_promptsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Multimedia_prompts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Multimedia_promptsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    multimedia<T extends Multimedia_prompts$multimediaArgs= {}>(args?: Subset<T, Multimedia_prompts$multimediaArgs>): PrismaPromise<Array<MultimediaGetPayload<T>>| Null>;

    cards<T extends CardsArgs= {}>(args?: Subset<T, CardsArgs>): Prisma__CardsClient<CardsGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Multimedia_prompts base type for findUnique actions
   */
  export type Multimedia_promptsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Multimedia_prompts
     * 
    **/
    select?: Multimedia_promptsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Multimedia_promptsInclude | null
    /**
     * Filter, which Multimedia_prompts to fetch.
     * 
    **/
    where: Multimedia_promptsWhereUniqueInput
  }

  /**
   * Multimedia_prompts findUnique
   */
  export interface Multimedia_promptsFindUniqueArgs extends Multimedia_promptsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Multimedia_prompts findUniqueOrThrow
   */
  export type Multimedia_promptsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Multimedia_prompts
     * 
    **/
    select?: Multimedia_promptsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Multimedia_promptsInclude | null
    /**
     * Filter, which Multimedia_prompts to fetch.
     * 
    **/
    where: Multimedia_promptsWhereUniqueInput
  }


  /**
   * Multimedia_prompts base type for findFirst actions
   */
  export type Multimedia_promptsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Multimedia_prompts
     * 
    **/
    select?: Multimedia_promptsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Multimedia_promptsInclude | null
    /**
     * Filter, which Multimedia_prompts to fetch.
     * 
    **/
    where?: Multimedia_promptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Multimedia_prompts to fetch.
     * 
    **/
    orderBy?: Enumerable<Multimedia_promptsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Multimedia_prompts.
     * 
    **/
    cursor?: Multimedia_promptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Multimedia_prompts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Multimedia_prompts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Multimedia_prompts.
     * 
    **/
    distinct?: Enumerable<Multimedia_promptsScalarFieldEnum>
  }

  /**
   * Multimedia_prompts findFirst
   */
  export interface Multimedia_promptsFindFirstArgs extends Multimedia_promptsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Multimedia_prompts findFirstOrThrow
   */
  export type Multimedia_promptsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Multimedia_prompts
     * 
    **/
    select?: Multimedia_promptsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Multimedia_promptsInclude | null
    /**
     * Filter, which Multimedia_prompts to fetch.
     * 
    **/
    where?: Multimedia_promptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Multimedia_prompts to fetch.
     * 
    **/
    orderBy?: Enumerable<Multimedia_promptsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Multimedia_prompts.
     * 
    **/
    cursor?: Multimedia_promptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Multimedia_prompts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Multimedia_prompts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Multimedia_prompts.
     * 
    **/
    distinct?: Enumerable<Multimedia_promptsScalarFieldEnum>
  }


  /**
   * Multimedia_prompts findMany
   */
  export type Multimedia_promptsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Multimedia_prompts
     * 
    **/
    select?: Multimedia_promptsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Multimedia_promptsInclude | null
    /**
     * Filter, which Multimedia_prompts to fetch.
     * 
    **/
    where?: Multimedia_promptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Multimedia_prompts to fetch.
     * 
    **/
    orderBy?: Enumerable<Multimedia_promptsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Multimedia_prompts.
     * 
    **/
    cursor?: Multimedia_promptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Multimedia_prompts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Multimedia_prompts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Multimedia_promptsScalarFieldEnum>
  }


  /**
   * Multimedia_prompts create
   */
  export type Multimedia_promptsCreateArgs = {
    /**
     * Select specific fields to fetch from the Multimedia_prompts
     * 
    **/
    select?: Multimedia_promptsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Multimedia_promptsInclude | null
    /**
     * The data needed to create a Multimedia_prompts.
     * 
    **/
    data: XOR<Multimedia_promptsCreateInput, Multimedia_promptsUncheckedCreateInput>
  }


  /**
   * Multimedia_prompts createMany
   */
  export type Multimedia_promptsCreateManyArgs = {
    /**
     * The data used to create many Multimedia_prompts.
     * 
    **/
    data: Enumerable<Multimedia_promptsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Multimedia_prompts update
   */
  export type Multimedia_promptsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Multimedia_prompts
     * 
    **/
    select?: Multimedia_promptsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Multimedia_promptsInclude | null
    /**
     * The data needed to update a Multimedia_prompts.
     * 
    **/
    data: XOR<Multimedia_promptsUpdateInput, Multimedia_promptsUncheckedUpdateInput>
    /**
     * Choose, which Multimedia_prompts to update.
     * 
    **/
    where: Multimedia_promptsWhereUniqueInput
  }


  /**
   * Multimedia_prompts updateMany
   */
  export type Multimedia_promptsUpdateManyArgs = {
    /**
     * The data used to update Multimedia_prompts.
     * 
    **/
    data: XOR<Multimedia_promptsUpdateManyMutationInput, Multimedia_promptsUncheckedUpdateManyInput>
    /**
     * Filter which Multimedia_prompts to update
     * 
    **/
    where?: Multimedia_promptsWhereInput
  }


  /**
   * Multimedia_prompts upsert
   */
  export type Multimedia_promptsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Multimedia_prompts
     * 
    **/
    select?: Multimedia_promptsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Multimedia_promptsInclude | null
    /**
     * The filter to search for the Multimedia_prompts to update in case it exists.
     * 
    **/
    where: Multimedia_promptsWhereUniqueInput
    /**
     * In case the Multimedia_prompts found by the `where` argument doesn't exist, create a new Multimedia_prompts with this data.
     * 
    **/
    create: XOR<Multimedia_promptsCreateInput, Multimedia_promptsUncheckedCreateInput>
    /**
     * In case the Multimedia_prompts was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<Multimedia_promptsUpdateInput, Multimedia_promptsUncheckedUpdateInput>
  }


  /**
   * Multimedia_prompts delete
   */
  export type Multimedia_promptsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Multimedia_prompts
     * 
    **/
    select?: Multimedia_promptsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Multimedia_promptsInclude | null
    /**
     * Filter which Multimedia_prompts to delete.
     * 
    **/
    where: Multimedia_promptsWhereUniqueInput
  }


  /**
   * Multimedia_prompts deleteMany
   */
  export type Multimedia_promptsDeleteManyArgs = {
    /**
     * Filter which Multimedia_prompts to delete
     * 
    **/
    where?: Multimedia_promptsWhereInput
  }


  /**
   * Multimedia_prompts.multimedia
   */
  export type Multimedia_prompts$multimediaArgs = {
    /**
     * Select specific fields to fetch from the Multimedia
     * 
    **/
    select?: MultimediaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MultimediaInclude | null
    where?: MultimediaWhereInput
    orderBy?: Enumerable<MultimediaOrderByWithRelationInput>
    cursor?: MultimediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<MultimediaScalarFieldEnum>
  }


  /**
   * Multimedia_prompts without action
   */
  export type Multimedia_promptsArgs = {
    /**
     * Select specific fields to fetch from the Multimedia_prompts
     * 
    **/
    select?: Multimedia_promptsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Multimedia_promptsInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const Card_promptsScalarFieldEnum: {
    id: 'id',
    text: 'text',
    state: 'state',
    deck_id: 'deck_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Card_promptsScalarFieldEnum = (typeof Card_promptsScalarFieldEnum)[keyof typeof Card_promptsScalarFieldEnum]


  export const CardsScalarFieldEnum: {
    id: 'id',
    card_prompt_id: 'card_prompt_id',
    front_text: 'front_text',
    back_text: 'back_text',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CardsScalarFieldEnum = (typeof CardsScalarFieldEnum)[keyof typeof CardsScalarFieldEnum]


  export const DecksScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type DecksScalarFieldEnum = (typeof DecksScalarFieldEnum)[keyof typeof DecksScalarFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const MultimediaScalarFieldEnum: {
    id: 'id',
    multimedia_prompt_id: 'multimedia_prompt_id',
    media_type: 'media_type',
    url: 'url',
    metadata: 'metadata',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type MultimediaScalarFieldEnum = (typeof MultimediaScalarFieldEnum)[keyof typeof MultimediaScalarFieldEnum]


  export const Multimedia_promptsScalarFieldEnum: {
    id: 'id',
    text: 'text',
    state: 'state',
    card_id: 'card_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Multimedia_promptsScalarFieldEnum = (typeof Multimedia_promptsScalarFieldEnum)[keyof typeof Multimedia_promptsScalarFieldEnum]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type Card_promptsWhereInput = {
    AND?: Enumerable<Card_promptsWhereInput>
    OR?: Enumerable<Card_promptsWhereInput>
    NOT?: Enumerable<Card_promptsWhereInput>
    id?: UuidFilter | string
    text?: StringFilter | string
    state?: Enumprompt_stateFilter | prompt_state
    deck_id?: UuidFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    decks?: XOR<DecksRelationFilter, DecksWhereInput>
    cards?: CardsListRelationFilter
  }

  export type Card_promptsOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    state?: SortOrder
    deck_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    decks?: DecksOrderByWithRelationInput
    cards?: CardsOrderByRelationAggregateInput
  }

  export type Card_promptsWhereUniqueInput = {
    id?: string
  }

  export type Card_promptsOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    state?: SortOrder
    deck_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: Card_promptsCountOrderByAggregateInput
    _max?: Card_promptsMaxOrderByAggregateInput
    _min?: Card_promptsMinOrderByAggregateInput
  }

  export type Card_promptsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Card_promptsScalarWhereWithAggregatesInput>
    OR?: Enumerable<Card_promptsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Card_promptsScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    text?: StringWithAggregatesFilter | string
    state?: Enumprompt_stateWithAggregatesFilter | prompt_state
    deck_id?: UuidWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CardsWhereInput = {
    AND?: Enumerable<CardsWhereInput>
    OR?: Enumerable<CardsWhereInput>
    NOT?: Enumerable<CardsWhereInput>
    id?: UuidFilter | string
    card_prompt_id?: UuidFilter | string
    front_text?: StringFilter | string
    back_text?: StringNullableFilter | string | null
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    card_prompts?: XOR<Card_promptsRelationFilter, Card_promptsWhereInput>
    multimedia_prompts?: Multimedia_promptsListRelationFilter
  }

  export type CardsOrderByWithRelationInput = {
    id?: SortOrder
    card_prompt_id?: SortOrder
    front_text?: SortOrder
    back_text?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    card_prompts?: Card_promptsOrderByWithRelationInput
    multimedia_prompts?: Multimedia_promptsOrderByRelationAggregateInput
  }

  export type CardsWhereUniqueInput = {
    id?: string
  }

  export type CardsOrderByWithAggregationInput = {
    id?: SortOrder
    card_prompt_id?: SortOrder
    front_text?: SortOrder
    back_text?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CardsCountOrderByAggregateInput
    _max?: CardsMaxOrderByAggregateInput
    _min?: CardsMinOrderByAggregateInput
  }

  export type CardsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CardsScalarWhereWithAggregatesInput>
    OR?: Enumerable<CardsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CardsScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    card_prompt_id?: UuidWithAggregatesFilter | string
    front_text?: StringWithAggregatesFilter | string
    back_text?: StringNullableWithAggregatesFilter | string | null
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type DecksWhereInput = {
    AND?: Enumerable<DecksWhereInput>
    OR?: Enumerable<DecksWhereInput>
    NOT?: Enumerable<DecksWhereInput>
    id?: UuidFilter | string
    name?: StringFilter | string
    description?: StringNullableFilter | string | null
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    card_prompts?: Card_promptsListRelationFilter
  }

  export type DecksOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    card_prompts?: Card_promptsOrderByRelationAggregateInput
  }

  export type DecksWhereUniqueInput = {
    id?: string
  }

  export type DecksOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: DecksCountOrderByAggregateInput
    _max?: DecksMaxOrderByAggregateInput
    _min?: DecksMinOrderByAggregateInput
  }

  export type DecksScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DecksScalarWhereWithAggregatesInput>
    OR?: Enumerable<DecksScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DecksScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    description?: StringNullableWithAggregatesFilter | string | null
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type MultimediaWhereInput = {
    AND?: Enumerable<MultimediaWhereInput>
    OR?: Enumerable<MultimediaWhereInput>
    NOT?: Enumerable<MultimediaWhereInput>
    id?: UuidFilter | string
    multimedia_prompt_id?: UuidFilter | string
    media_type?: StringFilter | string
    url?: StringNullableFilter | string | null
    metadata?: JsonNullableFilter
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    multimedia_prompts?: XOR<Multimedia_promptsRelationFilter, Multimedia_promptsWhereInput>
  }

  export type MultimediaOrderByWithRelationInput = {
    id?: SortOrder
    multimedia_prompt_id?: SortOrder
    media_type?: SortOrder
    url?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    multimedia_prompts?: Multimedia_promptsOrderByWithRelationInput
  }

  export type MultimediaWhereUniqueInput = {
    id?: string
  }

  export type MultimediaOrderByWithAggregationInput = {
    id?: SortOrder
    multimedia_prompt_id?: SortOrder
    media_type?: SortOrder
    url?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: MultimediaCountOrderByAggregateInput
    _max?: MultimediaMaxOrderByAggregateInput
    _min?: MultimediaMinOrderByAggregateInput
  }

  export type MultimediaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MultimediaScalarWhereWithAggregatesInput>
    OR?: Enumerable<MultimediaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MultimediaScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    multimedia_prompt_id?: UuidWithAggregatesFilter | string
    media_type?: StringWithAggregatesFilter | string
    url?: StringNullableWithAggregatesFilter | string | null
    metadata?: JsonNullableWithAggregatesFilter
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type Multimedia_promptsWhereInput = {
    AND?: Enumerable<Multimedia_promptsWhereInput>
    OR?: Enumerable<Multimedia_promptsWhereInput>
    NOT?: Enumerable<Multimedia_promptsWhereInput>
    id?: UuidFilter | string
    text?: StringFilter | string
    state?: Enumprompt_stateFilter | prompt_state
    card_id?: UuidFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    multimedia?: MultimediaListRelationFilter
    cards?: XOR<CardsRelationFilter, CardsWhereInput>
  }

  export type Multimedia_promptsOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    state?: SortOrder
    card_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    multimedia?: MultimediaOrderByRelationAggregateInput
    cards?: CardsOrderByWithRelationInput
  }

  export type Multimedia_promptsWhereUniqueInput = {
    id?: string
  }

  export type Multimedia_promptsOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    state?: SortOrder
    card_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: Multimedia_promptsCountOrderByAggregateInput
    _max?: Multimedia_promptsMaxOrderByAggregateInput
    _min?: Multimedia_promptsMinOrderByAggregateInput
  }

  export type Multimedia_promptsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Multimedia_promptsScalarWhereWithAggregatesInput>
    OR?: Enumerable<Multimedia_promptsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Multimedia_promptsScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    text?: StringWithAggregatesFilter | string
    state?: Enumprompt_stateWithAggregatesFilter | prompt_state
    card_id?: UuidWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type Card_promptsCreateInput = {
    id: string
    text: string
    state: prompt_state
    created_at: Date | string
    updated_at: Date | string
    decks: DecksCreateNestedOneWithoutCard_promptsInput
    cards?: CardsCreateNestedManyWithoutCard_promptsInput
  }

  export type Card_promptsUncheckedCreateInput = {
    id: string
    text: string
    state: prompt_state
    deck_id: string
    created_at: Date | string
    updated_at: Date | string
    cards?: CardsUncheckedCreateNestedManyWithoutCard_promptsInput
  }

  export type Card_promptsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    state?: Enumprompt_stateFieldUpdateOperationsInput | prompt_state
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    decks?: DecksUpdateOneRequiredWithoutCard_promptsNestedInput
    cards?: CardsUpdateManyWithoutCard_promptsNestedInput
  }

  export type Card_promptsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    state?: Enumprompt_stateFieldUpdateOperationsInput | prompt_state
    deck_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cards?: CardsUncheckedUpdateManyWithoutCard_promptsNestedInput
  }

  export type Card_promptsCreateManyInput = {
    id: string
    text: string
    state: prompt_state
    deck_id: string
    created_at: Date | string
    updated_at: Date | string
  }

  export type Card_promptsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    state?: Enumprompt_stateFieldUpdateOperationsInput | prompt_state
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Card_promptsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    state?: Enumprompt_stateFieldUpdateOperationsInput | prompt_state
    deck_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardsCreateInput = {
    id: string
    front_text: string
    back_text?: string | null
    created_at: Date | string
    updated_at: Date | string
    card_prompts: Card_promptsCreateNestedOneWithoutCardsInput
    multimedia_prompts?: Multimedia_promptsCreateNestedManyWithoutCardsInput
  }

  export type CardsUncheckedCreateInput = {
    id: string
    card_prompt_id: string
    front_text: string
    back_text?: string | null
    created_at: Date | string
    updated_at: Date | string
    multimedia_prompts?: Multimedia_promptsUncheckedCreateNestedManyWithoutCardsInput
  }

  export type CardsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    front_text?: StringFieldUpdateOperationsInput | string
    back_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    card_prompts?: Card_promptsUpdateOneRequiredWithoutCardsNestedInput
    multimedia_prompts?: Multimedia_promptsUpdateManyWithoutCardsNestedInput
  }

  export type CardsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    card_prompt_id?: StringFieldUpdateOperationsInput | string
    front_text?: StringFieldUpdateOperationsInput | string
    back_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    multimedia_prompts?: Multimedia_promptsUncheckedUpdateManyWithoutCardsNestedInput
  }

  export type CardsCreateManyInput = {
    id: string
    card_prompt_id: string
    front_text: string
    back_text?: string | null
    created_at: Date | string
    updated_at: Date | string
  }

  export type CardsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    front_text?: StringFieldUpdateOperationsInput | string
    back_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    card_prompt_id?: StringFieldUpdateOperationsInput | string
    front_text?: StringFieldUpdateOperationsInput | string
    back_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DecksCreateInput = {
    id: string
    name: string
    description?: string | null
    created_at: Date | string
    updated_at: Date | string
    card_prompts?: Card_promptsCreateNestedManyWithoutDecksInput
  }

  export type DecksUncheckedCreateInput = {
    id: string
    name: string
    description?: string | null
    created_at: Date | string
    updated_at: Date | string
    card_prompts?: Card_promptsUncheckedCreateNestedManyWithoutDecksInput
  }

  export type DecksUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    card_prompts?: Card_promptsUpdateManyWithoutDecksNestedInput
  }

  export type DecksUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    card_prompts?: Card_promptsUncheckedUpdateManyWithoutDecksNestedInput
  }

  export type DecksCreateManyInput = {
    id: string
    name: string
    description?: string | null
    created_at: Date | string
    updated_at: Date | string
  }

  export type DecksUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DecksUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MultimediaCreateInput = {
    id: string
    media_type: string
    url?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at: Date | string
    updated_at: Date | string
    multimedia_prompts: Multimedia_promptsCreateNestedOneWithoutMultimediaInput
  }

  export type MultimediaUncheckedCreateInput = {
    id: string
    multimedia_prompt_id: string
    media_type: string
    url?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at: Date | string
    updated_at: Date | string
  }

  export type MultimediaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    media_type?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    multimedia_prompts?: Multimedia_promptsUpdateOneRequiredWithoutMultimediaNestedInput
  }

  export type MultimediaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    multimedia_prompt_id?: StringFieldUpdateOperationsInput | string
    media_type?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MultimediaCreateManyInput = {
    id: string
    multimedia_prompt_id: string
    media_type: string
    url?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at: Date | string
    updated_at: Date | string
  }

  export type MultimediaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    media_type?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MultimediaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    multimedia_prompt_id?: StringFieldUpdateOperationsInput | string
    media_type?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Multimedia_promptsCreateInput = {
    id: string
    text: string
    state: prompt_state
    created_at: Date | string
    updated_at: Date | string
    multimedia?: MultimediaCreateNestedManyWithoutMultimedia_promptsInput
    cards: CardsCreateNestedOneWithoutMultimedia_promptsInput
  }

  export type Multimedia_promptsUncheckedCreateInput = {
    id: string
    text: string
    state: prompt_state
    card_id: string
    created_at: Date | string
    updated_at: Date | string
    multimedia?: MultimediaUncheckedCreateNestedManyWithoutMultimedia_promptsInput
  }

  export type Multimedia_promptsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    state?: Enumprompt_stateFieldUpdateOperationsInput | prompt_state
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    multimedia?: MultimediaUpdateManyWithoutMultimedia_promptsNestedInput
    cards?: CardsUpdateOneRequiredWithoutMultimedia_promptsNestedInput
  }

  export type Multimedia_promptsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    state?: Enumprompt_stateFieldUpdateOperationsInput | prompt_state
    card_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    multimedia?: MultimediaUncheckedUpdateManyWithoutMultimedia_promptsNestedInput
  }

  export type Multimedia_promptsCreateManyInput = {
    id: string
    text: string
    state: prompt_state
    card_id: string
    created_at: Date | string
    updated_at: Date | string
  }

  export type Multimedia_promptsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    state?: Enumprompt_stateFieldUpdateOperationsInput | prompt_state
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Multimedia_promptsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    state?: Enumprompt_stateFieldUpdateOperationsInput | prompt_state
    card_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidFilter | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type Enumprompt_stateFilter = {
    equals?: prompt_state
    in?: Enumerable<prompt_state>
    notIn?: Enumerable<prompt_state>
    not?: NestedEnumprompt_stateFilter | prompt_state
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type DecksRelationFilter = {
    is?: DecksWhereInput
    isNot?: DecksWhereInput
  }

  export type CardsListRelationFilter = {
    every?: CardsWhereInput
    some?: CardsWhereInput
    none?: CardsWhereInput
  }

  export type CardsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Card_promptsCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    state?: SortOrder
    deck_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Card_promptsMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    state?: SortOrder
    deck_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Card_promptsMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    state?: SortOrder
    deck_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UuidWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type Enumprompt_stateWithAggregatesFilter = {
    equals?: prompt_state
    in?: Enumerable<prompt_state>
    notIn?: Enumerable<prompt_state>
    not?: NestedEnumprompt_stateWithAggregatesFilter | prompt_state
    _count?: NestedIntFilter
    _min?: NestedEnumprompt_stateFilter
    _max?: NestedEnumprompt_stateFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type Card_promptsRelationFilter = {
    is?: Card_promptsWhereInput
    isNot?: Card_promptsWhereInput
  }

  export type Multimedia_promptsListRelationFilter = {
    every?: Multimedia_promptsWhereInput
    some?: Multimedia_promptsWhereInput
    none?: Multimedia_promptsWhereInput
  }

  export type Multimedia_promptsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CardsCountOrderByAggregateInput = {
    id?: SortOrder
    card_prompt_id?: SortOrder
    front_text?: SortOrder
    back_text?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CardsMaxOrderByAggregateInput = {
    id?: SortOrder
    card_prompt_id?: SortOrder
    front_text?: SortOrder
    back_text?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CardsMinOrderByAggregateInput = {
    id?: SortOrder
    card_prompt_id?: SortOrder
    front_text?: SortOrder
    back_text?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type Card_promptsListRelationFilter = {
    every?: Card_promptsWhereInput
    some?: Card_promptsWhereInput
    none?: Card_promptsWhereInput
  }

  export type Card_promptsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DecksCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DecksMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DecksMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }
  export type JsonNullableFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase>, Exclude<keyof Required<JsonNullableFilterBase>, 'path'>>,
        Required<JsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase>, 'path'>>

  export type JsonNullableFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: Array<string>
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type Multimedia_promptsRelationFilter = {
    is?: Multimedia_promptsWhereInput
    isNot?: Multimedia_promptsWhereInput
  }

  export type MultimediaCountOrderByAggregateInput = {
    id?: SortOrder
    multimedia_prompt_id?: SortOrder
    media_type?: SortOrder
    url?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MultimediaMaxOrderByAggregateInput = {
    id?: SortOrder
    multimedia_prompt_id?: SortOrder
    media_type?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MultimediaMinOrderByAggregateInput = {
    id?: SortOrder
    multimedia_prompt_id?: SortOrder
    media_type?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: Array<string>
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
    _count?: NestedIntNullableFilter
    _min?: NestedJsonNullableFilter
    _max?: NestedJsonNullableFilter
  }

  export type MultimediaListRelationFilter = {
    every?: MultimediaWhereInput
    some?: MultimediaWhereInput
    none?: MultimediaWhereInput
  }

  export type CardsRelationFilter = {
    is?: CardsWhereInput
    isNot?: CardsWhereInput
  }

  export type MultimediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Multimedia_promptsCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    state?: SortOrder
    card_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Multimedia_promptsMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    state?: SortOrder
    card_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Multimedia_promptsMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    state?: SortOrder
    card_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DecksCreateNestedOneWithoutCard_promptsInput = {
    create?: XOR<DecksCreateWithoutCard_promptsInput, DecksUncheckedCreateWithoutCard_promptsInput>
    connectOrCreate?: DecksCreateOrConnectWithoutCard_promptsInput
    connect?: DecksWhereUniqueInput
  }

  export type CardsCreateNestedManyWithoutCard_promptsInput = {
    create?: XOR<Enumerable<CardsCreateWithoutCard_promptsInput>, Enumerable<CardsUncheckedCreateWithoutCard_promptsInput>>
    connectOrCreate?: Enumerable<CardsCreateOrConnectWithoutCard_promptsInput>
    createMany?: CardsCreateManyCard_promptsInputEnvelope
    connect?: Enumerable<CardsWhereUniqueInput>
  }

  export type CardsUncheckedCreateNestedManyWithoutCard_promptsInput = {
    create?: XOR<Enumerable<CardsCreateWithoutCard_promptsInput>, Enumerable<CardsUncheckedCreateWithoutCard_promptsInput>>
    connectOrCreate?: Enumerable<CardsCreateOrConnectWithoutCard_promptsInput>
    createMany?: CardsCreateManyCard_promptsInputEnvelope
    connect?: Enumerable<CardsWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type Enumprompt_stateFieldUpdateOperationsInput = {
    set?: prompt_state
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DecksUpdateOneRequiredWithoutCard_promptsNestedInput = {
    create?: XOR<DecksCreateWithoutCard_promptsInput, DecksUncheckedCreateWithoutCard_promptsInput>
    connectOrCreate?: DecksCreateOrConnectWithoutCard_promptsInput
    upsert?: DecksUpsertWithoutCard_promptsInput
    connect?: DecksWhereUniqueInput
    update?: XOR<DecksUpdateWithoutCard_promptsInput, DecksUncheckedUpdateWithoutCard_promptsInput>
  }

  export type CardsUpdateManyWithoutCard_promptsNestedInput = {
    create?: XOR<Enumerable<CardsCreateWithoutCard_promptsInput>, Enumerable<CardsUncheckedCreateWithoutCard_promptsInput>>
    connectOrCreate?: Enumerable<CardsCreateOrConnectWithoutCard_promptsInput>
    upsert?: Enumerable<CardsUpsertWithWhereUniqueWithoutCard_promptsInput>
    createMany?: CardsCreateManyCard_promptsInputEnvelope
    set?: Enumerable<CardsWhereUniqueInput>
    disconnect?: Enumerable<CardsWhereUniqueInput>
    delete?: Enumerable<CardsWhereUniqueInput>
    connect?: Enumerable<CardsWhereUniqueInput>
    update?: Enumerable<CardsUpdateWithWhereUniqueWithoutCard_promptsInput>
    updateMany?: Enumerable<CardsUpdateManyWithWhereWithoutCard_promptsInput>
    deleteMany?: Enumerable<CardsScalarWhereInput>
  }

  export type CardsUncheckedUpdateManyWithoutCard_promptsNestedInput = {
    create?: XOR<Enumerable<CardsCreateWithoutCard_promptsInput>, Enumerable<CardsUncheckedCreateWithoutCard_promptsInput>>
    connectOrCreate?: Enumerable<CardsCreateOrConnectWithoutCard_promptsInput>
    upsert?: Enumerable<CardsUpsertWithWhereUniqueWithoutCard_promptsInput>
    createMany?: CardsCreateManyCard_promptsInputEnvelope
    set?: Enumerable<CardsWhereUniqueInput>
    disconnect?: Enumerable<CardsWhereUniqueInput>
    delete?: Enumerable<CardsWhereUniqueInput>
    connect?: Enumerable<CardsWhereUniqueInput>
    update?: Enumerable<CardsUpdateWithWhereUniqueWithoutCard_promptsInput>
    updateMany?: Enumerable<CardsUpdateManyWithWhereWithoutCard_promptsInput>
    deleteMany?: Enumerable<CardsScalarWhereInput>
  }

  export type Card_promptsCreateNestedOneWithoutCardsInput = {
    create?: XOR<Card_promptsCreateWithoutCardsInput, Card_promptsUncheckedCreateWithoutCardsInput>
    connectOrCreate?: Card_promptsCreateOrConnectWithoutCardsInput
    connect?: Card_promptsWhereUniqueInput
  }

  export type Multimedia_promptsCreateNestedManyWithoutCardsInput = {
    create?: XOR<Enumerable<Multimedia_promptsCreateWithoutCardsInput>, Enumerable<Multimedia_promptsUncheckedCreateWithoutCardsInput>>
    connectOrCreate?: Enumerable<Multimedia_promptsCreateOrConnectWithoutCardsInput>
    createMany?: Multimedia_promptsCreateManyCardsInputEnvelope
    connect?: Enumerable<Multimedia_promptsWhereUniqueInput>
  }

  export type Multimedia_promptsUncheckedCreateNestedManyWithoutCardsInput = {
    create?: XOR<Enumerable<Multimedia_promptsCreateWithoutCardsInput>, Enumerable<Multimedia_promptsUncheckedCreateWithoutCardsInput>>
    connectOrCreate?: Enumerable<Multimedia_promptsCreateOrConnectWithoutCardsInput>
    createMany?: Multimedia_promptsCreateManyCardsInputEnvelope
    connect?: Enumerable<Multimedia_promptsWhereUniqueInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type Card_promptsUpdateOneRequiredWithoutCardsNestedInput = {
    create?: XOR<Card_promptsCreateWithoutCardsInput, Card_promptsUncheckedCreateWithoutCardsInput>
    connectOrCreate?: Card_promptsCreateOrConnectWithoutCardsInput
    upsert?: Card_promptsUpsertWithoutCardsInput
    connect?: Card_promptsWhereUniqueInput
    update?: XOR<Card_promptsUpdateWithoutCardsInput, Card_promptsUncheckedUpdateWithoutCardsInput>
  }

  export type Multimedia_promptsUpdateManyWithoutCardsNestedInput = {
    create?: XOR<Enumerable<Multimedia_promptsCreateWithoutCardsInput>, Enumerable<Multimedia_promptsUncheckedCreateWithoutCardsInput>>
    connectOrCreate?: Enumerable<Multimedia_promptsCreateOrConnectWithoutCardsInput>
    upsert?: Enumerable<Multimedia_promptsUpsertWithWhereUniqueWithoutCardsInput>
    createMany?: Multimedia_promptsCreateManyCardsInputEnvelope
    set?: Enumerable<Multimedia_promptsWhereUniqueInput>
    disconnect?: Enumerable<Multimedia_promptsWhereUniqueInput>
    delete?: Enumerable<Multimedia_promptsWhereUniqueInput>
    connect?: Enumerable<Multimedia_promptsWhereUniqueInput>
    update?: Enumerable<Multimedia_promptsUpdateWithWhereUniqueWithoutCardsInput>
    updateMany?: Enumerable<Multimedia_promptsUpdateManyWithWhereWithoutCardsInput>
    deleteMany?: Enumerable<Multimedia_promptsScalarWhereInput>
  }

  export type Multimedia_promptsUncheckedUpdateManyWithoutCardsNestedInput = {
    create?: XOR<Enumerable<Multimedia_promptsCreateWithoutCardsInput>, Enumerable<Multimedia_promptsUncheckedCreateWithoutCardsInput>>
    connectOrCreate?: Enumerable<Multimedia_promptsCreateOrConnectWithoutCardsInput>
    upsert?: Enumerable<Multimedia_promptsUpsertWithWhereUniqueWithoutCardsInput>
    createMany?: Multimedia_promptsCreateManyCardsInputEnvelope
    set?: Enumerable<Multimedia_promptsWhereUniqueInput>
    disconnect?: Enumerable<Multimedia_promptsWhereUniqueInput>
    delete?: Enumerable<Multimedia_promptsWhereUniqueInput>
    connect?: Enumerable<Multimedia_promptsWhereUniqueInput>
    update?: Enumerable<Multimedia_promptsUpdateWithWhereUniqueWithoutCardsInput>
    updateMany?: Enumerable<Multimedia_promptsUpdateManyWithWhereWithoutCardsInput>
    deleteMany?: Enumerable<Multimedia_promptsScalarWhereInput>
  }

  export type Card_promptsCreateNestedManyWithoutDecksInput = {
    create?: XOR<Enumerable<Card_promptsCreateWithoutDecksInput>, Enumerable<Card_promptsUncheckedCreateWithoutDecksInput>>
    connectOrCreate?: Enumerable<Card_promptsCreateOrConnectWithoutDecksInput>
    createMany?: Card_promptsCreateManyDecksInputEnvelope
    connect?: Enumerable<Card_promptsWhereUniqueInput>
  }

  export type Card_promptsUncheckedCreateNestedManyWithoutDecksInput = {
    create?: XOR<Enumerable<Card_promptsCreateWithoutDecksInput>, Enumerable<Card_promptsUncheckedCreateWithoutDecksInput>>
    connectOrCreate?: Enumerable<Card_promptsCreateOrConnectWithoutDecksInput>
    createMany?: Card_promptsCreateManyDecksInputEnvelope
    connect?: Enumerable<Card_promptsWhereUniqueInput>
  }

  export type Card_promptsUpdateManyWithoutDecksNestedInput = {
    create?: XOR<Enumerable<Card_promptsCreateWithoutDecksInput>, Enumerable<Card_promptsUncheckedCreateWithoutDecksInput>>
    connectOrCreate?: Enumerable<Card_promptsCreateOrConnectWithoutDecksInput>
    upsert?: Enumerable<Card_promptsUpsertWithWhereUniqueWithoutDecksInput>
    createMany?: Card_promptsCreateManyDecksInputEnvelope
    set?: Enumerable<Card_promptsWhereUniqueInput>
    disconnect?: Enumerable<Card_promptsWhereUniqueInput>
    delete?: Enumerable<Card_promptsWhereUniqueInput>
    connect?: Enumerable<Card_promptsWhereUniqueInput>
    update?: Enumerable<Card_promptsUpdateWithWhereUniqueWithoutDecksInput>
    updateMany?: Enumerable<Card_promptsUpdateManyWithWhereWithoutDecksInput>
    deleteMany?: Enumerable<Card_promptsScalarWhereInput>
  }

  export type Card_promptsUncheckedUpdateManyWithoutDecksNestedInput = {
    create?: XOR<Enumerable<Card_promptsCreateWithoutDecksInput>, Enumerable<Card_promptsUncheckedCreateWithoutDecksInput>>
    connectOrCreate?: Enumerable<Card_promptsCreateOrConnectWithoutDecksInput>
    upsert?: Enumerable<Card_promptsUpsertWithWhereUniqueWithoutDecksInput>
    createMany?: Card_promptsCreateManyDecksInputEnvelope
    set?: Enumerable<Card_promptsWhereUniqueInput>
    disconnect?: Enumerable<Card_promptsWhereUniqueInput>
    delete?: Enumerable<Card_promptsWhereUniqueInput>
    connect?: Enumerable<Card_promptsWhereUniqueInput>
    update?: Enumerable<Card_promptsUpdateWithWhereUniqueWithoutDecksInput>
    updateMany?: Enumerable<Card_promptsUpdateManyWithWhereWithoutDecksInput>
    deleteMany?: Enumerable<Card_promptsScalarWhereInput>
  }

  export type Multimedia_promptsCreateNestedOneWithoutMultimediaInput = {
    create?: XOR<Multimedia_promptsCreateWithoutMultimediaInput, Multimedia_promptsUncheckedCreateWithoutMultimediaInput>
    connectOrCreate?: Multimedia_promptsCreateOrConnectWithoutMultimediaInput
    connect?: Multimedia_promptsWhereUniqueInput
  }

  export type Multimedia_promptsUpdateOneRequiredWithoutMultimediaNestedInput = {
    create?: XOR<Multimedia_promptsCreateWithoutMultimediaInput, Multimedia_promptsUncheckedCreateWithoutMultimediaInput>
    connectOrCreate?: Multimedia_promptsCreateOrConnectWithoutMultimediaInput
    upsert?: Multimedia_promptsUpsertWithoutMultimediaInput
    connect?: Multimedia_promptsWhereUniqueInput
    update?: XOR<Multimedia_promptsUpdateWithoutMultimediaInput, Multimedia_promptsUncheckedUpdateWithoutMultimediaInput>
  }

  export type MultimediaCreateNestedManyWithoutMultimedia_promptsInput = {
    create?: XOR<Enumerable<MultimediaCreateWithoutMultimedia_promptsInput>, Enumerable<MultimediaUncheckedCreateWithoutMultimedia_promptsInput>>
    connectOrCreate?: Enumerable<MultimediaCreateOrConnectWithoutMultimedia_promptsInput>
    createMany?: MultimediaCreateManyMultimedia_promptsInputEnvelope
    connect?: Enumerable<MultimediaWhereUniqueInput>
  }

  export type CardsCreateNestedOneWithoutMultimedia_promptsInput = {
    create?: XOR<CardsCreateWithoutMultimedia_promptsInput, CardsUncheckedCreateWithoutMultimedia_promptsInput>
    connectOrCreate?: CardsCreateOrConnectWithoutMultimedia_promptsInput
    connect?: CardsWhereUniqueInput
  }

  export type MultimediaUncheckedCreateNestedManyWithoutMultimedia_promptsInput = {
    create?: XOR<Enumerable<MultimediaCreateWithoutMultimedia_promptsInput>, Enumerable<MultimediaUncheckedCreateWithoutMultimedia_promptsInput>>
    connectOrCreate?: Enumerable<MultimediaCreateOrConnectWithoutMultimedia_promptsInput>
    createMany?: MultimediaCreateManyMultimedia_promptsInputEnvelope
    connect?: Enumerable<MultimediaWhereUniqueInput>
  }

  export type MultimediaUpdateManyWithoutMultimedia_promptsNestedInput = {
    create?: XOR<Enumerable<MultimediaCreateWithoutMultimedia_promptsInput>, Enumerable<MultimediaUncheckedCreateWithoutMultimedia_promptsInput>>
    connectOrCreate?: Enumerable<MultimediaCreateOrConnectWithoutMultimedia_promptsInput>
    upsert?: Enumerable<MultimediaUpsertWithWhereUniqueWithoutMultimedia_promptsInput>
    createMany?: MultimediaCreateManyMultimedia_promptsInputEnvelope
    set?: Enumerable<MultimediaWhereUniqueInput>
    disconnect?: Enumerable<MultimediaWhereUniqueInput>
    delete?: Enumerable<MultimediaWhereUniqueInput>
    connect?: Enumerable<MultimediaWhereUniqueInput>
    update?: Enumerable<MultimediaUpdateWithWhereUniqueWithoutMultimedia_promptsInput>
    updateMany?: Enumerable<MultimediaUpdateManyWithWhereWithoutMultimedia_promptsInput>
    deleteMany?: Enumerable<MultimediaScalarWhereInput>
  }

  export type CardsUpdateOneRequiredWithoutMultimedia_promptsNestedInput = {
    create?: XOR<CardsCreateWithoutMultimedia_promptsInput, CardsUncheckedCreateWithoutMultimedia_promptsInput>
    connectOrCreate?: CardsCreateOrConnectWithoutMultimedia_promptsInput
    upsert?: CardsUpsertWithoutMultimedia_promptsInput
    connect?: CardsWhereUniqueInput
    update?: XOR<CardsUpdateWithoutMultimedia_promptsInput, CardsUncheckedUpdateWithoutMultimedia_promptsInput>
  }

  export type MultimediaUncheckedUpdateManyWithoutMultimedia_promptsNestedInput = {
    create?: XOR<Enumerable<MultimediaCreateWithoutMultimedia_promptsInput>, Enumerable<MultimediaUncheckedCreateWithoutMultimedia_promptsInput>>
    connectOrCreate?: Enumerable<MultimediaCreateOrConnectWithoutMultimedia_promptsInput>
    upsert?: Enumerable<MultimediaUpsertWithWhereUniqueWithoutMultimedia_promptsInput>
    createMany?: MultimediaCreateManyMultimedia_promptsInputEnvelope
    set?: Enumerable<MultimediaWhereUniqueInput>
    disconnect?: Enumerable<MultimediaWhereUniqueInput>
    delete?: Enumerable<MultimediaWhereUniqueInput>
    connect?: Enumerable<MultimediaWhereUniqueInput>
    update?: Enumerable<MultimediaUpdateWithWhereUniqueWithoutMultimedia_promptsInput>
    updateMany?: Enumerable<MultimediaUpdateManyWithWhereWithoutMultimedia_promptsInput>
    deleteMany?: Enumerable<MultimediaScalarWhereInput>
  }

  export type NestedUuidFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidFilter | string
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedEnumprompt_stateFilter = {
    equals?: prompt_state
    in?: Enumerable<prompt_state>
    notIn?: Enumerable<prompt_state>
    not?: NestedEnumprompt_stateFilter | prompt_state
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedUuidWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedEnumprompt_stateWithAggregatesFilter = {
    equals?: prompt_state
    in?: Enumerable<prompt_state>
    notIn?: Enumerable<prompt_state>
    not?: NestedEnumprompt_stateWithAggregatesFilter | prompt_state
    _count?: NestedIntFilter
    _min?: NestedEnumprompt_stateFilter
    _max?: NestedEnumprompt_stateFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }
  export type NestedJsonNullableFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase>, Exclude<keyof Required<NestedJsonNullableFilterBase>, 'path'>>,
        Required<NestedJsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase>, 'path'>>

  export type NestedJsonNullableFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: Array<string>
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type DecksCreateWithoutCard_promptsInput = {
    id: string
    name: string
    description?: string | null
    created_at: Date | string
    updated_at: Date | string
  }

  export type DecksUncheckedCreateWithoutCard_promptsInput = {
    id: string
    name: string
    description?: string | null
    created_at: Date | string
    updated_at: Date | string
  }

  export type DecksCreateOrConnectWithoutCard_promptsInput = {
    where: DecksWhereUniqueInput
    create: XOR<DecksCreateWithoutCard_promptsInput, DecksUncheckedCreateWithoutCard_promptsInput>
  }

  export type CardsCreateWithoutCard_promptsInput = {
    id: string
    front_text: string
    back_text?: string | null
    created_at: Date | string
    updated_at: Date | string
    multimedia_prompts?: Multimedia_promptsCreateNestedManyWithoutCardsInput
  }

  export type CardsUncheckedCreateWithoutCard_promptsInput = {
    id: string
    front_text: string
    back_text?: string | null
    created_at: Date | string
    updated_at: Date | string
    multimedia_prompts?: Multimedia_promptsUncheckedCreateNestedManyWithoutCardsInput
  }

  export type CardsCreateOrConnectWithoutCard_promptsInput = {
    where: CardsWhereUniqueInput
    create: XOR<CardsCreateWithoutCard_promptsInput, CardsUncheckedCreateWithoutCard_promptsInput>
  }

  export type CardsCreateManyCard_promptsInputEnvelope = {
    data: Enumerable<CardsCreateManyCard_promptsInput>
    skipDuplicates?: boolean
  }

  export type DecksUpsertWithoutCard_promptsInput = {
    update: XOR<DecksUpdateWithoutCard_promptsInput, DecksUncheckedUpdateWithoutCard_promptsInput>
    create: XOR<DecksCreateWithoutCard_promptsInput, DecksUncheckedCreateWithoutCard_promptsInput>
  }

  export type DecksUpdateWithoutCard_promptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DecksUncheckedUpdateWithoutCard_promptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardsUpsertWithWhereUniqueWithoutCard_promptsInput = {
    where: CardsWhereUniqueInput
    update: XOR<CardsUpdateWithoutCard_promptsInput, CardsUncheckedUpdateWithoutCard_promptsInput>
    create: XOR<CardsCreateWithoutCard_promptsInput, CardsUncheckedCreateWithoutCard_promptsInput>
  }

  export type CardsUpdateWithWhereUniqueWithoutCard_promptsInput = {
    where: CardsWhereUniqueInput
    data: XOR<CardsUpdateWithoutCard_promptsInput, CardsUncheckedUpdateWithoutCard_promptsInput>
  }

  export type CardsUpdateManyWithWhereWithoutCard_promptsInput = {
    where: CardsScalarWhereInput
    data: XOR<CardsUpdateManyMutationInput, CardsUncheckedUpdateManyWithoutCardsInput>
  }

  export type CardsScalarWhereInput = {
    AND?: Enumerable<CardsScalarWhereInput>
    OR?: Enumerable<CardsScalarWhereInput>
    NOT?: Enumerable<CardsScalarWhereInput>
    id?: UuidFilter | string
    card_prompt_id?: UuidFilter | string
    front_text?: StringFilter | string
    back_text?: StringNullableFilter | string | null
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type Card_promptsCreateWithoutCardsInput = {
    id: string
    text: string
    state: prompt_state
    created_at: Date | string
    updated_at: Date | string
    decks: DecksCreateNestedOneWithoutCard_promptsInput
  }

  export type Card_promptsUncheckedCreateWithoutCardsInput = {
    id: string
    text: string
    state: prompt_state
    deck_id: string
    created_at: Date | string
    updated_at: Date | string
  }

  export type Card_promptsCreateOrConnectWithoutCardsInput = {
    where: Card_promptsWhereUniqueInput
    create: XOR<Card_promptsCreateWithoutCardsInput, Card_promptsUncheckedCreateWithoutCardsInput>
  }

  export type Multimedia_promptsCreateWithoutCardsInput = {
    id: string
    text: string
    state: prompt_state
    created_at: Date | string
    updated_at: Date | string
    multimedia?: MultimediaCreateNestedManyWithoutMultimedia_promptsInput
  }

  export type Multimedia_promptsUncheckedCreateWithoutCardsInput = {
    id: string
    text: string
    state: prompt_state
    created_at: Date | string
    updated_at: Date | string
    multimedia?: MultimediaUncheckedCreateNestedManyWithoutMultimedia_promptsInput
  }

  export type Multimedia_promptsCreateOrConnectWithoutCardsInput = {
    where: Multimedia_promptsWhereUniqueInput
    create: XOR<Multimedia_promptsCreateWithoutCardsInput, Multimedia_promptsUncheckedCreateWithoutCardsInput>
  }

  export type Multimedia_promptsCreateManyCardsInputEnvelope = {
    data: Enumerable<Multimedia_promptsCreateManyCardsInput>
    skipDuplicates?: boolean
  }

  export type Card_promptsUpsertWithoutCardsInput = {
    update: XOR<Card_promptsUpdateWithoutCardsInput, Card_promptsUncheckedUpdateWithoutCardsInput>
    create: XOR<Card_promptsCreateWithoutCardsInput, Card_promptsUncheckedCreateWithoutCardsInput>
  }

  export type Card_promptsUpdateWithoutCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    state?: Enumprompt_stateFieldUpdateOperationsInput | prompt_state
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    decks?: DecksUpdateOneRequiredWithoutCard_promptsNestedInput
  }

  export type Card_promptsUncheckedUpdateWithoutCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    state?: Enumprompt_stateFieldUpdateOperationsInput | prompt_state
    deck_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Multimedia_promptsUpsertWithWhereUniqueWithoutCardsInput = {
    where: Multimedia_promptsWhereUniqueInput
    update: XOR<Multimedia_promptsUpdateWithoutCardsInput, Multimedia_promptsUncheckedUpdateWithoutCardsInput>
    create: XOR<Multimedia_promptsCreateWithoutCardsInput, Multimedia_promptsUncheckedCreateWithoutCardsInput>
  }

  export type Multimedia_promptsUpdateWithWhereUniqueWithoutCardsInput = {
    where: Multimedia_promptsWhereUniqueInput
    data: XOR<Multimedia_promptsUpdateWithoutCardsInput, Multimedia_promptsUncheckedUpdateWithoutCardsInput>
  }

  export type Multimedia_promptsUpdateManyWithWhereWithoutCardsInput = {
    where: Multimedia_promptsScalarWhereInput
    data: XOR<Multimedia_promptsUpdateManyMutationInput, Multimedia_promptsUncheckedUpdateManyWithoutMultimedia_promptsInput>
  }

  export type Multimedia_promptsScalarWhereInput = {
    AND?: Enumerable<Multimedia_promptsScalarWhereInput>
    OR?: Enumerable<Multimedia_promptsScalarWhereInput>
    NOT?: Enumerable<Multimedia_promptsScalarWhereInput>
    id?: UuidFilter | string
    text?: StringFilter | string
    state?: Enumprompt_stateFilter | prompt_state
    card_id?: UuidFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type Card_promptsCreateWithoutDecksInput = {
    id: string
    text: string
    state: prompt_state
    created_at: Date | string
    updated_at: Date | string
    cards?: CardsCreateNestedManyWithoutCard_promptsInput
  }

  export type Card_promptsUncheckedCreateWithoutDecksInput = {
    id: string
    text: string
    state: prompt_state
    created_at: Date | string
    updated_at: Date | string
    cards?: CardsUncheckedCreateNestedManyWithoutCard_promptsInput
  }

  export type Card_promptsCreateOrConnectWithoutDecksInput = {
    where: Card_promptsWhereUniqueInput
    create: XOR<Card_promptsCreateWithoutDecksInput, Card_promptsUncheckedCreateWithoutDecksInput>
  }

  export type Card_promptsCreateManyDecksInputEnvelope = {
    data: Enumerable<Card_promptsCreateManyDecksInput>
    skipDuplicates?: boolean
  }

  export type Card_promptsUpsertWithWhereUniqueWithoutDecksInput = {
    where: Card_promptsWhereUniqueInput
    update: XOR<Card_promptsUpdateWithoutDecksInput, Card_promptsUncheckedUpdateWithoutDecksInput>
    create: XOR<Card_promptsCreateWithoutDecksInput, Card_promptsUncheckedCreateWithoutDecksInput>
  }

  export type Card_promptsUpdateWithWhereUniqueWithoutDecksInput = {
    where: Card_promptsWhereUniqueInput
    data: XOR<Card_promptsUpdateWithoutDecksInput, Card_promptsUncheckedUpdateWithoutDecksInput>
  }

  export type Card_promptsUpdateManyWithWhereWithoutDecksInput = {
    where: Card_promptsScalarWhereInput
    data: XOR<Card_promptsUpdateManyMutationInput, Card_promptsUncheckedUpdateManyWithoutCard_promptsInput>
  }

  export type Card_promptsScalarWhereInput = {
    AND?: Enumerable<Card_promptsScalarWhereInput>
    OR?: Enumerable<Card_promptsScalarWhereInput>
    NOT?: Enumerable<Card_promptsScalarWhereInput>
    id?: UuidFilter | string
    text?: StringFilter | string
    state?: Enumprompt_stateFilter | prompt_state
    deck_id?: UuidFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type Multimedia_promptsCreateWithoutMultimediaInput = {
    id: string
    text: string
    state: prompt_state
    created_at: Date | string
    updated_at: Date | string
    cards: CardsCreateNestedOneWithoutMultimedia_promptsInput
  }

  export type Multimedia_promptsUncheckedCreateWithoutMultimediaInput = {
    id: string
    text: string
    state: prompt_state
    card_id: string
    created_at: Date | string
    updated_at: Date | string
  }

  export type Multimedia_promptsCreateOrConnectWithoutMultimediaInput = {
    where: Multimedia_promptsWhereUniqueInput
    create: XOR<Multimedia_promptsCreateWithoutMultimediaInput, Multimedia_promptsUncheckedCreateWithoutMultimediaInput>
  }

  export type Multimedia_promptsUpsertWithoutMultimediaInput = {
    update: XOR<Multimedia_promptsUpdateWithoutMultimediaInput, Multimedia_promptsUncheckedUpdateWithoutMultimediaInput>
    create: XOR<Multimedia_promptsCreateWithoutMultimediaInput, Multimedia_promptsUncheckedCreateWithoutMultimediaInput>
  }

  export type Multimedia_promptsUpdateWithoutMultimediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    state?: Enumprompt_stateFieldUpdateOperationsInput | prompt_state
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cards?: CardsUpdateOneRequiredWithoutMultimedia_promptsNestedInput
  }

  export type Multimedia_promptsUncheckedUpdateWithoutMultimediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    state?: Enumprompt_stateFieldUpdateOperationsInput | prompt_state
    card_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MultimediaCreateWithoutMultimedia_promptsInput = {
    id: string
    media_type: string
    url?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at: Date | string
    updated_at: Date | string
  }

  export type MultimediaUncheckedCreateWithoutMultimedia_promptsInput = {
    id: string
    media_type: string
    url?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at: Date | string
    updated_at: Date | string
  }

  export type MultimediaCreateOrConnectWithoutMultimedia_promptsInput = {
    where: MultimediaWhereUniqueInput
    create: XOR<MultimediaCreateWithoutMultimedia_promptsInput, MultimediaUncheckedCreateWithoutMultimedia_promptsInput>
  }

  export type MultimediaCreateManyMultimedia_promptsInputEnvelope = {
    data: Enumerable<MultimediaCreateManyMultimedia_promptsInput>
    skipDuplicates?: boolean
  }

  export type CardsCreateWithoutMultimedia_promptsInput = {
    id: string
    front_text: string
    back_text?: string | null
    created_at: Date | string
    updated_at: Date | string
    card_prompts: Card_promptsCreateNestedOneWithoutCardsInput
  }

  export type CardsUncheckedCreateWithoutMultimedia_promptsInput = {
    id: string
    card_prompt_id: string
    front_text: string
    back_text?: string | null
    created_at: Date | string
    updated_at: Date | string
  }

  export type CardsCreateOrConnectWithoutMultimedia_promptsInput = {
    where: CardsWhereUniqueInput
    create: XOR<CardsCreateWithoutMultimedia_promptsInput, CardsUncheckedCreateWithoutMultimedia_promptsInput>
  }

  export type MultimediaUpsertWithWhereUniqueWithoutMultimedia_promptsInput = {
    where: MultimediaWhereUniqueInput
    update: XOR<MultimediaUpdateWithoutMultimedia_promptsInput, MultimediaUncheckedUpdateWithoutMultimedia_promptsInput>
    create: XOR<MultimediaCreateWithoutMultimedia_promptsInput, MultimediaUncheckedCreateWithoutMultimedia_promptsInput>
  }

  export type MultimediaUpdateWithWhereUniqueWithoutMultimedia_promptsInput = {
    where: MultimediaWhereUniqueInput
    data: XOR<MultimediaUpdateWithoutMultimedia_promptsInput, MultimediaUncheckedUpdateWithoutMultimedia_promptsInput>
  }

  export type MultimediaUpdateManyWithWhereWithoutMultimedia_promptsInput = {
    where: MultimediaScalarWhereInput
    data: XOR<MultimediaUpdateManyMutationInput, MultimediaUncheckedUpdateManyWithoutMultimediaInput>
  }

  export type MultimediaScalarWhereInput = {
    AND?: Enumerable<MultimediaScalarWhereInput>
    OR?: Enumerable<MultimediaScalarWhereInput>
    NOT?: Enumerable<MultimediaScalarWhereInput>
    id?: UuidFilter | string
    multimedia_prompt_id?: UuidFilter | string
    media_type?: StringFilter | string
    url?: StringNullableFilter | string | null
    metadata?: JsonNullableFilter
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type CardsUpsertWithoutMultimedia_promptsInput = {
    update: XOR<CardsUpdateWithoutMultimedia_promptsInput, CardsUncheckedUpdateWithoutMultimedia_promptsInput>
    create: XOR<CardsCreateWithoutMultimedia_promptsInput, CardsUncheckedCreateWithoutMultimedia_promptsInput>
  }

  export type CardsUpdateWithoutMultimedia_promptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    front_text?: StringFieldUpdateOperationsInput | string
    back_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    card_prompts?: Card_promptsUpdateOneRequiredWithoutCardsNestedInput
  }

  export type CardsUncheckedUpdateWithoutMultimedia_promptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    card_prompt_id?: StringFieldUpdateOperationsInput | string
    front_text?: StringFieldUpdateOperationsInput | string
    back_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardsCreateManyCard_promptsInput = {
    id: string
    front_text: string
    back_text?: string | null
    created_at: Date | string
    updated_at: Date | string
  }

  export type CardsUpdateWithoutCard_promptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    front_text?: StringFieldUpdateOperationsInput | string
    back_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    multimedia_prompts?: Multimedia_promptsUpdateManyWithoutCardsNestedInput
  }

  export type CardsUncheckedUpdateWithoutCard_promptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    front_text?: StringFieldUpdateOperationsInput | string
    back_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    multimedia_prompts?: Multimedia_promptsUncheckedUpdateManyWithoutCardsNestedInput
  }

  export type CardsUncheckedUpdateManyWithoutCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    front_text?: StringFieldUpdateOperationsInput | string
    back_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Multimedia_promptsCreateManyCardsInput = {
    id: string
    text: string
    state: prompt_state
    created_at: Date | string
    updated_at: Date | string
  }

  export type Multimedia_promptsUpdateWithoutCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    state?: Enumprompt_stateFieldUpdateOperationsInput | prompt_state
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    multimedia?: MultimediaUpdateManyWithoutMultimedia_promptsNestedInput
  }

  export type Multimedia_promptsUncheckedUpdateWithoutCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    state?: Enumprompt_stateFieldUpdateOperationsInput | prompt_state
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    multimedia?: MultimediaUncheckedUpdateManyWithoutMultimedia_promptsNestedInput
  }

  export type Multimedia_promptsUncheckedUpdateManyWithoutMultimedia_promptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    state?: Enumprompt_stateFieldUpdateOperationsInput | prompt_state
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Card_promptsCreateManyDecksInput = {
    id: string
    text: string
    state: prompt_state
    created_at: Date | string
    updated_at: Date | string
  }

  export type Card_promptsUpdateWithoutDecksInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    state?: Enumprompt_stateFieldUpdateOperationsInput | prompt_state
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cards?: CardsUpdateManyWithoutCard_promptsNestedInput
  }

  export type Card_promptsUncheckedUpdateWithoutDecksInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    state?: Enumprompt_stateFieldUpdateOperationsInput | prompt_state
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cards?: CardsUncheckedUpdateManyWithoutCard_promptsNestedInput
  }

  export type Card_promptsUncheckedUpdateManyWithoutCard_promptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    state?: Enumprompt_stateFieldUpdateOperationsInput | prompt_state
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MultimediaCreateManyMultimedia_promptsInput = {
    id: string
    media_type: string
    url?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at: Date | string
    updated_at: Date | string
  }

  export type MultimediaUpdateWithoutMultimedia_promptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    media_type?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MultimediaUncheckedUpdateWithoutMultimedia_promptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    media_type?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MultimediaUncheckedUpdateManyWithoutMultimediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    media_type?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}

type Buffer = Omit<Uint8Array, 'set'>
