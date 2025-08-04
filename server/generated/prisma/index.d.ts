
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Teacher
 * 
 */
export type Teacher = $Result.DefaultSelection<Prisma.$TeacherPayload>
/**
 * Model Class
 * 
 */
export type Class = $Result.DefaultSelection<Prisma.$ClassPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Problem
 * 
 */
export type Problem = $Result.DefaultSelection<Prisma.$ProblemPayload>
/**
 * Model GroundTruth
 * 
 */
export type GroundTruth = $Result.DefaultSelection<Prisma.$GroundTruthPayload>
/**
 * Model ModelEvaluation
 * 
 */
export type ModelEvaluation = $Result.DefaultSelection<Prisma.$ModelEvaluationPayload>
/**
 * Model QuizSession
 * 
 */
export type QuizSession = $Result.DefaultSelection<Prisma.$QuizSessionPayload>
/**
 * Model QuizCode
 * 
 */
export type QuizCode = $Result.DefaultSelection<Prisma.$QuizCodePayload>
/**
 * Model QuizAttempt
 * 
 */
export type QuizAttempt = $Result.DefaultSelection<Prisma.$QuizAttemptPayload>
/**
 * Model QuizResponse
 * 
 */
export type QuizResponse = $Result.DefaultSelection<Prisma.$QuizResponsePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Category: {
  Change: 'Change',
  Combine: 'Combine',
  Compare: 'Compare',
  Unknown: 'Unknown'
};

export type Category = (typeof Category)[keyof typeof Category]


export const Subcategory: {
  CWU: 'CWU',
  CPU: 'CPU',
  CJWU: 'CJWU',
  CJPU: 'CJPU',
  CSWU: 'CSWU',
  CSPU: 'CSPU',
  CMDU: 'CMDU',
  CMLQU: 'CMLQU',
  CMSQU: 'CMSQU',
  CLDU: 'CLDU',
  CLLQU: 'CLLQU',
  CLSQU: 'CLSQU'
};

export type Subcategory = (typeof Subcategory)[keyof typeof Subcategory]


export const AIModelName: {
  OPENAI_GPT_4_1: 'OPENAI_GPT_4_1',
  ANTHROPIC_CLAUDE_SONNET_4: 'ANTHROPIC_CLAUDE_SONNET_4',
  GOOGLE_GEMINI_2_5_FLASH: 'GOOGLE_GEMINI_2_5_FLASH'
};

export type AIModelName = (typeof AIModelName)[keyof typeof AIModelName]


export const QuizStatus: {
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED'
};

export type QuizStatus = (typeof QuizStatus)[keyof typeof QuizStatus]


export const AttemptStatus: {
  STARTED: 'STARTED',
  COMPLETED: 'COMPLETED',
  ABANDONED: 'ABANDONED'
};

export type AttemptStatus = (typeof AttemptStatus)[keyof typeof AttemptStatus]

}

export type Category = $Enums.Category

export const Category: typeof $Enums.Category

export type Subcategory = $Enums.Subcategory

export const Subcategory: typeof $Enums.Subcategory

export type AIModelName = $Enums.AIModelName

export const AIModelName: typeof $Enums.AIModelName

export type QuizStatus = $Enums.QuizStatus

export const QuizStatus: typeof $Enums.QuizStatus

export type AttemptStatus = $Enums.AttemptStatus

export const AttemptStatus: typeof $Enums.AttemptStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Teachers
 * const teachers = await prisma.teacher.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Teachers
   * const teachers = await prisma.teacher.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.teacher`: Exposes CRUD operations for the **Teacher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teachers
    * const teachers = await prisma.teacher.findMany()
    * ```
    */
  get teacher(): Prisma.TeacherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.class`: Exposes CRUD operations for the **Class** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classes
    * const classes = await prisma.class.findMany()
    * ```
    */
  get class(): Prisma.ClassDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.problem`: Exposes CRUD operations for the **Problem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Problems
    * const problems = await prisma.problem.findMany()
    * ```
    */
  get problem(): Prisma.ProblemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groundTruth`: Exposes CRUD operations for the **GroundTruth** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroundTruths
    * const groundTruths = await prisma.groundTruth.findMany()
    * ```
    */
  get groundTruth(): Prisma.GroundTruthDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.modelEvaluation`: Exposes CRUD operations for the **ModelEvaluation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModelEvaluations
    * const modelEvaluations = await prisma.modelEvaluation.findMany()
    * ```
    */
  get modelEvaluation(): Prisma.ModelEvaluationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quizSession`: Exposes CRUD operations for the **QuizSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizSessions
    * const quizSessions = await prisma.quizSession.findMany()
    * ```
    */
  get quizSession(): Prisma.QuizSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quizCode`: Exposes CRUD operations for the **QuizCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizCodes
    * const quizCodes = await prisma.quizCode.findMany()
    * ```
    */
  get quizCode(): Prisma.QuizCodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quizAttempt`: Exposes CRUD operations for the **QuizAttempt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizAttempts
    * const quizAttempts = await prisma.quizAttempt.findMany()
    * ```
    */
  get quizAttempt(): Prisma.QuizAttemptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quizResponse`: Exposes CRUD operations for the **QuizResponse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizResponses
    * const quizResponses = await prisma.quizResponse.findMany()
    * ```
    */
  get quizResponse(): Prisma.QuizResponseDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Teacher: 'Teacher',
    Class: 'Class',
    Student: 'Student',
    Problem: 'Problem',
    GroundTruth: 'GroundTruth',
    ModelEvaluation: 'ModelEvaluation',
    QuizSession: 'QuizSession',
    QuizCode: 'QuizCode',
    QuizAttempt: 'QuizAttempt',
    QuizResponse: 'QuizResponse'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "teacher" | "class" | "student" | "problem" | "groundTruth" | "modelEvaluation" | "quizSession" | "quizCode" | "quizAttempt" | "quizResponse"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Teacher: {
        payload: Prisma.$TeacherPayload<ExtArgs>
        fields: Prisma.TeacherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findFirst: {
            args: Prisma.TeacherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findMany: {
            args: Prisma.TeacherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          create: {
            args: Prisma.TeacherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          createMany: {
            args: Prisma.TeacherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeacherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          delete: {
            args: Prisma.TeacherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          update: {
            args: Prisma.TeacherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          deleteMany: {
            args: Prisma.TeacherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeacherUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          upsert: {
            args: Prisma.TeacherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          aggregate: {
            args: Prisma.TeacherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacher>
          }
          groupBy: {
            args: Prisma.TeacherGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherCountAggregateOutputType> | number
          }
        }
      }
      Class: {
        payload: Prisma.$ClassPayload<ExtArgs>
        fields: Prisma.ClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findFirst: {
            args: Prisma.ClassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findMany: {
            args: Prisma.ClassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          create: {
            args: Prisma.ClassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          createMany: {
            args: Prisma.ClassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          delete: {
            args: Prisma.ClassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          update: {
            args: Prisma.ClassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          deleteMany: {
            args: Prisma.ClassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          upsert: {
            args: Prisma.ClassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          aggregate: {
            args: Prisma.ClassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClass>
          }
          groupBy: {
            args: Prisma.ClassGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassCountArgs<ExtArgs>
            result: $Utils.Optional<ClassCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Problem: {
        payload: Prisma.$ProblemPayload<ExtArgs>
        fields: Prisma.ProblemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProblemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProblemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          findFirst: {
            args: Prisma.ProblemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProblemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          findMany: {
            args: Prisma.ProblemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>[]
          }
          create: {
            args: Prisma.ProblemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          createMany: {
            args: Prisma.ProblemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProblemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>[]
          }
          delete: {
            args: Prisma.ProblemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          update: {
            args: Prisma.ProblemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          deleteMany: {
            args: Prisma.ProblemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProblemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProblemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>[]
          }
          upsert: {
            args: Prisma.ProblemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          aggregate: {
            args: Prisma.ProblemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProblem>
          }
          groupBy: {
            args: Prisma.ProblemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProblemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProblemCountArgs<ExtArgs>
            result: $Utils.Optional<ProblemCountAggregateOutputType> | number
          }
        }
      }
      GroundTruth: {
        payload: Prisma.$GroundTruthPayload<ExtArgs>
        fields: Prisma.GroundTruthFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroundTruthFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroundTruthPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroundTruthFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroundTruthPayload>
          }
          findFirst: {
            args: Prisma.GroundTruthFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroundTruthPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroundTruthFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroundTruthPayload>
          }
          findMany: {
            args: Prisma.GroundTruthFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroundTruthPayload>[]
          }
          create: {
            args: Prisma.GroundTruthCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroundTruthPayload>
          }
          createMany: {
            args: Prisma.GroundTruthCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroundTruthCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroundTruthPayload>[]
          }
          delete: {
            args: Prisma.GroundTruthDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroundTruthPayload>
          }
          update: {
            args: Prisma.GroundTruthUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroundTruthPayload>
          }
          deleteMany: {
            args: Prisma.GroundTruthDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroundTruthUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroundTruthUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroundTruthPayload>[]
          }
          upsert: {
            args: Prisma.GroundTruthUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroundTruthPayload>
          }
          aggregate: {
            args: Prisma.GroundTruthAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroundTruth>
          }
          groupBy: {
            args: Prisma.GroundTruthGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroundTruthGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroundTruthCountArgs<ExtArgs>
            result: $Utils.Optional<GroundTruthCountAggregateOutputType> | number
          }
        }
      }
      ModelEvaluation: {
        payload: Prisma.$ModelEvaluationPayload<ExtArgs>
        fields: Prisma.ModelEvaluationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModelEvaluationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelEvaluationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModelEvaluationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelEvaluationPayload>
          }
          findFirst: {
            args: Prisma.ModelEvaluationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelEvaluationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModelEvaluationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelEvaluationPayload>
          }
          findMany: {
            args: Prisma.ModelEvaluationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelEvaluationPayload>[]
          }
          create: {
            args: Prisma.ModelEvaluationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelEvaluationPayload>
          }
          createMany: {
            args: Prisma.ModelEvaluationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModelEvaluationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelEvaluationPayload>[]
          }
          delete: {
            args: Prisma.ModelEvaluationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelEvaluationPayload>
          }
          update: {
            args: Prisma.ModelEvaluationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelEvaluationPayload>
          }
          deleteMany: {
            args: Prisma.ModelEvaluationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModelEvaluationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModelEvaluationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelEvaluationPayload>[]
          }
          upsert: {
            args: Prisma.ModelEvaluationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelEvaluationPayload>
          }
          aggregate: {
            args: Prisma.ModelEvaluationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModelEvaluation>
          }
          groupBy: {
            args: Prisma.ModelEvaluationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModelEvaluationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModelEvaluationCountArgs<ExtArgs>
            result: $Utils.Optional<ModelEvaluationCountAggregateOutputType> | number
          }
        }
      }
      QuizSession: {
        payload: Prisma.$QuizSessionPayload<ExtArgs>
        fields: Prisma.QuizSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSessionPayload>
          }
          findFirst: {
            args: Prisma.QuizSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSessionPayload>
          }
          findMany: {
            args: Prisma.QuizSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSessionPayload>[]
          }
          create: {
            args: Prisma.QuizSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSessionPayload>
          }
          createMany: {
            args: Prisma.QuizSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSessionPayload>[]
          }
          delete: {
            args: Prisma.QuizSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSessionPayload>
          }
          update: {
            args: Prisma.QuizSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSessionPayload>
          }
          deleteMany: {
            args: Prisma.QuizSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSessionPayload>[]
          }
          upsert: {
            args: Prisma.QuizSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSessionPayload>
          }
          aggregate: {
            args: Prisma.QuizSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizSession>
          }
          groupBy: {
            args: Prisma.QuizSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizSessionCountArgs<ExtArgs>
            result: $Utils.Optional<QuizSessionCountAggregateOutputType> | number
          }
        }
      }
      QuizCode: {
        payload: Prisma.$QuizCodePayload<ExtArgs>
        fields: Prisma.QuizCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizCodePayload>
          }
          findFirst: {
            args: Prisma.QuizCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizCodePayload>
          }
          findMany: {
            args: Prisma.QuizCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizCodePayload>[]
          }
          create: {
            args: Prisma.QuizCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizCodePayload>
          }
          createMany: {
            args: Prisma.QuizCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizCodePayload>[]
          }
          delete: {
            args: Prisma.QuizCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizCodePayload>
          }
          update: {
            args: Prisma.QuizCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizCodePayload>
          }
          deleteMany: {
            args: Prisma.QuizCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizCodePayload>[]
          }
          upsert: {
            args: Prisma.QuizCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizCodePayload>
          }
          aggregate: {
            args: Prisma.QuizCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizCode>
          }
          groupBy: {
            args: Prisma.QuizCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizCodeCountArgs<ExtArgs>
            result: $Utils.Optional<QuizCodeCountAggregateOutputType> | number
          }
        }
      }
      QuizAttempt: {
        payload: Prisma.$QuizAttemptPayload<ExtArgs>
        fields: Prisma.QuizAttemptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizAttemptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizAttemptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>
          }
          findFirst: {
            args: Prisma.QuizAttemptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizAttemptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>
          }
          findMany: {
            args: Prisma.QuizAttemptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>[]
          }
          create: {
            args: Prisma.QuizAttemptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>
          }
          createMany: {
            args: Prisma.QuizAttemptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizAttemptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>[]
          }
          delete: {
            args: Prisma.QuizAttemptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>
          }
          update: {
            args: Prisma.QuizAttemptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>
          }
          deleteMany: {
            args: Prisma.QuizAttemptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizAttemptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizAttemptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>[]
          }
          upsert: {
            args: Prisma.QuizAttemptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>
          }
          aggregate: {
            args: Prisma.QuizAttemptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizAttempt>
          }
          groupBy: {
            args: Prisma.QuizAttemptGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizAttemptGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizAttemptCountArgs<ExtArgs>
            result: $Utils.Optional<QuizAttemptCountAggregateOutputType> | number
          }
        }
      }
      QuizResponse: {
        payload: Prisma.$QuizResponsePayload<ExtArgs>
        fields: Prisma.QuizResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResponsePayload>
          }
          findFirst: {
            args: Prisma.QuizResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResponsePayload>
          }
          findMany: {
            args: Prisma.QuizResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResponsePayload>[]
          }
          create: {
            args: Prisma.QuizResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResponsePayload>
          }
          createMany: {
            args: Prisma.QuizResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizResponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResponsePayload>[]
          }
          delete: {
            args: Prisma.QuizResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResponsePayload>
          }
          update: {
            args: Prisma.QuizResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResponsePayload>
          }
          deleteMany: {
            args: Prisma.QuizResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizResponseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResponsePayload>[]
          }
          upsert: {
            args: Prisma.QuizResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResponsePayload>
          }
          aggregate: {
            args: Prisma.QuizResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizResponse>
          }
          groupBy: {
            args: Prisma.QuizResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizResponseCountArgs<ExtArgs>
            result: $Utils.Optional<QuizResponseCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    teacher?: TeacherOmit
    class?: ClassOmit
    student?: StudentOmit
    problem?: ProblemOmit
    groundTruth?: GroundTruthOmit
    modelEvaluation?: ModelEvaluationOmit
    quizSession?: QuizSessionOmit
    quizCode?: QuizCodeOmit
    quizAttempt?: QuizAttemptOmit
    quizResponse?: QuizResponseOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TeacherCountOutputType
   */

  export type TeacherCountOutputType = {
    classes: number
    quizSessions: number
  }

  export type TeacherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | TeacherCountOutputTypeCountClassesArgs
    quizSessions?: boolean | TeacherCountOutputTypeCountQuizSessionsArgs
  }

  // Custom InputTypes
  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherCountOutputType
     */
    select?: TeacherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountQuizSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizSessionWhereInput
  }


  /**
   * Count Type ClassCountOutputType
   */

  export type ClassCountOutputType = {
    quizSessions: number
    students: number
  }

  export type ClassCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizSessions?: boolean | ClassCountOutputTypeCountQuizSessionsArgs
    students?: boolean | ClassCountOutputTypeCountStudentsArgs
  }

  // Custom InputTypes
  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassCountOutputType
     */
    select?: ClassCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountQuizSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizSessionWhereInput
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    quizAttempts: number
    quizCodes: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizAttempts?: boolean | StudentCountOutputTypeCountQuizAttemptsArgs
    quizCodes?: boolean | StudentCountOutputTypeCountQuizCodesArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountQuizAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizAttemptWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountQuizCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizCodeWhereInput
  }


  /**
   * Count Type ProblemCountOutputType
   */

  export type ProblemCountOutputType = {
    modelEvaluations: number
    quizResponses: number
  }

  export type ProblemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modelEvaluations?: boolean | ProblemCountOutputTypeCountModelEvaluationsArgs
    quizResponses?: boolean | ProblemCountOutputTypeCountQuizResponsesArgs
  }

  // Custom InputTypes
  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemCountOutputType
     */
    select?: ProblemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountModelEvaluationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelEvaluationWhereInput
  }

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountQuizResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizResponseWhereInput
  }


  /**
   * Count Type GroundTruthCountOutputType
   */

  export type GroundTruthCountOutputType = {
    modelEvaluations: number
  }

  export type GroundTruthCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modelEvaluations?: boolean | GroundTruthCountOutputTypeCountModelEvaluationsArgs
  }

  // Custom InputTypes
  /**
   * GroundTruthCountOutputType without action
   */
  export type GroundTruthCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroundTruthCountOutputType
     */
    select?: GroundTruthCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroundTruthCountOutputType without action
   */
  export type GroundTruthCountOutputTypeCountModelEvaluationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelEvaluationWhereInput
  }


  /**
   * Count Type QuizSessionCountOutputType
   */

  export type QuizSessionCountOutputType = {
    attempts: number
    quizCodes: number
  }

  export type QuizSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attempts?: boolean | QuizSessionCountOutputTypeCountAttemptsArgs
    quizCodes?: boolean | QuizSessionCountOutputTypeCountQuizCodesArgs
  }

  // Custom InputTypes
  /**
   * QuizSessionCountOutputType without action
   */
  export type QuizSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSessionCountOutputType
     */
    select?: QuizSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizSessionCountOutputType without action
   */
  export type QuizSessionCountOutputTypeCountAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizAttemptWhereInput
  }

  /**
   * QuizSessionCountOutputType without action
   */
  export type QuizSessionCountOutputTypeCountQuizCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizCodeWhereInput
  }


  /**
   * Count Type QuizAttemptCountOutputType
   */

  export type QuizAttemptCountOutputType = {
    responses: number
  }

  export type QuizAttemptCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responses?: boolean | QuizAttemptCountOutputTypeCountResponsesArgs
  }

  // Custom InputTypes
  /**
   * QuizAttemptCountOutputType without action
   */
  export type QuizAttemptCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttemptCountOutputType
     */
    select?: QuizAttemptCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizAttemptCountOutputType without action
   */
  export type QuizAttemptCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizResponseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Teacher
   */

  export type AggregateTeacher = {
    _count: TeacherCountAggregateOutputType | null
    _avg: TeacherAvgAggregateOutputType | null
    _sum: TeacherSumAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  export type TeacherAvgAggregateOutputType = {
    id: number | null
  }

  export type TeacherSumAggregateOutputType = {
    id: number | null
  }

  export type TeacherMinAggregateOutputType = {
    id: number | null
    email: string | null
    hashedPassword: string | null
    createdAt: Date | null
    name: string | null
  }

  export type TeacherMaxAggregateOutputType = {
    id: number | null
    email: string | null
    hashedPassword: string | null
    createdAt: Date | null
    name: string | null
  }

  export type TeacherCountAggregateOutputType = {
    id: number
    email: number
    hashedPassword: number
    createdAt: number
    name: number
    _all: number
  }


  export type TeacherAvgAggregateInputType = {
    id?: true
  }

  export type TeacherSumAggregateInputType = {
    id?: true
  }

  export type TeacherMinAggregateInputType = {
    id?: true
    email?: true
    hashedPassword?: true
    createdAt?: true
    name?: true
  }

  export type TeacherMaxAggregateInputType = {
    id?: true
    email?: true
    hashedPassword?: true
    createdAt?: true
    name?: true
  }

  export type TeacherCountAggregateInputType = {
    id?: true
    email?: true
    hashedPassword?: true
    createdAt?: true
    name?: true
    _all?: true
  }

  export type TeacherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teacher to aggregate.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teachers
    **/
    _count?: true | TeacherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeacherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeacherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherMaxAggregateInputType
  }

  export type GetTeacherAggregateType<T extends TeacherAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacher[P]>
      : GetScalarType<T[P], AggregateTeacher[P]>
  }




  export type TeacherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherWhereInput
    orderBy?: TeacherOrderByWithAggregationInput | TeacherOrderByWithAggregationInput[]
    by: TeacherScalarFieldEnum[] | TeacherScalarFieldEnum
    having?: TeacherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherCountAggregateInputType | true
    _avg?: TeacherAvgAggregateInputType
    _sum?: TeacherSumAggregateInputType
    _min?: TeacherMinAggregateInputType
    _max?: TeacherMaxAggregateInputType
  }

  export type TeacherGroupByOutputType = {
    id: number
    email: string
    hashedPassword: string
    createdAt: Date
    name: string
    _count: TeacherCountAggregateOutputType | null
    _avg: TeacherAvgAggregateOutputType | null
    _sum: TeacherSumAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  type GetTeacherGroupByPayload<T extends TeacherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherGroupByOutputType[P]>
        }
      >
    >


  export type TeacherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    hashedPassword?: boolean
    createdAt?: boolean
    name?: boolean
    classes?: boolean | Teacher$classesArgs<ExtArgs>
    quizSessions?: boolean | Teacher$quizSessionsArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    hashedPassword?: boolean
    createdAt?: boolean
    name?: boolean
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    hashedPassword?: boolean
    createdAt?: boolean
    name?: boolean
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectScalar = {
    id?: boolean
    email?: boolean
    hashedPassword?: boolean
    createdAt?: boolean
    name?: boolean
  }

  export type TeacherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "hashedPassword" | "createdAt" | "name", ExtArgs["result"]["teacher"]>
  export type TeacherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | Teacher$classesArgs<ExtArgs>
    quizSessions?: boolean | Teacher$quizSessionsArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeacherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TeacherIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeacherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Teacher"
    objects: {
      classes: Prisma.$ClassPayload<ExtArgs>[]
      quizSessions: Prisma.$QuizSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      hashedPassword: string
      createdAt: Date
      name: string
    }, ExtArgs["result"]["teacher"]>
    composites: {}
  }

  type TeacherGetPayload<S extends boolean | null | undefined | TeacherDefaultArgs> = $Result.GetResult<Prisma.$TeacherPayload, S>

  type TeacherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherCountAggregateInputType | true
    }

  export interface TeacherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Teacher'], meta: { name: 'Teacher' } }
    /**
     * Find zero or one Teacher that matches the filter.
     * @param {TeacherFindUniqueArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherFindUniqueArgs>(args: SelectSubset<T, TeacherFindUniqueArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teacher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherFindUniqueOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherFindFirstArgs>(args?: SelectSubset<T, TeacherFindFirstArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers
     * const teachers = await prisma.teacher.findMany()
     * 
     * // Get first 10 Teachers
     * const teachers = await prisma.teacher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherWithIdOnly = await prisma.teacher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeacherFindManyArgs>(args?: SelectSubset<T, TeacherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teacher.
     * @param {TeacherCreateArgs} args - Arguments to create a Teacher.
     * @example
     * // Create one Teacher
     * const Teacher = await prisma.teacher.create({
     *   data: {
     *     // ... data to create a Teacher
     *   }
     * })
     * 
     */
    create<T extends TeacherCreateArgs>(args: SelectSubset<T, TeacherCreateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teachers.
     * @param {TeacherCreateManyArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherCreateManyArgs>(args?: SelectSubset<T, TeacherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teachers and returns the data saved in the database.
     * @param {TeacherCreateManyAndReturnArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teachers and only return the `id`
     * const teacherWithIdOnly = await prisma.teacher.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeacherCreateManyAndReturnArgs>(args?: SelectSubset<T, TeacherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Teacher.
     * @param {TeacherDeleteArgs} args - Arguments to delete one Teacher.
     * @example
     * // Delete one Teacher
     * const Teacher = await prisma.teacher.delete({
     *   where: {
     *     // ... filter to delete one Teacher
     *   }
     * })
     * 
     */
    delete<T extends TeacherDeleteArgs>(args: SelectSubset<T, TeacherDeleteArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teacher.
     * @param {TeacherUpdateArgs} args - Arguments to update one Teacher.
     * @example
     * // Update one Teacher
     * const teacher = await prisma.teacher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherUpdateArgs>(args: SelectSubset<T, TeacherUpdateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teachers.
     * @param {TeacherDeleteManyArgs} args - Arguments to filter Teachers to delete.
     * @example
     * // Delete a few Teachers
     * const { count } = await prisma.teacher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherDeleteManyArgs>(args?: SelectSubset<T, TeacherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherUpdateManyArgs>(args: SelectSubset<T, TeacherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers and returns the data updated in the database.
     * @param {TeacherUpdateManyAndReturnArgs} args - Arguments to update many Teachers.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teachers and only return the `id`
     * const teacherWithIdOnly = await prisma.teacher.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeacherUpdateManyAndReturnArgs>(args: SelectSubset<T, TeacherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Teacher.
     * @param {TeacherUpsertArgs} args - Arguments to update or create a Teacher.
     * @example
     * // Update or create a Teacher
     * const teacher = await prisma.teacher.upsert({
     *   create: {
     *     // ... data to create a Teacher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher we want to update
     *   }
     * })
     */
    upsert<T extends TeacherUpsertArgs>(args: SelectSubset<T, TeacherUpsertArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherCountArgs} args - Arguments to filter Teachers to count.
     * @example
     * // Count the number of Teachers
     * const count = await prisma.teacher.count({
     *   where: {
     *     // ... the filter for the Teachers we want to count
     *   }
     * })
    **/
    count<T extends TeacherCountArgs>(
      args?: Subset<T, TeacherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeacherAggregateArgs>(args: Subset<T, TeacherAggregateArgs>): Prisma.PrismaPromise<GetTeacherAggregateType<T>>

    /**
     * Group by Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupByArgs} args - Group by arguments.
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
      T extends TeacherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherGroupByArgs['orderBy'] }
        : { orderBy?: TeacherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TeacherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Teacher model
   */
  readonly fields: TeacherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teacher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    classes<T extends Teacher$classesArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$classesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quizSessions<T extends Teacher$quizSessionsArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$quizSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Teacher model
   */
  interface TeacherFieldRefs {
    readonly id: FieldRef<"Teacher", 'Int'>
    readonly email: FieldRef<"Teacher", 'String'>
    readonly hashedPassword: FieldRef<"Teacher", 'String'>
    readonly createdAt: FieldRef<"Teacher", 'DateTime'>
    readonly name: FieldRef<"Teacher", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Teacher findUnique
   */
  export type TeacherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findUniqueOrThrow
   */
  export type TeacherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findFirst
   */
  export type TeacherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findFirstOrThrow
   */
  export type TeacherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findMany
   */
  export type TeacherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teachers to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher create
   */
  export type TeacherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to create a Teacher.
     */
    data: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
  }

  /**
   * Teacher createMany
   */
  export type TeacherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teacher createManyAndReturn
   */
  export type TeacherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teacher update
   */
  export type TeacherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to update a Teacher.
     */
    data: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
    /**
     * Choose, which Teacher to update.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher updateMany
   */
  export type TeacherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
  }

  /**
   * Teacher updateManyAndReturn
   */
  export type TeacherUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
  }

  /**
   * Teacher upsert
   */
  export type TeacherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The filter to search for the Teacher to update in case it exists.
     */
    where: TeacherWhereUniqueInput
    /**
     * In case the Teacher found by the `where` argument doesn't exist, create a new Teacher with this data.
     */
    create: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
    /**
     * In case the Teacher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
  }

  /**
   * Teacher delete
   */
  export type TeacherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter which Teacher to delete.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher deleteMany
   */
  export type TeacherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teachers to delete
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to delete.
     */
    limit?: number
  }

  /**
   * Teacher.classes
   */
  export type Teacher$classesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    cursor?: ClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Teacher.quizSessions
   */
  export type Teacher$quizSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSession
     */
    select?: QuizSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSession
     */
    omit?: QuizSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSessionInclude<ExtArgs> | null
    where?: QuizSessionWhereInput
    orderBy?: QuizSessionOrderByWithRelationInput | QuizSessionOrderByWithRelationInput[]
    cursor?: QuizSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizSessionScalarFieldEnum | QuizSessionScalarFieldEnum[]
  }

  /**
   * Teacher without action
   */
  export type TeacherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
  }


  /**
   * Model Class
   */

  export type AggregateClass = {
    _count: ClassCountAggregateOutputType | null
    _avg: ClassAvgAggregateOutputType | null
    _sum: ClassSumAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  export type ClassAvgAggregateOutputType = {
    id: number | null
    teacherId: number | null
  }

  export type ClassSumAggregateOutputType = {
    id: number | null
    teacherId: number | null
  }

  export type ClassMinAggregateOutputType = {
    id: number | null
    name: string | null
    teacherId: number | null
    createdAt: Date | null
  }

  export type ClassMaxAggregateOutputType = {
    id: number | null
    name: string | null
    teacherId: number | null
    createdAt: Date | null
  }

  export type ClassCountAggregateOutputType = {
    id: number
    name: number
    teacherId: number
    createdAt: number
    _all: number
  }


  export type ClassAvgAggregateInputType = {
    id?: true
    teacherId?: true
  }

  export type ClassSumAggregateInputType = {
    id?: true
    teacherId?: true
  }

  export type ClassMinAggregateInputType = {
    id?: true
    name?: true
    teacherId?: true
    createdAt?: true
  }

  export type ClassMaxAggregateInputType = {
    id?: true
    name?: true
    teacherId?: true
    createdAt?: true
  }

  export type ClassCountAggregateInputType = {
    id?: true
    name?: true
    teacherId?: true
    createdAt?: true
    _all?: true
  }

  export type ClassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Class to aggregate.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classes
    **/
    _count?: true | ClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassMaxAggregateInputType
  }

  export type GetClassAggregateType<T extends ClassAggregateArgs> = {
        [P in keyof T & keyof AggregateClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClass[P]>
      : GetScalarType<T[P], AggregateClass[P]>
  }




  export type ClassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithAggregationInput | ClassOrderByWithAggregationInput[]
    by: ClassScalarFieldEnum[] | ClassScalarFieldEnum
    having?: ClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassCountAggregateInputType | true
    _avg?: ClassAvgAggregateInputType
    _sum?: ClassSumAggregateInputType
    _min?: ClassMinAggregateInputType
    _max?: ClassMaxAggregateInputType
  }

  export type ClassGroupByOutputType = {
    id: number
    name: string
    teacherId: number
    createdAt: Date
    _count: ClassCountAggregateOutputType | null
    _avg: ClassAvgAggregateOutputType | null
    _sum: ClassSumAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  type GetClassGroupByPayload<T extends ClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassGroupByOutputType[P]>
            : GetScalarType<T[P], ClassGroupByOutputType[P]>
        }
      >
    >


  export type ClassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    teacherId?: boolean
    createdAt?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    quizSessions?: boolean | Class$quizSessionsArgs<ExtArgs>
    students?: boolean | Class$studentsArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    teacherId?: boolean
    createdAt?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    teacherId?: boolean
    createdAt?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectScalar = {
    id?: boolean
    name?: boolean
    teacherId?: boolean
    createdAt?: boolean
  }

  export type ClassOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "teacherId" | "createdAt", ExtArgs["result"]["class"]>
  export type ClassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    quizSessions?: boolean | Class$quizSessionsArgs<ExtArgs>
    students?: boolean | Class$studentsArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClassIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }
  export type ClassIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }

  export type $ClassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Class"
    objects: {
      teacher: Prisma.$TeacherPayload<ExtArgs>
      quizSessions: Prisma.$QuizSessionPayload<ExtArgs>[]
      students: Prisma.$StudentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      teacherId: number
      createdAt: Date
    }, ExtArgs["result"]["class"]>
    composites: {}
  }

  type ClassGetPayload<S extends boolean | null | undefined | ClassDefaultArgs> = $Result.GetResult<Prisma.$ClassPayload, S>

  type ClassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassCountAggregateInputType | true
    }

  export interface ClassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Class'], meta: { name: 'Class' } }
    /**
     * Find zero or one Class that matches the filter.
     * @param {ClassFindUniqueArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassFindUniqueArgs>(args: SelectSubset<T, ClassFindUniqueArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Class that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassFindUniqueOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassFindFirstArgs>(args?: SelectSubset<T, ClassFindFirstArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classes
     * const classes = await prisma.class.findMany()
     * 
     * // Get first 10 Classes
     * const classes = await prisma.class.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classWithIdOnly = await prisma.class.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassFindManyArgs>(args?: SelectSubset<T, ClassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Class.
     * @param {ClassCreateArgs} args - Arguments to create a Class.
     * @example
     * // Create one Class
     * const Class = await prisma.class.create({
     *   data: {
     *     // ... data to create a Class
     *   }
     * })
     * 
     */
    create<T extends ClassCreateArgs>(args: SelectSubset<T, ClassCreateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classes.
     * @param {ClassCreateManyArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassCreateManyArgs>(args?: SelectSubset<T, ClassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classes and returns the data saved in the database.
     * @param {ClassCreateManyAndReturnArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classes and only return the `id`
     * const classWithIdOnly = await prisma.class.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Class.
     * @param {ClassDeleteArgs} args - Arguments to delete one Class.
     * @example
     * // Delete one Class
     * const Class = await prisma.class.delete({
     *   where: {
     *     // ... filter to delete one Class
     *   }
     * })
     * 
     */
    delete<T extends ClassDeleteArgs>(args: SelectSubset<T, ClassDeleteArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Class.
     * @param {ClassUpdateArgs} args - Arguments to update one Class.
     * @example
     * // Update one Class
     * const class = await prisma.class.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassUpdateArgs>(args: SelectSubset<T, ClassUpdateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classes.
     * @param {ClassDeleteManyArgs} args - Arguments to filter Classes to delete.
     * @example
     * // Delete a few Classes
     * const { count } = await prisma.class.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassDeleteManyArgs>(args?: SelectSubset<T, ClassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassUpdateManyArgs>(args: SelectSubset<T, ClassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes and returns the data updated in the database.
     * @param {ClassUpdateManyAndReturnArgs} args - Arguments to update many Classes.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Classes and only return the `id`
     * const classWithIdOnly = await prisma.class.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClassUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Class.
     * @param {ClassUpsertArgs} args - Arguments to update or create a Class.
     * @example
     * // Update or create a Class
     * const class = await prisma.class.upsert({
     *   create: {
     *     // ... data to create a Class
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Class we want to update
     *   }
     * })
     */
    upsert<T extends ClassUpsertArgs>(args: SelectSubset<T, ClassUpsertArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassCountArgs} args - Arguments to filter Classes to count.
     * @example
     * // Count the number of Classes
     * const count = await prisma.class.count({
     *   where: {
     *     // ... the filter for the Classes we want to count
     *   }
     * })
    **/
    count<T extends ClassCountArgs>(
      args?: Subset<T, ClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClassAggregateArgs>(args: Subset<T, ClassAggregateArgs>): Prisma.PrismaPromise<GetClassAggregateType<T>>

    /**
     * Group by Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassGroupByArgs} args - Group by arguments.
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
      T extends ClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassGroupByArgs['orderBy'] }
        : { orderBy?: ClassGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Class model
   */
  readonly fields: ClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Class.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends TeacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeacherDefaultArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quizSessions<T extends Class$quizSessionsArgs<ExtArgs> = {}>(args?: Subset<T, Class$quizSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    students<T extends Class$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Class$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Class model
   */
  interface ClassFieldRefs {
    readonly id: FieldRef<"Class", 'Int'>
    readonly name: FieldRef<"Class", 'String'>
    readonly teacherId: FieldRef<"Class", 'Int'>
    readonly createdAt: FieldRef<"Class", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Class findUnique
   */
  export type ClassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findUniqueOrThrow
   */
  export type ClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findFirst
   */
  export type ClassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findFirstOrThrow
   */
  export type ClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findMany
   */
  export type ClassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Classes to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class create
   */
  export type ClassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to create a Class.
     */
    data: XOR<ClassCreateInput, ClassUncheckedCreateInput>
  }

  /**
   * Class createMany
   */
  export type ClassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Class createManyAndReturn
   */
  export type ClassCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Class update
   */
  export type ClassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to update a Class.
     */
    data: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
    /**
     * Choose, which Class to update.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class updateMany
   */
  export type ClassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
  }

  /**
   * Class updateManyAndReturn
   */
  export type ClassUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Class upsert
   */
  export type ClassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The filter to search for the Class to update in case it exists.
     */
    where: ClassWhereUniqueInput
    /**
     * In case the Class found by the `where` argument doesn't exist, create a new Class with this data.
     */
    create: XOR<ClassCreateInput, ClassUncheckedCreateInput>
    /**
     * In case the Class was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
  }

  /**
   * Class delete
   */
  export type ClassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter which Class to delete.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class deleteMany
   */
  export type ClassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classes to delete
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to delete.
     */
    limit?: number
  }

  /**
   * Class.quizSessions
   */
  export type Class$quizSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSession
     */
    select?: QuizSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSession
     */
    omit?: QuizSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSessionInclude<ExtArgs> | null
    where?: QuizSessionWhereInput
    orderBy?: QuizSessionOrderByWithRelationInput | QuizSessionOrderByWithRelationInput[]
    cursor?: QuizSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizSessionScalarFieldEnum | QuizSessionScalarFieldEnum[]
  }

  /**
   * Class.students
   */
  export type Class$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Class without action
   */
  export type ClassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    id: number | null
    classId: number | null
  }

  export type StudentSumAggregateOutputType = {
    id: number | null
    classId: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: number | null
    name: string | null
    classId: number | null
    userName: string | null
  }

  export type StudentMaxAggregateOutputType = {
    id: number | null
    name: string | null
    classId: number | null
    userName: string | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    name: number
    classId: number
    userName: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    id?: true
    classId?: true
  }

  export type StudentSumAggregateInputType = {
    id?: true
    classId?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    name?: true
    classId?: true
    userName?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    name?: true
    classId?: true
    userName?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    name?: true
    classId?: true
    userName?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: number
    name: string
    classId: number
    userName: string
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    classId?: boolean
    userName?: boolean
    quizAttempts?: boolean | Student$quizAttemptsArgs<ExtArgs>
    quizCodes?: boolean | Student$quizCodesArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    classId?: boolean
    userName?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    classId?: boolean
    userName?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    name?: boolean
    classId?: boolean
    userName?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "classId" | "userName", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizAttempts?: boolean | Student$quizAttemptsArgs<ExtArgs>
    quizCodes?: boolean | Student$quizCodesArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      quizAttempts: Prisma.$QuizAttemptPayload<ExtArgs>[]
      quizCodes: Prisma.$QuizCodePayload<ExtArgs>[]
      class: Prisma.$ClassPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      classId: number
      userName: string
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quizAttempts<T extends Student$quizAttemptsArgs<ExtArgs> = {}>(args?: Subset<T, Student$quizAttemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quizCodes<T extends Student$quizCodesArgs<ExtArgs> = {}>(args?: Subset<T, Student$quizCodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'Int'>
    readonly name: FieldRef<"Student", 'String'>
    readonly classId: FieldRef<"Student", 'Int'>
    readonly userName: FieldRef<"Student", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.quizAttempts
   */
  export type Student$quizAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    where?: QuizAttemptWhereInput
    orderBy?: QuizAttemptOrderByWithRelationInput | QuizAttemptOrderByWithRelationInput[]
    cursor?: QuizAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizAttemptScalarFieldEnum | QuizAttemptScalarFieldEnum[]
  }

  /**
   * Student.quizCodes
   */
  export type Student$quizCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCode
     */
    select?: QuizCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCode
     */
    omit?: QuizCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizCodeInclude<ExtArgs> | null
    where?: QuizCodeWhereInput
    orderBy?: QuizCodeOrderByWithRelationInput | QuizCodeOrderByWithRelationInput[]
    cursor?: QuizCodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizCodeScalarFieldEnum | QuizCodeScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Problem
   */

  export type AggregateProblem = {
    _count: ProblemCountAggregateOutputType | null
    _avg: ProblemAvgAggregateOutputType | null
    _sum: ProblemSumAggregateOutputType | null
    _min: ProblemMinAggregateOutputType | null
    _max: ProblemMaxAggregateOutputType | null
  }

  export type ProblemAvgAggregateOutputType = {
    id: number | null
    answer: number | null
    groundTruthId: number | null
  }

  export type ProblemSumAggregateOutputType = {
    id: number | null
    answer: number | null
    groundTruthId: number | null
  }

  export type ProblemMinAggregateOutputType = {
    id: number | null
    content: string | null
    answer: number | null
    createdAt: Date | null
    groundTruthId: number | null
  }

  export type ProblemMaxAggregateOutputType = {
    id: number | null
    content: string | null
    answer: number | null
    createdAt: Date | null
    groundTruthId: number | null
  }

  export type ProblemCountAggregateOutputType = {
    id: number
    content: number
    answer: number
    createdAt: number
    groundTruthId: number
    _all: number
  }


  export type ProblemAvgAggregateInputType = {
    id?: true
    answer?: true
    groundTruthId?: true
  }

  export type ProblemSumAggregateInputType = {
    id?: true
    answer?: true
    groundTruthId?: true
  }

  export type ProblemMinAggregateInputType = {
    id?: true
    content?: true
    answer?: true
    createdAt?: true
    groundTruthId?: true
  }

  export type ProblemMaxAggregateInputType = {
    id?: true
    content?: true
    answer?: true
    createdAt?: true
    groundTruthId?: true
  }

  export type ProblemCountAggregateInputType = {
    id?: true
    content?: true
    answer?: true
    createdAt?: true
    groundTruthId?: true
    _all?: true
  }

  export type ProblemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Problem to aggregate.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Problems
    **/
    _count?: true | ProblemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProblemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProblemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProblemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProblemMaxAggregateInputType
  }

  export type GetProblemAggregateType<T extends ProblemAggregateArgs> = {
        [P in keyof T & keyof AggregateProblem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProblem[P]>
      : GetScalarType<T[P], AggregateProblem[P]>
  }




  export type ProblemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemWhereInput
    orderBy?: ProblemOrderByWithAggregationInput | ProblemOrderByWithAggregationInput[]
    by: ProblemScalarFieldEnum[] | ProblemScalarFieldEnum
    having?: ProblemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProblemCountAggregateInputType | true
    _avg?: ProblemAvgAggregateInputType
    _sum?: ProblemSumAggregateInputType
    _min?: ProblemMinAggregateInputType
    _max?: ProblemMaxAggregateInputType
  }

  export type ProblemGroupByOutputType = {
    id: number
    content: string
    answer: number
    createdAt: Date
    groundTruthId: number
    _count: ProblemCountAggregateOutputType | null
    _avg: ProblemAvgAggregateOutputType | null
    _sum: ProblemSumAggregateOutputType | null
    _min: ProblemMinAggregateOutputType | null
    _max: ProblemMaxAggregateOutputType | null
  }

  type GetProblemGroupByPayload<T extends ProblemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProblemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProblemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProblemGroupByOutputType[P]>
            : GetScalarType<T[P], ProblemGroupByOutputType[P]>
        }
      >
    >


  export type ProblemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    answer?: boolean
    createdAt?: boolean
    groundTruthId?: boolean
    groundTruth?: boolean | GroundTruthDefaultArgs<ExtArgs>
    modelEvaluations?: boolean | Problem$modelEvaluationsArgs<ExtArgs>
    quizResponses?: boolean | Problem$quizResponsesArgs<ExtArgs>
    _count?: boolean | ProblemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>

  export type ProblemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    answer?: boolean
    createdAt?: boolean
    groundTruthId?: boolean
    groundTruth?: boolean | GroundTruthDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>

  export type ProblemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    answer?: boolean
    createdAt?: boolean
    groundTruthId?: boolean
    groundTruth?: boolean | GroundTruthDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>

  export type ProblemSelectScalar = {
    id?: boolean
    content?: boolean
    answer?: boolean
    createdAt?: boolean
    groundTruthId?: boolean
  }

  export type ProblemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "answer" | "createdAt" | "groundTruthId", ExtArgs["result"]["problem"]>
  export type ProblemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groundTruth?: boolean | GroundTruthDefaultArgs<ExtArgs>
    modelEvaluations?: boolean | Problem$modelEvaluationsArgs<ExtArgs>
    quizResponses?: boolean | Problem$quizResponsesArgs<ExtArgs>
    _count?: boolean | ProblemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProblemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groundTruth?: boolean | GroundTruthDefaultArgs<ExtArgs>
  }
  export type ProblemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groundTruth?: boolean | GroundTruthDefaultArgs<ExtArgs>
  }

  export type $ProblemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Problem"
    objects: {
      groundTruth: Prisma.$GroundTruthPayload<ExtArgs>
      modelEvaluations: Prisma.$ModelEvaluationPayload<ExtArgs>[]
      quizResponses: Prisma.$QuizResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      answer: number
      createdAt: Date
      groundTruthId: number
    }, ExtArgs["result"]["problem"]>
    composites: {}
  }

  type ProblemGetPayload<S extends boolean | null | undefined | ProblemDefaultArgs> = $Result.GetResult<Prisma.$ProblemPayload, S>

  type ProblemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProblemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProblemCountAggregateInputType | true
    }

  export interface ProblemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Problem'], meta: { name: 'Problem' } }
    /**
     * Find zero or one Problem that matches the filter.
     * @param {ProblemFindUniqueArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProblemFindUniqueArgs>(args: SelectSubset<T, ProblemFindUniqueArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Problem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProblemFindUniqueOrThrowArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProblemFindUniqueOrThrowArgs>(args: SelectSubset<T, ProblemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Problem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindFirstArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProblemFindFirstArgs>(args?: SelectSubset<T, ProblemFindFirstArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Problem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindFirstOrThrowArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProblemFindFirstOrThrowArgs>(args?: SelectSubset<T, ProblemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Problems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Problems
     * const problems = await prisma.problem.findMany()
     * 
     * // Get first 10 Problems
     * const problems = await prisma.problem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const problemWithIdOnly = await prisma.problem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProblemFindManyArgs>(args?: SelectSubset<T, ProblemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Problem.
     * @param {ProblemCreateArgs} args - Arguments to create a Problem.
     * @example
     * // Create one Problem
     * const Problem = await prisma.problem.create({
     *   data: {
     *     // ... data to create a Problem
     *   }
     * })
     * 
     */
    create<T extends ProblemCreateArgs>(args: SelectSubset<T, ProblemCreateArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Problems.
     * @param {ProblemCreateManyArgs} args - Arguments to create many Problems.
     * @example
     * // Create many Problems
     * const problem = await prisma.problem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProblemCreateManyArgs>(args?: SelectSubset<T, ProblemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Problems and returns the data saved in the database.
     * @param {ProblemCreateManyAndReturnArgs} args - Arguments to create many Problems.
     * @example
     * // Create many Problems
     * const problem = await prisma.problem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Problems and only return the `id`
     * const problemWithIdOnly = await prisma.problem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProblemCreateManyAndReturnArgs>(args?: SelectSubset<T, ProblemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Problem.
     * @param {ProblemDeleteArgs} args - Arguments to delete one Problem.
     * @example
     * // Delete one Problem
     * const Problem = await prisma.problem.delete({
     *   where: {
     *     // ... filter to delete one Problem
     *   }
     * })
     * 
     */
    delete<T extends ProblemDeleteArgs>(args: SelectSubset<T, ProblemDeleteArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Problem.
     * @param {ProblemUpdateArgs} args - Arguments to update one Problem.
     * @example
     * // Update one Problem
     * const problem = await prisma.problem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProblemUpdateArgs>(args: SelectSubset<T, ProblemUpdateArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Problems.
     * @param {ProblemDeleteManyArgs} args - Arguments to filter Problems to delete.
     * @example
     * // Delete a few Problems
     * const { count } = await prisma.problem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProblemDeleteManyArgs>(args?: SelectSubset<T, ProblemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Problems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Problems
     * const problem = await prisma.problem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProblemUpdateManyArgs>(args: SelectSubset<T, ProblemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Problems and returns the data updated in the database.
     * @param {ProblemUpdateManyAndReturnArgs} args - Arguments to update many Problems.
     * @example
     * // Update many Problems
     * const problem = await prisma.problem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Problems and only return the `id`
     * const problemWithIdOnly = await prisma.problem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProblemUpdateManyAndReturnArgs>(args: SelectSubset<T, ProblemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Problem.
     * @param {ProblemUpsertArgs} args - Arguments to update or create a Problem.
     * @example
     * // Update or create a Problem
     * const problem = await prisma.problem.upsert({
     *   create: {
     *     // ... data to create a Problem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Problem we want to update
     *   }
     * })
     */
    upsert<T extends ProblemUpsertArgs>(args: SelectSubset<T, ProblemUpsertArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Problems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemCountArgs} args - Arguments to filter Problems to count.
     * @example
     * // Count the number of Problems
     * const count = await prisma.problem.count({
     *   where: {
     *     // ... the filter for the Problems we want to count
     *   }
     * })
    **/
    count<T extends ProblemCountArgs>(
      args?: Subset<T, ProblemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProblemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Problem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProblemAggregateArgs>(args: Subset<T, ProblemAggregateArgs>): Prisma.PrismaPromise<GetProblemAggregateType<T>>

    /**
     * Group by Problem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemGroupByArgs} args - Group by arguments.
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
      T extends ProblemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProblemGroupByArgs['orderBy'] }
        : { orderBy?: ProblemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProblemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProblemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Problem model
   */
  readonly fields: ProblemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Problem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProblemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    groundTruth<T extends GroundTruthDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroundTruthDefaultArgs<ExtArgs>>): Prisma__GroundTruthClient<$Result.GetResult<Prisma.$GroundTruthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    modelEvaluations<T extends Problem$modelEvaluationsArgs<ExtArgs> = {}>(args?: Subset<T, Problem$modelEvaluationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelEvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quizResponses<T extends Problem$quizResponsesArgs<ExtArgs> = {}>(args?: Subset<T, Problem$quizResponsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Problem model
   */
  interface ProblemFieldRefs {
    readonly id: FieldRef<"Problem", 'Int'>
    readonly content: FieldRef<"Problem", 'String'>
    readonly answer: FieldRef<"Problem", 'Int'>
    readonly createdAt: FieldRef<"Problem", 'DateTime'>
    readonly groundTruthId: FieldRef<"Problem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Problem findUnique
   */
  export type ProblemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem findUniqueOrThrow
   */
  export type ProblemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem findFirst
   */
  export type ProblemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Problems.
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Problems.
     */
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * Problem findFirstOrThrow
   */
  export type ProblemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Problems.
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Problems.
     */
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * Problem findMany
   */
  export type ProblemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problems to fetch.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Problems.
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * Problem create
   */
  export type ProblemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The data needed to create a Problem.
     */
    data: XOR<ProblemCreateInput, ProblemUncheckedCreateInput>
  }

  /**
   * Problem createMany
   */
  export type ProblemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Problems.
     */
    data: ProblemCreateManyInput | ProblemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Problem createManyAndReturn
   */
  export type ProblemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * The data used to create many Problems.
     */
    data: ProblemCreateManyInput | ProblemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Problem update
   */
  export type ProblemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The data needed to update a Problem.
     */
    data: XOR<ProblemUpdateInput, ProblemUncheckedUpdateInput>
    /**
     * Choose, which Problem to update.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem updateMany
   */
  export type ProblemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Problems.
     */
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyInput>
    /**
     * Filter which Problems to update
     */
    where?: ProblemWhereInput
    /**
     * Limit how many Problems to update.
     */
    limit?: number
  }

  /**
   * Problem updateManyAndReturn
   */
  export type ProblemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * The data used to update Problems.
     */
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyInput>
    /**
     * Filter which Problems to update
     */
    where?: ProblemWhereInput
    /**
     * Limit how many Problems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Problem upsert
   */
  export type ProblemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The filter to search for the Problem to update in case it exists.
     */
    where: ProblemWhereUniqueInput
    /**
     * In case the Problem found by the `where` argument doesn't exist, create a new Problem with this data.
     */
    create: XOR<ProblemCreateInput, ProblemUncheckedCreateInput>
    /**
     * In case the Problem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProblemUpdateInput, ProblemUncheckedUpdateInput>
  }

  /**
   * Problem delete
   */
  export type ProblemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter which Problem to delete.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem deleteMany
   */
  export type ProblemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Problems to delete
     */
    where?: ProblemWhereInput
    /**
     * Limit how many Problems to delete.
     */
    limit?: number
  }

  /**
   * Problem.modelEvaluations
   */
  export type Problem$modelEvaluationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelEvaluation
     */
    select?: ModelEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelEvaluation
     */
    omit?: ModelEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelEvaluationInclude<ExtArgs> | null
    where?: ModelEvaluationWhereInput
    orderBy?: ModelEvaluationOrderByWithRelationInput | ModelEvaluationOrderByWithRelationInput[]
    cursor?: ModelEvaluationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModelEvaluationScalarFieldEnum | ModelEvaluationScalarFieldEnum[]
  }

  /**
   * Problem.quizResponses
   */
  export type Problem$quizResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResponse
     */
    select?: QuizResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResponse
     */
    omit?: QuizResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResponseInclude<ExtArgs> | null
    where?: QuizResponseWhereInput
    orderBy?: QuizResponseOrderByWithRelationInput | QuizResponseOrderByWithRelationInput[]
    cursor?: QuizResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizResponseScalarFieldEnum | QuizResponseScalarFieldEnum[]
  }

  /**
   * Problem without action
   */
  export type ProblemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
  }


  /**
   * Model GroundTruth
   */

  export type AggregateGroundTruth = {
    _count: GroundTruthCountAggregateOutputType | null
    _avg: GroundTruthAvgAggregateOutputType | null
    _sum: GroundTruthSumAggregateOutputType | null
    _min: GroundTruthMinAggregateOutputType | null
    _max: GroundTruthMaxAggregateOutputType | null
  }

  export type GroundTruthAvgAggregateOutputType = {
    id: number | null
    answer: number | null
  }

  export type GroundTruthSumAggregateOutputType = {
    id: number | null
    answer: number | null
  }

  export type GroundTruthMinAggregateOutputType = {
    id: number | null
    category: $Enums.Category | null
    subcategory: $Enums.Subcategory | null
    answer: number | null
  }

  export type GroundTruthMaxAggregateOutputType = {
    id: number | null
    category: $Enums.Category | null
    subcategory: $Enums.Subcategory | null
    answer: number | null
  }

  export type GroundTruthCountAggregateOutputType = {
    id: number
    category: number
    subcategory: number
    answer: number
    modelAnswers: number
    _all: number
  }


  export type GroundTruthAvgAggregateInputType = {
    id?: true
    answer?: true
  }

  export type GroundTruthSumAggregateInputType = {
    id?: true
    answer?: true
  }

  export type GroundTruthMinAggregateInputType = {
    id?: true
    category?: true
    subcategory?: true
    answer?: true
  }

  export type GroundTruthMaxAggregateInputType = {
    id?: true
    category?: true
    subcategory?: true
    answer?: true
  }

  export type GroundTruthCountAggregateInputType = {
    id?: true
    category?: true
    subcategory?: true
    answer?: true
    modelAnswers?: true
    _all?: true
  }

  export type GroundTruthAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroundTruth to aggregate.
     */
    where?: GroundTruthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroundTruths to fetch.
     */
    orderBy?: GroundTruthOrderByWithRelationInput | GroundTruthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroundTruthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroundTruths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroundTruths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroundTruths
    **/
    _count?: true | GroundTruthCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroundTruthAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroundTruthSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroundTruthMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroundTruthMaxAggregateInputType
  }

  export type GetGroundTruthAggregateType<T extends GroundTruthAggregateArgs> = {
        [P in keyof T & keyof AggregateGroundTruth]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroundTruth[P]>
      : GetScalarType<T[P], AggregateGroundTruth[P]>
  }




  export type GroundTruthGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroundTruthWhereInput
    orderBy?: GroundTruthOrderByWithAggregationInput | GroundTruthOrderByWithAggregationInput[]
    by: GroundTruthScalarFieldEnum[] | GroundTruthScalarFieldEnum
    having?: GroundTruthScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroundTruthCountAggregateInputType | true
    _avg?: GroundTruthAvgAggregateInputType
    _sum?: GroundTruthSumAggregateInputType
    _min?: GroundTruthMinAggregateInputType
    _max?: GroundTruthMaxAggregateInputType
  }

  export type GroundTruthGroupByOutputType = {
    id: number
    category: $Enums.Category
    subcategory: $Enums.Subcategory
    answer: number
    modelAnswers: JsonValue
    _count: GroundTruthCountAggregateOutputType | null
    _avg: GroundTruthAvgAggregateOutputType | null
    _sum: GroundTruthSumAggregateOutputType | null
    _min: GroundTruthMinAggregateOutputType | null
    _max: GroundTruthMaxAggregateOutputType | null
  }

  type GetGroundTruthGroupByPayload<T extends GroundTruthGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroundTruthGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroundTruthGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroundTruthGroupByOutputType[P]>
            : GetScalarType<T[P], GroundTruthGroupByOutputType[P]>
        }
      >
    >


  export type GroundTruthSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    subcategory?: boolean
    answer?: boolean
    modelAnswers?: boolean
    problem?: boolean | GroundTruth$problemArgs<ExtArgs>
    modelEvaluations?: boolean | GroundTruth$modelEvaluationsArgs<ExtArgs>
    _count?: boolean | GroundTruthCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groundTruth"]>

  export type GroundTruthSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    subcategory?: boolean
    answer?: boolean
    modelAnswers?: boolean
  }, ExtArgs["result"]["groundTruth"]>

  export type GroundTruthSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    subcategory?: boolean
    answer?: boolean
    modelAnswers?: boolean
  }, ExtArgs["result"]["groundTruth"]>

  export type GroundTruthSelectScalar = {
    id?: boolean
    category?: boolean
    subcategory?: boolean
    answer?: boolean
    modelAnswers?: boolean
  }

  export type GroundTruthOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category" | "subcategory" | "answer" | "modelAnswers", ExtArgs["result"]["groundTruth"]>
  export type GroundTruthInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problem?: boolean | GroundTruth$problemArgs<ExtArgs>
    modelEvaluations?: boolean | GroundTruth$modelEvaluationsArgs<ExtArgs>
    _count?: boolean | GroundTruthCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroundTruthIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GroundTruthIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GroundTruthPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroundTruth"
    objects: {
      problem: Prisma.$ProblemPayload<ExtArgs> | null
      modelEvaluations: Prisma.$ModelEvaluationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      category: $Enums.Category
      subcategory: $Enums.Subcategory
      answer: number
      modelAnswers: Prisma.JsonValue
    }, ExtArgs["result"]["groundTruth"]>
    composites: {}
  }

  type GroundTruthGetPayload<S extends boolean | null | undefined | GroundTruthDefaultArgs> = $Result.GetResult<Prisma.$GroundTruthPayload, S>

  type GroundTruthCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroundTruthFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroundTruthCountAggregateInputType | true
    }

  export interface GroundTruthDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroundTruth'], meta: { name: 'GroundTruth' } }
    /**
     * Find zero or one GroundTruth that matches the filter.
     * @param {GroundTruthFindUniqueArgs} args - Arguments to find a GroundTruth
     * @example
     * // Get one GroundTruth
     * const groundTruth = await prisma.groundTruth.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroundTruthFindUniqueArgs>(args: SelectSubset<T, GroundTruthFindUniqueArgs<ExtArgs>>): Prisma__GroundTruthClient<$Result.GetResult<Prisma.$GroundTruthPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroundTruth that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroundTruthFindUniqueOrThrowArgs} args - Arguments to find a GroundTruth
     * @example
     * // Get one GroundTruth
     * const groundTruth = await prisma.groundTruth.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroundTruthFindUniqueOrThrowArgs>(args: SelectSubset<T, GroundTruthFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroundTruthClient<$Result.GetResult<Prisma.$GroundTruthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroundTruth that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroundTruthFindFirstArgs} args - Arguments to find a GroundTruth
     * @example
     * // Get one GroundTruth
     * const groundTruth = await prisma.groundTruth.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroundTruthFindFirstArgs>(args?: SelectSubset<T, GroundTruthFindFirstArgs<ExtArgs>>): Prisma__GroundTruthClient<$Result.GetResult<Prisma.$GroundTruthPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroundTruth that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroundTruthFindFirstOrThrowArgs} args - Arguments to find a GroundTruth
     * @example
     * // Get one GroundTruth
     * const groundTruth = await prisma.groundTruth.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroundTruthFindFirstOrThrowArgs>(args?: SelectSubset<T, GroundTruthFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroundTruthClient<$Result.GetResult<Prisma.$GroundTruthPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroundTruths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroundTruthFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroundTruths
     * const groundTruths = await prisma.groundTruth.findMany()
     * 
     * // Get first 10 GroundTruths
     * const groundTruths = await prisma.groundTruth.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groundTruthWithIdOnly = await prisma.groundTruth.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroundTruthFindManyArgs>(args?: SelectSubset<T, GroundTruthFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroundTruthPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroundTruth.
     * @param {GroundTruthCreateArgs} args - Arguments to create a GroundTruth.
     * @example
     * // Create one GroundTruth
     * const GroundTruth = await prisma.groundTruth.create({
     *   data: {
     *     // ... data to create a GroundTruth
     *   }
     * })
     * 
     */
    create<T extends GroundTruthCreateArgs>(args: SelectSubset<T, GroundTruthCreateArgs<ExtArgs>>): Prisma__GroundTruthClient<$Result.GetResult<Prisma.$GroundTruthPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroundTruths.
     * @param {GroundTruthCreateManyArgs} args - Arguments to create many GroundTruths.
     * @example
     * // Create many GroundTruths
     * const groundTruth = await prisma.groundTruth.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroundTruthCreateManyArgs>(args?: SelectSubset<T, GroundTruthCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GroundTruths and returns the data saved in the database.
     * @param {GroundTruthCreateManyAndReturnArgs} args - Arguments to create many GroundTruths.
     * @example
     * // Create many GroundTruths
     * const groundTruth = await prisma.groundTruth.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GroundTruths and only return the `id`
     * const groundTruthWithIdOnly = await prisma.groundTruth.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroundTruthCreateManyAndReturnArgs>(args?: SelectSubset<T, GroundTruthCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroundTruthPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GroundTruth.
     * @param {GroundTruthDeleteArgs} args - Arguments to delete one GroundTruth.
     * @example
     * // Delete one GroundTruth
     * const GroundTruth = await prisma.groundTruth.delete({
     *   where: {
     *     // ... filter to delete one GroundTruth
     *   }
     * })
     * 
     */
    delete<T extends GroundTruthDeleteArgs>(args: SelectSubset<T, GroundTruthDeleteArgs<ExtArgs>>): Prisma__GroundTruthClient<$Result.GetResult<Prisma.$GroundTruthPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroundTruth.
     * @param {GroundTruthUpdateArgs} args - Arguments to update one GroundTruth.
     * @example
     * // Update one GroundTruth
     * const groundTruth = await prisma.groundTruth.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroundTruthUpdateArgs>(args: SelectSubset<T, GroundTruthUpdateArgs<ExtArgs>>): Prisma__GroundTruthClient<$Result.GetResult<Prisma.$GroundTruthPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroundTruths.
     * @param {GroundTruthDeleteManyArgs} args - Arguments to filter GroundTruths to delete.
     * @example
     * // Delete a few GroundTruths
     * const { count } = await prisma.groundTruth.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroundTruthDeleteManyArgs>(args?: SelectSubset<T, GroundTruthDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroundTruths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroundTruthUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroundTruths
     * const groundTruth = await prisma.groundTruth.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroundTruthUpdateManyArgs>(args: SelectSubset<T, GroundTruthUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroundTruths and returns the data updated in the database.
     * @param {GroundTruthUpdateManyAndReturnArgs} args - Arguments to update many GroundTruths.
     * @example
     * // Update many GroundTruths
     * const groundTruth = await prisma.groundTruth.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GroundTruths and only return the `id`
     * const groundTruthWithIdOnly = await prisma.groundTruth.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroundTruthUpdateManyAndReturnArgs>(args: SelectSubset<T, GroundTruthUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroundTruthPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GroundTruth.
     * @param {GroundTruthUpsertArgs} args - Arguments to update or create a GroundTruth.
     * @example
     * // Update or create a GroundTruth
     * const groundTruth = await prisma.groundTruth.upsert({
     *   create: {
     *     // ... data to create a GroundTruth
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroundTruth we want to update
     *   }
     * })
     */
    upsert<T extends GroundTruthUpsertArgs>(args: SelectSubset<T, GroundTruthUpsertArgs<ExtArgs>>): Prisma__GroundTruthClient<$Result.GetResult<Prisma.$GroundTruthPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GroundTruths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroundTruthCountArgs} args - Arguments to filter GroundTruths to count.
     * @example
     * // Count the number of GroundTruths
     * const count = await prisma.groundTruth.count({
     *   where: {
     *     // ... the filter for the GroundTruths we want to count
     *   }
     * })
    **/
    count<T extends GroundTruthCountArgs>(
      args?: Subset<T, GroundTruthCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroundTruthCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroundTruth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroundTruthAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroundTruthAggregateArgs>(args: Subset<T, GroundTruthAggregateArgs>): Prisma.PrismaPromise<GetGroundTruthAggregateType<T>>

    /**
     * Group by GroundTruth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroundTruthGroupByArgs} args - Group by arguments.
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
      T extends GroundTruthGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroundTruthGroupByArgs['orderBy'] }
        : { orderBy?: GroundTruthGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, GroundTruthGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroundTruthGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroundTruth model
   */
  readonly fields: GroundTruthFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroundTruth.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroundTruthClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    problem<T extends GroundTruth$problemArgs<ExtArgs> = {}>(args?: Subset<T, GroundTruth$problemArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    modelEvaluations<T extends GroundTruth$modelEvaluationsArgs<ExtArgs> = {}>(args?: Subset<T, GroundTruth$modelEvaluationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelEvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GroundTruth model
   */
  interface GroundTruthFieldRefs {
    readonly id: FieldRef<"GroundTruth", 'Int'>
    readonly category: FieldRef<"GroundTruth", 'Category'>
    readonly subcategory: FieldRef<"GroundTruth", 'Subcategory'>
    readonly answer: FieldRef<"GroundTruth", 'Int'>
    readonly modelAnswers: FieldRef<"GroundTruth", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * GroundTruth findUnique
   */
  export type GroundTruthFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroundTruth
     */
    select?: GroundTruthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroundTruth
     */
    omit?: GroundTruthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroundTruthInclude<ExtArgs> | null
    /**
     * Filter, which GroundTruth to fetch.
     */
    where: GroundTruthWhereUniqueInput
  }

  /**
   * GroundTruth findUniqueOrThrow
   */
  export type GroundTruthFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroundTruth
     */
    select?: GroundTruthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroundTruth
     */
    omit?: GroundTruthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroundTruthInclude<ExtArgs> | null
    /**
     * Filter, which GroundTruth to fetch.
     */
    where: GroundTruthWhereUniqueInput
  }

  /**
   * GroundTruth findFirst
   */
  export type GroundTruthFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroundTruth
     */
    select?: GroundTruthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroundTruth
     */
    omit?: GroundTruthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroundTruthInclude<ExtArgs> | null
    /**
     * Filter, which GroundTruth to fetch.
     */
    where?: GroundTruthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroundTruths to fetch.
     */
    orderBy?: GroundTruthOrderByWithRelationInput | GroundTruthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroundTruths.
     */
    cursor?: GroundTruthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroundTruths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroundTruths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroundTruths.
     */
    distinct?: GroundTruthScalarFieldEnum | GroundTruthScalarFieldEnum[]
  }

  /**
   * GroundTruth findFirstOrThrow
   */
  export type GroundTruthFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroundTruth
     */
    select?: GroundTruthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroundTruth
     */
    omit?: GroundTruthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroundTruthInclude<ExtArgs> | null
    /**
     * Filter, which GroundTruth to fetch.
     */
    where?: GroundTruthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroundTruths to fetch.
     */
    orderBy?: GroundTruthOrderByWithRelationInput | GroundTruthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroundTruths.
     */
    cursor?: GroundTruthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroundTruths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroundTruths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroundTruths.
     */
    distinct?: GroundTruthScalarFieldEnum | GroundTruthScalarFieldEnum[]
  }

  /**
   * GroundTruth findMany
   */
  export type GroundTruthFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroundTruth
     */
    select?: GroundTruthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroundTruth
     */
    omit?: GroundTruthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroundTruthInclude<ExtArgs> | null
    /**
     * Filter, which GroundTruths to fetch.
     */
    where?: GroundTruthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroundTruths to fetch.
     */
    orderBy?: GroundTruthOrderByWithRelationInput | GroundTruthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroundTruths.
     */
    cursor?: GroundTruthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroundTruths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroundTruths.
     */
    skip?: number
    distinct?: GroundTruthScalarFieldEnum | GroundTruthScalarFieldEnum[]
  }

  /**
   * GroundTruth create
   */
  export type GroundTruthCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroundTruth
     */
    select?: GroundTruthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroundTruth
     */
    omit?: GroundTruthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroundTruthInclude<ExtArgs> | null
    /**
     * The data needed to create a GroundTruth.
     */
    data: XOR<GroundTruthCreateInput, GroundTruthUncheckedCreateInput>
  }

  /**
   * GroundTruth createMany
   */
  export type GroundTruthCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroundTruths.
     */
    data: GroundTruthCreateManyInput | GroundTruthCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GroundTruth createManyAndReturn
   */
  export type GroundTruthCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroundTruth
     */
    select?: GroundTruthSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroundTruth
     */
    omit?: GroundTruthOmit<ExtArgs> | null
    /**
     * The data used to create many GroundTruths.
     */
    data: GroundTruthCreateManyInput | GroundTruthCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GroundTruth update
   */
  export type GroundTruthUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroundTruth
     */
    select?: GroundTruthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroundTruth
     */
    omit?: GroundTruthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroundTruthInclude<ExtArgs> | null
    /**
     * The data needed to update a GroundTruth.
     */
    data: XOR<GroundTruthUpdateInput, GroundTruthUncheckedUpdateInput>
    /**
     * Choose, which GroundTruth to update.
     */
    where: GroundTruthWhereUniqueInput
  }

  /**
   * GroundTruth updateMany
   */
  export type GroundTruthUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroundTruths.
     */
    data: XOR<GroundTruthUpdateManyMutationInput, GroundTruthUncheckedUpdateManyInput>
    /**
     * Filter which GroundTruths to update
     */
    where?: GroundTruthWhereInput
    /**
     * Limit how many GroundTruths to update.
     */
    limit?: number
  }

  /**
   * GroundTruth updateManyAndReturn
   */
  export type GroundTruthUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroundTruth
     */
    select?: GroundTruthSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroundTruth
     */
    omit?: GroundTruthOmit<ExtArgs> | null
    /**
     * The data used to update GroundTruths.
     */
    data: XOR<GroundTruthUpdateManyMutationInput, GroundTruthUncheckedUpdateManyInput>
    /**
     * Filter which GroundTruths to update
     */
    where?: GroundTruthWhereInput
    /**
     * Limit how many GroundTruths to update.
     */
    limit?: number
  }

  /**
   * GroundTruth upsert
   */
  export type GroundTruthUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroundTruth
     */
    select?: GroundTruthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroundTruth
     */
    omit?: GroundTruthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroundTruthInclude<ExtArgs> | null
    /**
     * The filter to search for the GroundTruth to update in case it exists.
     */
    where: GroundTruthWhereUniqueInput
    /**
     * In case the GroundTruth found by the `where` argument doesn't exist, create a new GroundTruth with this data.
     */
    create: XOR<GroundTruthCreateInput, GroundTruthUncheckedCreateInput>
    /**
     * In case the GroundTruth was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroundTruthUpdateInput, GroundTruthUncheckedUpdateInput>
  }

  /**
   * GroundTruth delete
   */
  export type GroundTruthDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroundTruth
     */
    select?: GroundTruthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroundTruth
     */
    omit?: GroundTruthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroundTruthInclude<ExtArgs> | null
    /**
     * Filter which GroundTruth to delete.
     */
    where: GroundTruthWhereUniqueInput
  }

  /**
   * GroundTruth deleteMany
   */
  export type GroundTruthDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroundTruths to delete
     */
    where?: GroundTruthWhereInput
    /**
     * Limit how many GroundTruths to delete.
     */
    limit?: number
  }

  /**
   * GroundTruth.problem
   */
  export type GroundTruth$problemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    where?: ProblemWhereInput
  }

  /**
   * GroundTruth.modelEvaluations
   */
  export type GroundTruth$modelEvaluationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelEvaluation
     */
    select?: ModelEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelEvaluation
     */
    omit?: ModelEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelEvaluationInclude<ExtArgs> | null
    where?: ModelEvaluationWhereInput
    orderBy?: ModelEvaluationOrderByWithRelationInput | ModelEvaluationOrderByWithRelationInput[]
    cursor?: ModelEvaluationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModelEvaluationScalarFieldEnum | ModelEvaluationScalarFieldEnum[]
  }

  /**
   * GroundTruth without action
   */
  export type GroundTruthDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroundTruth
     */
    select?: GroundTruthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroundTruth
     */
    omit?: GroundTruthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroundTruthInclude<ExtArgs> | null
  }


  /**
   * Model ModelEvaluation
   */

  export type AggregateModelEvaluation = {
    _count: ModelEvaluationCountAggregateOutputType | null
    _avg: ModelEvaluationAvgAggregateOutputType | null
    _sum: ModelEvaluationSumAggregateOutputType | null
    _min: ModelEvaluationMinAggregateOutputType | null
    _max: ModelEvaluationMaxAggregateOutputType | null
  }

  export type ModelEvaluationAvgAggregateOutputType = {
    id: number | null
    problemId: number | null
    answer: number | null
    groundTruthId: number | null
  }

  export type ModelEvaluationSumAggregateOutputType = {
    id: number | null
    problemId: number | null
    answer: number | null
    groundTruthId: number | null
  }

  export type ModelEvaluationMinAggregateOutputType = {
    id: number | null
    problemId: number | null
    createdAt: Date | null
    predictedCategory: $Enums.Category | null
    predictedSubcategory: $Enums.Subcategory | null
    modelName: $Enums.AIModelName | null
    answer: number | null
    isAnswerCorrect: boolean | null
    isModelMappingCorrect: boolean | null
    groundTruthId: number | null
    modelAnswerReasoning: string | null
    subCategoryReasoning: string | null
    supercategoryReasoning: string | null
  }

  export type ModelEvaluationMaxAggregateOutputType = {
    id: number | null
    problemId: number | null
    createdAt: Date | null
    predictedCategory: $Enums.Category | null
    predictedSubcategory: $Enums.Subcategory | null
    modelName: $Enums.AIModelName | null
    answer: number | null
    isAnswerCorrect: boolean | null
    isModelMappingCorrect: boolean | null
    groundTruthId: number | null
    modelAnswerReasoning: string | null
    subCategoryReasoning: string | null
    supercategoryReasoning: string | null
  }

  export type ModelEvaluationCountAggregateOutputType = {
    id: number
    problemId: number
    tokenUsage: number
    createdAt: number
    predictedCategory: number
    predictedSubcategory: number
    modelName: number
    answer: number
    isAnswerCorrect: number
    isModelMappingCorrect: number
    modelAnswers: number
    storyGrammarPrompts: number
    groundTruthId: number
    modelAnswerReasoning: number
    subCategoryReasoning: number
    supercategoryReasoning: number
    _all: number
  }


  export type ModelEvaluationAvgAggregateInputType = {
    id?: true
    problemId?: true
    answer?: true
    groundTruthId?: true
  }

  export type ModelEvaluationSumAggregateInputType = {
    id?: true
    problemId?: true
    answer?: true
    groundTruthId?: true
  }

  export type ModelEvaluationMinAggregateInputType = {
    id?: true
    problemId?: true
    createdAt?: true
    predictedCategory?: true
    predictedSubcategory?: true
    modelName?: true
    answer?: true
    isAnswerCorrect?: true
    isModelMappingCorrect?: true
    groundTruthId?: true
    modelAnswerReasoning?: true
    subCategoryReasoning?: true
    supercategoryReasoning?: true
  }

  export type ModelEvaluationMaxAggregateInputType = {
    id?: true
    problemId?: true
    createdAt?: true
    predictedCategory?: true
    predictedSubcategory?: true
    modelName?: true
    answer?: true
    isAnswerCorrect?: true
    isModelMappingCorrect?: true
    groundTruthId?: true
    modelAnswerReasoning?: true
    subCategoryReasoning?: true
    supercategoryReasoning?: true
  }

  export type ModelEvaluationCountAggregateInputType = {
    id?: true
    problemId?: true
    tokenUsage?: true
    createdAt?: true
    predictedCategory?: true
    predictedSubcategory?: true
    modelName?: true
    answer?: true
    isAnswerCorrect?: true
    isModelMappingCorrect?: true
    modelAnswers?: true
    storyGrammarPrompts?: true
    groundTruthId?: true
    modelAnswerReasoning?: true
    subCategoryReasoning?: true
    supercategoryReasoning?: true
    _all?: true
  }

  export type ModelEvaluationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModelEvaluation to aggregate.
     */
    where?: ModelEvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelEvaluations to fetch.
     */
    orderBy?: ModelEvaluationOrderByWithRelationInput | ModelEvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModelEvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelEvaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelEvaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModelEvaluations
    **/
    _count?: true | ModelEvaluationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModelEvaluationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModelEvaluationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModelEvaluationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModelEvaluationMaxAggregateInputType
  }

  export type GetModelEvaluationAggregateType<T extends ModelEvaluationAggregateArgs> = {
        [P in keyof T & keyof AggregateModelEvaluation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModelEvaluation[P]>
      : GetScalarType<T[P], AggregateModelEvaluation[P]>
  }




  export type ModelEvaluationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelEvaluationWhereInput
    orderBy?: ModelEvaluationOrderByWithAggregationInput | ModelEvaluationOrderByWithAggregationInput[]
    by: ModelEvaluationScalarFieldEnum[] | ModelEvaluationScalarFieldEnum
    having?: ModelEvaluationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModelEvaluationCountAggregateInputType | true
    _avg?: ModelEvaluationAvgAggregateInputType
    _sum?: ModelEvaluationSumAggregateInputType
    _min?: ModelEvaluationMinAggregateInputType
    _max?: ModelEvaluationMaxAggregateInputType
  }

  export type ModelEvaluationGroupByOutputType = {
    id: number
    problemId: number
    tokenUsage: JsonValue
    createdAt: Date
    predictedCategory: $Enums.Category | null
    predictedSubcategory: $Enums.Subcategory | null
    modelName: $Enums.AIModelName
    answer: number | null
    isAnswerCorrect: boolean
    isModelMappingCorrect: boolean
    modelAnswers: JsonValue | null
    storyGrammarPrompts: JsonValue | null
    groundTruthId: number
    modelAnswerReasoning: string | null
    subCategoryReasoning: string | null
    supercategoryReasoning: string
    _count: ModelEvaluationCountAggregateOutputType | null
    _avg: ModelEvaluationAvgAggregateOutputType | null
    _sum: ModelEvaluationSumAggregateOutputType | null
    _min: ModelEvaluationMinAggregateOutputType | null
    _max: ModelEvaluationMaxAggregateOutputType | null
  }

  type GetModelEvaluationGroupByPayload<T extends ModelEvaluationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModelEvaluationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModelEvaluationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModelEvaluationGroupByOutputType[P]>
            : GetScalarType<T[P], ModelEvaluationGroupByOutputType[P]>
        }
      >
    >


  export type ModelEvaluationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    problemId?: boolean
    tokenUsage?: boolean
    createdAt?: boolean
    predictedCategory?: boolean
    predictedSubcategory?: boolean
    modelName?: boolean
    answer?: boolean
    isAnswerCorrect?: boolean
    isModelMappingCorrect?: boolean
    modelAnswers?: boolean
    storyGrammarPrompts?: boolean
    groundTruthId?: boolean
    modelAnswerReasoning?: boolean
    subCategoryReasoning?: boolean
    supercategoryReasoning?: boolean
    groundTruth?: boolean | GroundTruthDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modelEvaluation"]>

  export type ModelEvaluationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    problemId?: boolean
    tokenUsage?: boolean
    createdAt?: boolean
    predictedCategory?: boolean
    predictedSubcategory?: boolean
    modelName?: boolean
    answer?: boolean
    isAnswerCorrect?: boolean
    isModelMappingCorrect?: boolean
    modelAnswers?: boolean
    storyGrammarPrompts?: boolean
    groundTruthId?: boolean
    modelAnswerReasoning?: boolean
    subCategoryReasoning?: boolean
    supercategoryReasoning?: boolean
    groundTruth?: boolean | GroundTruthDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modelEvaluation"]>

  export type ModelEvaluationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    problemId?: boolean
    tokenUsage?: boolean
    createdAt?: boolean
    predictedCategory?: boolean
    predictedSubcategory?: boolean
    modelName?: boolean
    answer?: boolean
    isAnswerCorrect?: boolean
    isModelMappingCorrect?: boolean
    modelAnswers?: boolean
    storyGrammarPrompts?: boolean
    groundTruthId?: boolean
    modelAnswerReasoning?: boolean
    subCategoryReasoning?: boolean
    supercategoryReasoning?: boolean
    groundTruth?: boolean | GroundTruthDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modelEvaluation"]>

  export type ModelEvaluationSelectScalar = {
    id?: boolean
    problemId?: boolean
    tokenUsage?: boolean
    createdAt?: boolean
    predictedCategory?: boolean
    predictedSubcategory?: boolean
    modelName?: boolean
    answer?: boolean
    isAnswerCorrect?: boolean
    isModelMappingCorrect?: boolean
    modelAnswers?: boolean
    storyGrammarPrompts?: boolean
    groundTruthId?: boolean
    modelAnswerReasoning?: boolean
    subCategoryReasoning?: boolean
    supercategoryReasoning?: boolean
  }

  export type ModelEvaluationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "problemId" | "tokenUsage" | "createdAt" | "predictedCategory" | "predictedSubcategory" | "modelName" | "answer" | "isAnswerCorrect" | "isModelMappingCorrect" | "modelAnswers" | "storyGrammarPrompts" | "groundTruthId" | "modelAnswerReasoning" | "subCategoryReasoning" | "supercategoryReasoning", ExtArgs["result"]["modelEvaluation"]>
  export type ModelEvaluationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groundTruth?: boolean | GroundTruthDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type ModelEvaluationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groundTruth?: boolean | GroundTruthDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type ModelEvaluationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groundTruth?: boolean | GroundTruthDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }

  export type $ModelEvaluationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ModelEvaluation"
    objects: {
      groundTruth: Prisma.$GroundTruthPayload<ExtArgs>
      problem: Prisma.$ProblemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      problemId: number
      tokenUsage: Prisma.JsonValue
      createdAt: Date
      predictedCategory: $Enums.Category | null
      predictedSubcategory: $Enums.Subcategory | null
      modelName: $Enums.AIModelName
      answer: number | null
      isAnswerCorrect: boolean
      isModelMappingCorrect: boolean
      modelAnswers: Prisma.JsonValue | null
      storyGrammarPrompts: Prisma.JsonValue | null
      groundTruthId: number
      modelAnswerReasoning: string | null
      subCategoryReasoning: string | null
      supercategoryReasoning: string
    }, ExtArgs["result"]["modelEvaluation"]>
    composites: {}
  }

  type ModelEvaluationGetPayload<S extends boolean | null | undefined | ModelEvaluationDefaultArgs> = $Result.GetResult<Prisma.$ModelEvaluationPayload, S>

  type ModelEvaluationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModelEvaluationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModelEvaluationCountAggregateInputType | true
    }

  export interface ModelEvaluationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ModelEvaluation'], meta: { name: 'ModelEvaluation' } }
    /**
     * Find zero or one ModelEvaluation that matches the filter.
     * @param {ModelEvaluationFindUniqueArgs} args - Arguments to find a ModelEvaluation
     * @example
     * // Get one ModelEvaluation
     * const modelEvaluation = await prisma.modelEvaluation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModelEvaluationFindUniqueArgs>(args: SelectSubset<T, ModelEvaluationFindUniqueArgs<ExtArgs>>): Prisma__ModelEvaluationClient<$Result.GetResult<Prisma.$ModelEvaluationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ModelEvaluation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModelEvaluationFindUniqueOrThrowArgs} args - Arguments to find a ModelEvaluation
     * @example
     * // Get one ModelEvaluation
     * const modelEvaluation = await prisma.modelEvaluation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModelEvaluationFindUniqueOrThrowArgs>(args: SelectSubset<T, ModelEvaluationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModelEvaluationClient<$Result.GetResult<Prisma.$ModelEvaluationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModelEvaluation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelEvaluationFindFirstArgs} args - Arguments to find a ModelEvaluation
     * @example
     * // Get one ModelEvaluation
     * const modelEvaluation = await prisma.modelEvaluation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModelEvaluationFindFirstArgs>(args?: SelectSubset<T, ModelEvaluationFindFirstArgs<ExtArgs>>): Prisma__ModelEvaluationClient<$Result.GetResult<Prisma.$ModelEvaluationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModelEvaluation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelEvaluationFindFirstOrThrowArgs} args - Arguments to find a ModelEvaluation
     * @example
     * // Get one ModelEvaluation
     * const modelEvaluation = await prisma.modelEvaluation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModelEvaluationFindFirstOrThrowArgs>(args?: SelectSubset<T, ModelEvaluationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModelEvaluationClient<$Result.GetResult<Prisma.$ModelEvaluationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ModelEvaluations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelEvaluationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModelEvaluations
     * const modelEvaluations = await prisma.modelEvaluation.findMany()
     * 
     * // Get first 10 ModelEvaluations
     * const modelEvaluations = await prisma.modelEvaluation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modelEvaluationWithIdOnly = await prisma.modelEvaluation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModelEvaluationFindManyArgs>(args?: SelectSubset<T, ModelEvaluationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelEvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ModelEvaluation.
     * @param {ModelEvaluationCreateArgs} args - Arguments to create a ModelEvaluation.
     * @example
     * // Create one ModelEvaluation
     * const ModelEvaluation = await prisma.modelEvaluation.create({
     *   data: {
     *     // ... data to create a ModelEvaluation
     *   }
     * })
     * 
     */
    create<T extends ModelEvaluationCreateArgs>(args: SelectSubset<T, ModelEvaluationCreateArgs<ExtArgs>>): Prisma__ModelEvaluationClient<$Result.GetResult<Prisma.$ModelEvaluationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ModelEvaluations.
     * @param {ModelEvaluationCreateManyArgs} args - Arguments to create many ModelEvaluations.
     * @example
     * // Create many ModelEvaluations
     * const modelEvaluation = await prisma.modelEvaluation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModelEvaluationCreateManyArgs>(args?: SelectSubset<T, ModelEvaluationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ModelEvaluations and returns the data saved in the database.
     * @param {ModelEvaluationCreateManyAndReturnArgs} args - Arguments to create many ModelEvaluations.
     * @example
     * // Create many ModelEvaluations
     * const modelEvaluation = await prisma.modelEvaluation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ModelEvaluations and only return the `id`
     * const modelEvaluationWithIdOnly = await prisma.modelEvaluation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModelEvaluationCreateManyAndReturnArgs>(args?: SelectSubset<T, ModelEvaluationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelEvaluationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ModelEvaluation.
     * @param {ModelEvaluationDeleteArgs} args - Arguments to delete one ModelEvaluation.
     * @example
     * // Delete one ModelEvaluation
     * const ModelEvaluation = await prisma.modelEvaluation.delete({
     *   where: {
     *     // ... filter to delete one ModelEvaluation
     *   }
     * })
     * 
     */
    delete<T extends ModelEvaluationDeleteArgs>(args: SelectSubset<T, ModelEvaluationDeleteArgs<ExtArgs>>): Prisma__ModelEvaluationClient<$Result.GetResult<Prisma.$ModelEvaluationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ModelEvaluation.
     * @param {ModelEvaluationUpdateArgs} args - Arguments to update one ModelEvaluation.
     * @example
     * // Update one ModelEvaluation
     * const modelEvaluation = await prisma.modelEvaluation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModelEvaluationUpdateArgs>(args: SelectSubset<T, ModelEvaluationUpdateArgs<ExtArgs>>): Prisma__ModelEvaluationClient<$Result.GetResult<Prisma.$ModelEvaluationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ModelEvaluations.
     * @param {ModelEvaluationDeleteManyArgs} args - Arguments to filter ModelEvaluations to delete.
     * @example
     * // Delete a few ModelEvaluations
     * const { count } = await prisma.modelEvaluation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModelEvaluationDeleteManyArgs>(args?: SelectSubset<T, ModelEvaluationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModelEvaluations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelEvaluationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModelEvaluations
     * const modelEvaluation = await prisma.modelEvaluation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModelEvaluationUpdateManyArgs>(args: SelectSubset<T, ModelEvaluationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModelEvaluations and returns the data updated in the database.
     * @param {ModelEvaluationUpdateManyAndReturnArgs} args - Arguments to update many ModelEvaluations.
     * @example
     * // Update many ModelEvaluations
     * const modelEvaluation = await prisma.modelEvaluation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ModelEvaluations and only return the `id`
     * const modelEvaluationWithIdOnly = await prisma.modelEvaluation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ModelEvaluationUpdateManyAndReturnArgs>(args: SelectSubset<T, ModelEvaluationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelEvaluationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ModelEvaluation.
     * @param {ModelEvaluationUpsertArgs} args - Arguments to update or create a ModelEvaluation.
     * @example
     * // Update or create a ModelEvaluation
     * const modelEvaluation = await prisma.modelEvaluation.upsert({
     *   create: {
     *     // ... data to create a ModelEvaluation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModelEvaluation we want to update
     *   }
     * })
     */
    upsert<T extends ModelEvaluationUpsertArgs>(args: SelectSubset<T, ModelEvaluationUpsertArgs<ExtArgs>>): Prisma__ModelEvaluationClient<$Result.GetResult<Prisma.$ModelEvaluationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ModelEvaluations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelEvaluationCountArgs} args - Arguments to filter ModelEvaluations to count.
     * @example
     * // Count the number of ModelEvaluations
     * const count = await prisma.modelEvaluation.count({
     *   where: {
     *     // ... the filter for the ModelEvaluations we want to count
     *   }
     * })
    **/
    count<T extends ModelEvaluationCountArgs>(
      args?: Subset<T, ModelEvaluationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModelEvaluationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModelEvaluation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelEvaluationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModelEvaluationAggregateArgs>(args: Subset<T, ModelEvaluationAggregateArgs>): Prisma.PrismaPromise<GetModelEvaluationAggregateType<T>>

    /**
     * Group by ModelEvaluation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelEvaluationGroupByArgs} args - Group by arguments.
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
      T extends ModelEvaluationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModelEvaluationGroupByArgs['orderBy'] }
        : { orderBy?: ModelEvaluationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ModelEvaluationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModelEvaluationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ModelEvaluation model
   */
  readonly fields: ModelEvaluationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModelEvaluation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModelEvaluationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    groundTruth<T extends GroundTruthDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroundTruthDefaultArgs<ExtArgs>>): Prisma__GroundTruthClient<$Result.GetResult<Prisma.$GroundTruthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    problem<T extends ProblemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProblemDefaultArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ModelEvaluation model
   */
  interface ModelEvaluationFieldRefs {
    readonly id: FieldRef<"ModelEvaluation", 'Int'>
    readonly problemId: FieldRef<"ModelEvaluation", 'Int'>
    readonly tokenUsage: FieldRef<"ModelEvaluation", 'Json'>
    readonly createdAt: FieldRef<"ModelEvaluation", 'DateTime'>
    readonly predictedCategory: FieldRef<"ModelEvaluation", 'Category'>
    readonly predictedSubcategory: FieldRef<"ModelEvaluation", 'Subcategory'>
    readonly modelName: FieldRef<"ModelEvaluation", 'AIModelName'>
    readonly answer: FieldRef<"ModelEvaluation", 'Int'>
    readonly isAnswerCorrect: FieldRef<"ModelEvaluation", 'Boolean'>
    readonly isModelMappingCorrect: FieldRef<"ModelEvaluation", 'Boolean'>
    readonly modelAnswers: FieldRef<"ModelEvaluation", 'Json'>
    readonly storyGrammarPrompts: FieldRef<"ModelEvaluation", 'Json'>
    readonly groundTruthId: FieldRef<"ModelEvaluation", 'Int'>
    readonly modelAnswerReasoning: FieldRef<"ModelEvaluation", 'String'>
    readonly subCategoryReasoning: FieldRef<"ModelEvaluation", 'String'>
    readonly supercategoryReasoning: FieldRef<"ModelEvaluation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ModelEvaluation findUnique
   */
  export type ModelEvaluationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelEvaluation
     */
    select?: ModelEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelEvaluation
     */
    omit?: ModelEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelEvaluationInclude<ExtArgs> | null
    /**
     * Filter, which ModelEvaluation to fetch.
     */
    where: ModelEvaluationWhereUniqueInput
  }

  /**
   * ModelEvaluation findUniqueOrThrow
   */
  export type ModelEvaluationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelEvaluation
     */
    select?: ModelEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelEvaluation
     */
    omit?: ModelEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelEvaluationInclude<ExtArgs> | null
    /**
     * Filter, which ModelEvaluation to fetch.
     */
    where: ModelEvaluationWhereUniqueInput
  }

  /**
   * ModelEvaluation findFirst
   */
  export type ModelEvaluationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelEvaluation
     */
    select?: ModelEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelEvaluation
     */
    omit?: ModelEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelEvaluationInclude<ExtArgs> | null
    /**
     * Filter, which ModelEvaluation to fetch.
     */
    where?: ModelEvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelEvaluations to fetch.
     */
    orderBy?: ModelEvaluationOrderByWithRelationInput | ModelEvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModelEvaluations.
     */
    cursor?: ModelEvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelEvaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelEvaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModelEvaluations.
     */
    distinct?: ModelEvaluationScalarFieldEnum | ModelEvaluationScalarFieldEnum[]
  }

  /**
   * ModelEvaluation findFirstOrThrow
   */
  export type ModelEvaluationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelEvaluation
     */
    select?: ModelEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelEvaluation
     */
    omit?: ModelEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelEvaluationInclude<ExtArgs> | null
    /**
     * Filter, which ModelEvaluation to fetch.
     */
    where?: ModelEvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelEvaluations to fetch.
     */
    orderBy?: ModelEvaluationOrderByWithRelationInput | ModelEvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModelEvaluations.
     */
    cursor?: ModelEvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelEvaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelEvaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModelEvaluations.
     */
    distinct?: ModelEvaluationScalarFieldEnum | ModelEvaluationScalarFieldEnum[]
  }

  /**
   * ModelEvaluation findMany
   */
  export type ModelEvaluationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelEvaluation
     */
    select?: ModelEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelEvaluation
     */
    omit?: ModelEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelEvaluationInclude<ExtArgs> | null
    /**
     * Filter, which ModelEvaluations to fetch.
     */
    where?: ModelEvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelEvaluations to fetch.
     */
    orderBy?: ModelEvaluationOrderByWithRelationInput | ModelEvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModelEvaluations.
     */
    cursor?: ModelEvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelEvaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelEvaluations.
     */
    skip?: number
    distinct?: ModelEvaluationScalarFieldEnum | ModelEvaluationScalarFieldEnum[]
  }

  /**
   * ModelEvaluation create
   */
  export type ModelEvaluationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelEvaluation
     */
    select?: ModelEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelEvaluation
     */
    omit?: ModelEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelEvaluationInclude<ExtArgs> | null
    /**
     * The data needed to create a ModelEvaluation.
     */
    data: XOR<ModelEvaluationCreateInput, ModelEvaluationUncheckedCreateInput>
  }

  /**
   * ModelEvaluation createMany
   */
  export type ModelEvaluationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ModelEvaluations.
     */
    data: ModelEvaluationCreateManyInput | ModelEvaluationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ModelEvaluation createManyAndReturn
   */
  export type ModelEvaluationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelEvaluation
     */
    select?: ModelEvaluationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModelEvaluation
     */
    omit?: ModelEvaluationOmit<ExtArgs> | null
    /**
     * The data used to create many ModelEvaluations.
     */
    data: ModelEvaluationCreateManyInput | ModelEvaluationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelEvaluationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ModelEvaluation update
   */
  export type ModelEvaluationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelEvaluation
     */
    select?: ModelEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelEvaluation
     */
    omit?: ModelEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelEvaluationInclude<ExtArgs> | null
    /**
     * The data needed to update a ModelEvaluation.
     */
    data: XOR<ModelEvaluationUpdateInput, ModelEvaluationUncheckedUpdateInput>
    /**
     * Choose, which ModelEvaluation to update.
     */
    where: ModelEvaluationWhereUniqueInput
  }

  /**
   * ModelEvaluation updateMany
   */
  export type ModelEvaluationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ModelEvaluations.
     */
    data: XOR<ModelEvaluationUpdateManyMutationInput, ModelEvaluationUncheckedUpdateManyInput>
    /**
     * Filter which ModelEvaluations to update
     */
    where?: ModelEvaluationWhereInput
    /**
     * Limit how many ModelEvaluations to update.
     */
    limit?: number
  }

  /**
   * ModelEvaluation updateManyAndReturn
   */
  export type ModelEvaluationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelEvaluation
     */
    select?: ModelEvaluationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModelEvaluation
     */
    omit?: ModelEvaluationOmit<ExtArgs> | null
    /**
     * The data used to update ModelEvaluations.
     */
    data: XOR<ModelEvaluationUpdateManyMutationInput, ModelEvaluationUncheckedUpdateManyInput>
    /**
     * Filter which ModelEvaluations to update
     */
    where?: ModelEvaluationWhereInput
    /**
     * Limit how many ModelEvaluations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelEvaluationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ModelEvaluation upsert
   */
  export type ModelEvaluationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelEvaluation
     */
    select?: ModelEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelEvaluation
     */
    omit?: ModelEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelEvaluationInclude<ExtArgs> | null
    /**
     * The filter to search for the ModelEvaluation to update in case it exists.
     */
    where: ModelEvaluationWhereUniqueInput
    /**
     * In case the ModelEvaluation found by the `where` argument doesn't exist, create a new ModelEvaluation with this data.
     */
    create: XOR<ModelEvaluationCreateInput, ModelEvaluationUncheckedCreateInput>
    /**
     * In case the ModelEvaluation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModelEvaluationUpdateInput, ModelEvaluationUncheckedUpdateInput>
  }

  /**
   * ModelEvaluation delete
   */
  export type ModelEvaluationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelEvaluation
     */
    select?: ModelEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelEvaluation
     */
    omit?: ModelEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelEvaluationInclude<ExtArgs> | null
    /**
     * Filter which ModelEvaluation to delete.
     */
    where: ModelEvaluationWhereUniqueInput
  }

  /**
   * ModelEvaluation deleteMany
   */
  export type ModelEvaluationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModelEvaluations to delete
     */
    where?: ModelEvaluationWhereInput
    /**
     * Limit how many ModelEvaluations to delete.
     */
    limit?: number
  }

  /**
   * ModelEvaluation without action
   */
  export type ModelEvaluationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelEvaluation
     */
    select?: ModelEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelEvaluation
     */
    omit?: ModelEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelEvaluationInclude<ExtArgs> | null
  }


  /**
   * Model QuizSession
   */

  export type AggregateQuizSession = {
    _count: QuizSessionCountAggregateOutputType | null
    _avg: QuizSessionAvgAggregateOutputType | null
    _sum: QuizSessionSumAggregateOutputType | null
    _min: QuizSessionMinAggregateOutputType | null
    _max: QuizSessionMaxAggregateOutputType | null
  }

  export type QuizSessionAvgAggregateOutputType = {
    id: number | null
    classId: number | null
    teacherId: number | null
  }

  export type QuizSessionSumAggregateOutputType = {
    id: number | null
    classId: number | null
    teacherId: number | null
  }

  export type QuizSessionMinAggregateOutputType = {
    id: number | null
    classId: number | null
    teacherId: number | null
    startTime: Date | null
    endTime: Date | null
    status: $Enums.QuizStatus | null
  }

  export type QuizSessionMaxAggregateOutputType = {
    id: number | null
    classId: number | null
    teacherId: number | null
    startTime: Date | null
    endTime: Date | null
    status: $Enums.QuizStatus | null
  }

  export type QuizSessionCountAggregateOutputType = {
    id: number
    classId: number
    teacherId: number
    startTime: number
    endTime: number
    status: number
    settings: number
    _all: number
  }


  export type QuizSessionAvgAggregateInputType = {
    id?: true
    classId?: true
    teacherId?: true
  }

  export type QuizSessionSumAggregateInputType = {
    id?: true
    classId?: true
    teacherId?: true
  }

  export type QuizSessionMinAggregateInputType = {
    id?: true
    classId?: true
    teacherId?: true
    startTime?: true
    endTime?: true
    status?: true
  }

  export type QuizSessionMaxAggregateInputType = {
    id?: true
    classId?: true
    teacherId?: true
    startTime?: true
    endTime?: true
    status?: true
  }

  export type QuizSessionCountAggregateInputType = {
    id?: true
    classId?: true
    teacherId?: true
    startTime?: true
    endTime?: true
    status?: true
    settings?: true
    _all?: true
  }

  export type QuizSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizSession to aggregate.
     */
    where?: QuizSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizSessions to fetch.
     */
    orderBy?: QuizSessionOrderByWithRelationInput | QuizSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizSessions
    **/
    _count?: true | QuizSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizSessionMaxAggregateInputType
  }

  export type GetQuizSessionAggregateType<T extends QuizSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizSession[P]>
      : GetScalarType<T[P], AggregateQuizSession[P]>
  }




  export type QuizSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizSessionWhereInput
    orderBy?: QuizSessionOrderByWithAggregationInput | QuizSessionOrderByWithAggregationInput[]
    by: QuizSessionScalarFieldEnum[] | QuizSessionScalarFieldEnum
    having?: QuizSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizSessionCountAggregateInputType | true
    _avg?: QuizSessionAvgAggregateInputType
    _sum?: QuizSessionSumAggregateInputType
    _min?: QuizSessionMinAggregateInputType
    _max?: QuizSessionMaxAggregateInputType
  }

  export type QuizSessionGroupByOutputType = {
    id: number
    classId: number
    teacherId: number
    startTime: Date
    endTime: Date | null
    status: $Enums.QuizStatus
    settings: JsonValue | null
    _count: QuizSessionCountAggregateOutputType | null
    _avg: QuizSessionAvgAggregateOutputType | null
    _sum: QuizSessionSumAggregateOutputType | null
    _min: QuizSessionMinAggregateOutputType | null
    _max: QuizSessionMaxAggregateOutputType | null
  }

  type GetQuizSessionGroupByPayload<T extends QuizSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizSessionGroupByOutputType[P]>
            : GetScalarType<T[P], QuizSessionGroupByOutputType[P]>
        }
      >
    >


  export type QuizSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    teacherId?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    settings?: boolean
    attempts?: boolean | QuizSession$attemptsArgs<ExtArgs>
    quizCodes?: boolean | QuizSession$quizCodesArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    _count?: boolean | QuizSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizSession"]>

  export type QuizSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    teacherId?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    settings?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizSession"]>

  export type QuizSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    teacherId?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    settings?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizSession"]>

  export type QuizSessionSelectScalar = {
    id?: boolean
    classId?: boolean
    teacherId?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    settings?: boolean
  }

  export type QuizSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "classId" | "teacherId" | "startTime" | "endTime" | "status" | "settings", ExtArgs["result"]["quizSession"]>
  export type QuizSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attempts?: boolean | QuizSession$attemptsArgs<ExtArgs>
    quizCodes?: boolean | QuizSession$quizCodesArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    _count?: boolean | QuizSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuizSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }
  export type QuizSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }

  export type $QuizSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizSession"
    objects: {
      attempts: Prisma.$QuizAttemptPayload<ExtArgs>[]
      quizCodes: Prisma.$QuizCodePayload<ExtArgs>[]
      class: Prisma.$ClassPayload<ExtArgs>
      teacher: Prisma.$TeacherPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      classId: number
      teacherId: number
      startTime: Date
      endTime: Date | null
      status: $Enums.QuizStatus
      settings: Prisma.JsonValue | null
    }, ExtArgs["result"]["quizSession"]>
    composites: {}
  }

  type QuizSessionGetPayload<S extends boolean | null | undefined | QuizSessionDefaultArgs> = $Result.GetResult<Prisma.$QuizSessionPayload, S>

  type QuizSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizSessionCountAggregateInputType | true
    }

  export interface QuizSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizSession'], meta: { name: 'QuizSession' } }
    /**
     * Find zero or one QuizSession that matches the filter.
     * @param {QuizSessionFindUniqueArgs} args - Arguments to find a QuizSession
     * @example
     * // Get one QuizSession
     * const quizSession = await prisma.quizSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizSessionFindUniqueArgs>(args: SelectSubset<T, QuizSessionFindUniqueArgs<ExtArgs>>): Prisma__QuizSessionClient<$Result.GetResult<Prisma.$QuizSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuizSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizSessionFindUniqueOrThrowArgs} args - Arguments to find a QuizSession
     * @example
     * // Get one QuizSession
     * const quizSession = await prisma.quizSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizSessionClient<$Result.GetResult<Prisma.$QuizSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSessionFindFirstArgs} args - Arguments to find a QuizSession
     * @example
     * // Get one QuizSession
     * const quizSession = await prisma.quizSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizSessionFindFirstArgs>(args?: SelectSubset<T, QuizSessionFindFirstArgs<ExtArgs>>): Prisma__QuizSessionClient<$Result.GetResult<Prisma.$QuizSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSessionFindFirstOrThrowArgs} args - Arguments to find a QuizSession
     * @example
     * // Get one QuizSession
     * const quizSession = await prisma.quizSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizSessionClient<$Result.GetResult<Prisma.$QuizSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizSessions
     * const quizSessions = await prisma.quizSession.findMany()
     * 
     * // Get first 10 QuizSessions
     * const quizSessions = await prisma.quizSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizSessionWithIdOnly = await prisma.quizSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizSessionFindManyArgs>(args?: SelectSubset<T, QuizSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuizSession.
     * @param {QuizSessionCreateArgs} args - Arguments to create a QuizSession.
     * @example
     * // Create one QuizSession
     * const QuizSession = await prisma.quizSession.create({
     *   data: {
     *     // ... data to create a QuizSession
     *   }
     * })
     * 
     */
    create<T extends QuizSessionCreateArgs>(args: SelectSubset<T, QuizSessionCreateArgs<ExtArgs>>): Prisma__QuizSessionClient<$Result.GetResult<Prisma.$QuizSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuizSessions.
     * @param {QuizSessionCreateManyArgs} args - Arguments to create many QuizSessions.
     * @example
     * // Create many QuizSessions
     * const quizSession = await prisma.quizSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizSessionCreateManyArgs>(args?: SelectSubset<T, QuizSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuizSessions and returns the data saved in the database.
     * @param {QuizSessionCreateManyAndReturnArgs} args - Arguments to create many QuizSessions.
     * @example
     * // Create many QuizSessions
     * const quizSession = await prisma.quizSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuizSessions and only return the `id`
     * const quizSessionWithIdOnly = await prisma.quizSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuizSession.
     * @param {QuizSessionDeleteArgs} args - Arguments to delete one QuizSession.
     * @example
     * // Delete one QuizSession
     * const QuizSession = await prisma.quizSession.delete({
     *   where: {
     *     // ... filter to delete one QuizSession
     *   }
     * })
     * 
     */
    delete<T extends QuizSessionDeleteArgs>(args: SelectSubset<T, QuizSessionDeleteArgs<ExtArgs>>): Prisma__QuizSessionClient<$Result.GetResult<Prisma.$QuizSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuizSession.
     * @param {QuizSessionUpdateArgs} args - Arguments to update one QuizSession.
     * @example
     * // Update one QuizSession
     * const quizSession = await prisma.quizSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizSessionUpdateArgs>(args: SelectSubset<T, QuizSessionUpdateArgs<ExtArgs>>): Prisma__QuizSessionClient<$Result.GetResult<Prisma.$QuizSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuizSessions.
     * @param {QuizSessionDeleteManyArgs} args - Arguments to filter QuizSessions to delete.
     * @example
     * // Delete a few QuizSessions
     * const { count } = await prisma.quizSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizSessionDeleteManyArgs>(args?: SelectSubset<T, QuizSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizSessions
     * const quizSession = await prisma.quizSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizSessionUpdateManyArgs>(args: SelectSubset<T, QuizSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizSessions and returns the data updated in the database.
     * @param {QuizSessionUpdateManyAndReturnArgs} args - Arguments to update many QuizSessions.
     * @example
     * // Update many QuizSessions
     * const quizSession = await prisma.quizSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuizSessions and only return the `id`
     * const quizSessionWithIdOnly = await prisma.quizSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuizSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuizSession.
     * @param {QuizSessionUpsertArgs} args - Arguments to update or create a QuizSession.
     * @example
     * // Update or create a QuizSession
     * const quizSession = await prisma.quizSession.upsert({
     *   create: {
     *     // ... data to create a QuizSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizSession we want to update
     *   }
     * })
     */
    upsert<T extends QuizSessionUpsertArgs>(args: SelectSubset<T, QuizSessionUpsertArgs<ExtArgs>>): Prisma__QuizSessionClient<$Result.GetResult<Prisma.$QuizSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuizSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSessionCountArgs} args - Arguments to filter QuizSessions to count.
     * @example
     * // Count the number of QuizSessions
     * const count = await prisma.quizSession.count({
     *   where: {
     *     // ... the filter for the QuizSessions we want to count
     *   }
     * })
    **/
    count<T extends QuizSessionCountArgs>(
      args?: Subset<T, QuizSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizSessionAggregateArgs>(args: Subset<T, QuizSessionAggregateArgs>): Prisma.PrismaPromise<GetQuizSessionAggregateType<T>>

    /**
     * Group by QuizSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSessionGroupByArgs} args - Group by arguments.
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
      T extends QuizSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizSessionGroupByArgs['orderBy'] }
        : { orderBy?: QuizSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, QuizSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizSession model
   */
  readonly fields: QuizSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attempts<T extends QuizSession$attemptsArgs<ExtArgs> = {}>(args?: Subset<T, QuizSession$attemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quizCodes<T extends QuizSession$quizCodesArgs<ExtArgs> = {}>(args?: Subset<T, QuizSession$quizCodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teacher<T extends TeacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeacherDefaultArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuizSession model
   */
  interface QuizSessionFieldRefs {
    readonly id: FieldRef<"QuizSession", 'Int'>
    readonly classId: FieldRef<"QuizSession", 'Int'>
    readonly teacherId: FieldRef<"QuizSession", 'Int'>
    readonly startTime: FieldRef<"QuizSession", 'DateTime'>
    readonly endTime: FieldRef<"QuizSession", 'DateTime'>
    readonly status: FieldRef<"QuizSession", 'QuizStatus'>
    readonly settings: FieldRef<"QuizSession", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * QuizSession findUnique
   */
  export type QuizSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSession
     */
    select?: QuizSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSession
     */
    omit?: QuizSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSessionInclude<ExtArgs> | null
    /**
     * Filter, which QuizSession to fetch.
     */
    where: QuizSessionWhereUniqueInput
  }

  /**
   * QuizSession findUniqueOrThrow
   */
  export type QuizSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSession
     */
    select?: QuizSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSession
     */
    omit?: QuizSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSessionInclude<ExtArgs> | null
    /**
     * Filter, which QuizSession to fetch.
     */
    where: QuizSessionWhereUniqueInput
  }

  /**
   * QuizSession findFirst
   */
  export type QuizSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSession
     */
    select?: QuizSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSession
     */
    omit?: QuizSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSessionInclude<ExtArgs> | null
    /**
     * Filter, which QuizSession to fetch.
     */
    where?: QuizSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizSessions to fetch.
     */
    orderBy?: QuizSessionOrderByWithRelationInput | QuizSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizSessions.
     */
    cursor?: QuizSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizSessions.
     */
    distinct?: QuizSessionScalarFieldEnum | QuizSessionScalarFieldEnum[]
  }

  /**
   * QuizSession findFirstOrThrow
   */
  export type QuizSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSession
     */
    select?: QuizSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSession
     */
    omit?: QuizSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSessionInclude<ExtArgs> | null
    /**
     * Filter, which QuizSession to fetch.
     */
    where?: QuizSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizSessions to fetch.
     */
    orderBy?: QuizSessionOrderByWithRelationInput | QuizSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizSessions.
     */
    cursor?: QuizSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizSessions.
     */
    distinct?: QuizSessionScalarFieldEnum | QuizSessionScalarFieldEnum[]
  }

  /**
   * QuizSession findMany
   */
  export type QuizSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSession
     */
    select?: QuizSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSession
     */
    omit?: QuizSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSessionInclude<ExtArgs> | null
    /**
     * Filter, which QuizSessions to fetch.
     */
    where?: QuizSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizSessions to fetch.
     */
    orderBy?: QuizSessionOrderByWithRelationInput | QuizSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizSessions.
     */
    cursor?: QuizSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizSessions.
     */
    skip?: number
    distinct?: QuizSessionScalarFieldEnum | QuizSessionScalarFieldEnum[]
  }

  /**
   * QuizSession create
   */
  export type QuizSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSession
     */
    select?: QuizSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSession
     */
    omit?: QuizSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a QuizSession.
     */
    data: XOR<QuizSessionCreateInput, QuizSessionUncheckedCreateInput>
  }

  /**
   * QuizSession createMany
   */
  export type QuizSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizSessions.
     */
    data: QuizSessionCreateManyInput | QuizSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuizSession createManyAndReturn
   */
  export type QuizSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSession
     */
    select?: QuizSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSession
     */
    omit?: QuizSessionOmit<ExtArgs> | null
    /**
     * The data used to create many QuizSessions.
     */
    data: QuizSessionCreateManyInput | QuizSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizSession update
   */
  export type QuizSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSession
     */
    select?: QuizSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSession
     */
    omit?: QuizSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a QuizSession.
     */
    data: XOR<QuizSessionUpdateInput, QuizSessionUncheckedUpdateInput>
    /**
     * Choose, which QuizSession to update.
     */
    where: QuizSessionWhereUniqueInput
  }

  /**
   * QuizSession updateMany
   */
  export type QuizSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizSessions.
     */
    data: XOR<QuizSessionUpdateManyMutationInput, QuizSessionUncheckedUpdateManyInput>
    /**
     * Filter which QuizSessions to update
     */
    where?: QuizSessionWhereInput
    /**
     * Limit how many QuizSessions to update.
     */
    limit?: number
  }

  /**
   * QuizSession updateManyAndReturn
   */
  export type QuizSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSession
     */
    select?: QuizSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSession
     */
    omit?: QuizSessionOmit<ExtArgs> | null
    /**
     * The data used to update QuizSessions.
     */
    data: XOR<QuizSessionUpdateManyMutationInput, QuizSessionUncheckedUpdateManyInput>
    /**
     * Filter which QuizSessions to update
     */
    where?: QuizSessionWhereInput
    /**
     * Limit how many QuizSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizSession upsert
   */
  export type QuizSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSession
     */
    select?: QuizSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSession
     */
    omit?: QuizSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the QuizSession to update in case it exists.
     */
    where: QuizSessionWhereUniqueInput
    /**
     * In case the QuizSession found by the `where` argument doesn't exist, create a new QuizSession with this data.
     */
    create: XOR<QuizSessionCreateInput, QuizSessionUncheckedCreateInput>
    /**
     * In case the QuizSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizSessionUpdateInput, QuizSessionUncheckedUpdateInput>
  }

  /**
   * QuizSession delete
   */
  export type QuizSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSession
     */
    select?: QuizSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSession
     */
    omit?: QuizSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSessionInclude<ExtArgs> | null
    /**
     * Filter which QuizSession to delete.
     */
    where: QuizSessionWhereUniqueInput
  }

  /**
   * QuizSession deleteMany
   */
  export type QuizSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizSessions to delete
     */
    where?: QuizSessionWhereInput
    /**
     * Limit how many QuizSessions to delete.
     */
    limit?: number
  }

  /**
   * QuizSession.attempts
   */
  export type QuizSession$attemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    where?: QuizAttemptWhereInput
    orderBy?: QuizAttemptOrderByWithRelationInput | QuizAttemptOrderByWithRelationInput[]
    cursor?: QuizAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizAttemptScalarFieldEnum | QuizAttemptScalarFieldEnum[]
  }

  /**
   * QuizSession.quizCodes
   */
  export type QuizSession$quizCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCode
     */
    select?: QuizCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCode
     */
    omit?: QuizCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizCodeInclude<ExtArgs> | null
    where?: QuizCodeWhereInput
    orderBy?: QuizCodeOrderByWithRelationInput | QuizCodeOrderByWithRelationInput[]
    cursor?: QuizCodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizCodeScalarFieldEnum | QuizCodeScalarFieldEnum[]
  }

  /**
   * QuizSession without action
   */
  export type QuizSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSession
     */
    select?: QuizSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSession
     */
    omit?: QuizSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSessionInclude<ExtArgs> | null
  }


  /**
   * Model QuizCode
   */

  export type AggregateQuizCode = {
    _count: QuizCodeCountAggregateOutputType | null
    _avg: QuizCodeAvgAggregateOutputType | null
    _sum: QuizCodeSumAggregateOutputType | null
    _min: QuizCodeMinAggregateOutputType | null
    _max: QuizCodeMaxAggregateOutputType | null
  }

  export type QuizCodeAvgAggregateOutputType = {
    sessionId: number | null
    studentId: number | null
  }

  export type QuizCodeSumAggregateOutputType = {
    sessionId: number | null
    studentId: number | null
  }

  export type QuizCodeMinAggregateOutputType = {
    code: string | null
    sessionId: number | null
    studentId: number | null
    createdAt: Date | null
  }

  export type QuizCodeMaxAggregateOutputType = {
    code: string | null
    sessionId: number | null
    studentId: number | null
    createdAt: Date | null
  }

  export type QuizCodeCountAggregateOutputType = {
    code: number
    sessionId: number
    studentId: number
    createdAt: number
    _all: number
  }


  export type QuizCodeAvgAggregateInputType = {
    sessionId?: true
    studentId?: true
  }

  export type QuizCodeSumAggregateInputType = {
    sessionId?: true
    studentId?: true
  }

  export type QuizCodeMinAggregateInputType = {
    code?: true
    sessionId?: true
    studentId?: true
    createdAt?: true
  }

  export type QuizCodeMaxAggregateInputType = {
    code?: true
    sessionId?: true
    studentId?: true
    createdAt?: true
  }

  export type QuizCodeCountAggregateInputType = {
    code?: true
    sessionId?: true
    studentId?: true
    createdAt?: true
    _all?: true
  }

  export type QuizCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizCode to aggregate.
     */
    where?: QuizCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizCodes to fetch.
     */
    orderBy?: QuizCodeOrderByWithRelationInput | QuizCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizCodes
    **/
    _count?: true | QuizCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizCodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizCodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizCodeMaxAggregateInputType
  }

  export type GetQuizCodeAggregateType<T extends QuizCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizCode[P]>
      : GetScalarType<T[P], AggregateQuizCode[P]>
  }




  export type QuizCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizCodeWhereInput
    orderBy?: QuizCodeOrderByWithAggregationInput | QuizCodeOrderByWithAggregationInput[]
    by: QuizCodeScalarFieldEnum[] | QuizCodeScalarFieldEnum
    having?: QuizCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizCodeCountAggregateInputType | true
    _avg?: QuizCodeAvgAggregateInputType
    _sum?: QuizCodeSumAggregateInputType
    _min?: QuizCodeMinAggregateInputType
    _max?: QuizCodeMaxAggregateInputType
  }

  export type QuizCodeGroupByOutputType = {
    code: string
    sessionId: number
    studentId: number
    createdAt: Date
    _count: QuizCodeCountAggregateOutputType | null
    _avg: QuizCodeAvgAggregateOutputType | null
    _sum: QuizCodeSumAggregateOutputType | null
    _min: QuizCodeMinAggregateOutputType | null
    _max: QuizCodeMaxAggregateOutputType | null
  }

  type GetQuizCodeGroupByPayload<T extends QuizCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizCodeGroupByOutputType[P]>
            : GetScalarType<T[P], QuizCodeGroupByOutputType[P]>
        }
      >
    >


  export type QuizCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    sessionId?: boolean
    studentId?: boolean
    createdAt?: boolean
    session?: boolean | QuizSessionDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizCode"]>

  export type QuizCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    sessionId?: boolean
    studentId?: boolean
    createdAt?: boolean
    session?: boolean | QuizSessionDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizCode"]>

  export type QuizCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    sessionId?: boolean
    studentId?: boolean
    createdAt?: boolean
    session?: boolean | QuizSessionDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizCode"]>

  export type QuizCodeSelectScalar = {
    code?: boolean
    sessionId?: boolean
    studentId?: boolean
    createdAt?: boolean
  }

  export type QuizCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"code" | "sessionId" | "studentId" | "createdAt", ExtArgs["result"]["quizCode"]>
  export type QuizCodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | QuizSessionDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type QuizCodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | QuizSessionDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type QuizCodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | QuizSessionDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $QuizCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizCode"
    objects: {
      session: Prisma.$QuizSessionPayload<ExtArgs>
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      code: string
      sessionId: number
      studentId: number
      createdAt: Date
    }, ExtArgs["result"]["quizCode"]>
    composites: {}
  }

  type QuizCodeGetPayload<S extends boolean | null | undefined | QuizCodeDefaultArgs> = $Result.GetResult<Prisma.$QuizCodePayload, S>

  type QuizCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizCodeCountAggregateInputType | true
    }

  export interface QuizCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizCode'], meta: { name: 'QuizCode' } }
    /**
     * Find zero or one QuizCode that matches the filter.
     * @param {QuizCodeFindUniqueArgs} args - Arguments to find a QuizCode
     * @example
     * // Get one QuizCode
     * const quizCode = await prisma.quizCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizCodeFindUniqueArgs>(args: SelectSubset<T, QuizCodeFindUniqueArgs<ExtArgs>>): Prisma__QuizCodeClient<$Result.GetResult<Prisma.$QuizCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuizCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizCodeFindUniqueOrThrowArgs} args - Arguments to find a QuizCode
     * @example
     * // Get one QuizCode
     * const quizCode = await prisma.quizCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizCodeClient<$Result.GetResult<Prisma.$QuizCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCodeFindFirstArgs} args - Arguments to find a QuizCode
     * @example
     * // Get one QuizCode
     * const quizCode = await prisma.quizCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizCodeFindFirstArgs>(args?: SelectSubset<T, QuizCodeFindFirstArgs<ExtArgs>>): Prisma__QuizCodeClient<$Result.GetResult<Prisma.$QuizCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCodeFindFirstOrThrowArgs} args - Arguments to find a QuizCode
     * @example
     * // Get one QuizCode
     * const quizCode = await prisma.quizCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizCodeClient<$Result.GetResult<Prisma.$QuizCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizCodes
     * const quizCodes = await prisma.quizCode.findMany()
     * 
     * // Get first 10 QuizCodes
     * const quizCodes = await prisma.quizCode.findMany({ take: 10 })
     * 
     * // Only select the `code`
     * const quizCodeWithCodeOnly = await prisma.quizCode.findMany({ select: { code: true } })
     * 
     */
    findMany<T extends QuizCodeFindManyArgs>(args?: SelectSubset<T, QuizCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuizCode.
     * @param {QuizCodeCreateArgs} args - Arguments to create a QuizCode.
     * @example
     * // Create one QuizCode
     * const QuizCode = await prisma.quizCode.create({
     *   data: {
     *     // ... data to create a QuizCode
     *   }
     * })
     * 
     */
    create<T extends QuizCodeCreateArgs>(args: SelectSubset<T, QuizCodeCreateArgs<ExtArgs>>): Prisma__QuizCodeClient<$Result.GetResult<Prisma.$QuizCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuizCodes.
     * @param {QuizCodeCreateManyArgs} args - Arguments to create many QuizCodes.
     * @example
     * // Create many QuizCodes
     * const quizCode = await prisma.quizCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizCodeCreateManyArgs>(args?: SelectSubset<T, QuizCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuizCodes and returns the data saved in the database.
     * @param {QuizCodeCreateManyAndReturnArgs} args - Arguments to create many QuizCodes.
     * @example
     * // Create many QuizCodes
     * const quizCode = await prisma.quizCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuizCodes and only return the `code`
     * const quizCodeWithCodeOnly = await prisma.quizCode.createManyAndReturn({
     *   select: { code: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuizCode.
     * @param {QuizCodeDeleteArgs} args - Arguments to delete one QuizCode.
     * @example
     * // Delete one QuizCode
     * const QuizCode = await prisma.quizCode.delete({
     *   where: {
     *     // ... filter to delete one QuizCode
     *   }
     * })
     * 
     */
    delete<T extends QuizCodeDeleteArgs>(args: SelectSubset<T, QuizCodeDeleteArgs<ExtArgs>>): Prisma__QuizCodeClient<$Result.GetResult<Prisma.$QuizCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuizCode.
     * @param {QuizCodeUpdateArgs} args - Arguments to update one QuizCode.
     * @example
     * // Update one QuizCode
     * const quizCode = await prisma.quizCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizCodeUpdateArgs>(args: SelectSubset<T, QuizCodeUpdateArgs<ExtArgs>>): Prisma__QuizCodeClient<$Result.GetResult<Prisma.$QuizCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuizCodes.
     * @param {QuizCodeDeleteManyArgs} args - Arguments to filter QuizCodes to delete.
     * @example
     * // Delete a few QuizCodes
     * const { count } = await prisma.quizCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizCodeDeleteManyArgs>(args?: SelectSubset<T, QuizCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizCodes
     * const quizCode = await prisma.quizCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizCodeUpdateManyArgs>(args: SelectSubset<T, QuizCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizCodes and returns the data updated in the database.
     * @param {QuizCodeUpdateManyAndReturnArgs} args - Arguments to update many QuizCodes.
     * @example
     * // Update many QuizCodes
     * const quizCode = await prisma.quizCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuizCodes and only return the `code`
     * const quizCodeWithCodeOnly = await prisma.quizCode.updateManyAndReturn({
     *   select: { code: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuizCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuizCode.
     * @param {QuizCodeUpsertArgs} args - Arguments to update or create a QuizCode.
     * @example
     * // Update or create a QuizCode
     * const quizCode = await prisma.quizCode.upsert({
     *   create: {
     *     // ... data to create a QuizCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizCode we want to update
     *   }
     * })
     */
    upsert<T extends QuizCodeUpsertArgs>(args: SelectSubset<T, QuizCodeUpsertArgs<ExtArgs>>): Prisma__QuizCodeClient<$Result.GetResult<Prisma.$QuizCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuizCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCodeCountArgs} args - Arguments to filter QuizCodes to count.
     * @example
     * // Count the number of QuizCodes
     * const count = await prisma.quizCode.count({
     *   where: {
     *     // ... the filter for the QuizCodes we want to count
     *   }
     * })
    **/
    count<T extends QuizCodeCountArgs>(
      args?: Subset<T, QuizCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizCodeAggregateArgs>(args: Subset<T, QuizCodeAggregateArgs>): Prisma.PrismaPromise<GetQuizCodeAggregateType<T>>

    /**
     * Group by QuizCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCodeGroupByArgs} args - Group by arguments.
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
      T extends QuizCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizCodeGroupByArgs['orderBy'] }
        : { orderBy?: QuizCodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, QuizCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizCode model
   */
  readonly fields: QuizCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends QuizSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizSessionDefaultArgs<ExtArgs>>): Prisma__QuizSessionClient<$Result.GetResult<Prisma.$QuizSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuizCode model
   */
  interface QuizCodeFieldRefs {
    readonly code: FieldRef<"QuizCode", 'String'>
    readonly sessionId: FieldRef<"QuizCode", 'Int'>
    readonly studentId: FieldRef<"QuizCode", 'Int'>
    readonly createdAt: FieldRef<"QuizCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuizCode findUnique
   */
  export type QuizCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCode
     */
    select?: QuizCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCode
     */
    omit?: QuizCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizCodeInclude<ExtArgs> | null
    /**
     * Filter, which QuizCode to fetch.
     */
    where: QuizCodeWhereUniqueInput
  }

  /**
   * QuizCode findUniqueOrThrow
   */
  export type QuizCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCode
     */
    select?: QuizCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCode
     */
    omit?: QuizCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizCodeInclude<ExtArgs> | null
    /**
     * Filter, which QuizCode to fetch.
     */
    where: QuizCodeWhereUniqueInput
  }

  /**
   * QuizCode findFirst
   */
  export type QuizCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCode
     */
    select?: QuizCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCode
     */
    omit?: QuizCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizCodeInclude<ExtArgs> | null
    /**
     * Filter, which QuizCode to fetch.
     */
    where?: QuizCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizCodes to fetch.
     */
    orderBy?: QuizCodeOrderByWithRelationInput | QuizCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizCodes.
     */
    cursor?: QuizCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizCodes.
     */
    distinct?: QuizCodeScalarFieldEnum | QuizCodeScalarFieldEnum[]
  }

  /**
   * QuizCode findFirstOrThrow
   */
  export type QuizCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCode
     */
    select?: QuizCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCode
     */
    omit?: QuizCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizCodeInclude<ExtArgs> | null
    /**
     * Filter, which QuizCode to fetch.
     */
    where?: QuizCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizCodes to fetch.
     */
    orderBy?: QuizCodeOrderByWithRelationInput | QuizCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizCodes.
     */
    cursor?: QuizCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizCodes.
     */
    distinct?: QuizCodeScalarFieldEnum | QuizCodeScalarFieldEnum[]
  }

  /**
   * QuizCode findMany
   */
  export type QuizCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCode
     */
    select?: QuizCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCode
     */
    omit?: QuizCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizCodeInclude<ExtArgs> | null
    /**
     * Filter, which QuizCodes to fetch.
     */
    where?: QuizCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizCodes to fetch.
     */
    orderBy?: QuizCodeOrderByWithRelationInput | QuizCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizCodes.
     */
    cursor?: QuizCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizCodes.
     */
    skip?: number
    distinct?: QuizCodeScalarFieldEnum | QuizCodeScalarFieldEnum[]
  }

  /**
   * QuizCode create
   */
  export type QuizCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCode
     */
    select?: QuizCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCode
     */
    omit?: QuizCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizCodeInclude<ExtArgs> | null
    /**
     * The data needed to create a QuizCode.
     */
    data: XOR<QuizCodeCreateInput, QuizCodeUncheckedCreateInput>
  }

  /**
   * QuizCode createMany
   */
  export type QuizCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizCodes.
     */
    data: QuizCodeCreateManyInput | QuizCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuizCode createManyAndReturn
   */
  export type QuizCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCode
     */
    select?: QuizCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCode
     */
    omit?: QuizCodeOmit<ExtArgs> | null
    /**
     * The data used to create many QuizCodes.
     */
    data: QuizCodeCreateManyInput | QuizCodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizCodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizCode update
   */
  export type QuizCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCode
     */
    select?: QuizCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCode
     */
    omit?: QuizCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizCodeInclude<ExtArgs> | null
    /**
     * The data needed to update a QuizCode.
     */
    data: XOR<QuizCodeUpdateInput, QuizCodeUncheckedUpdateInput>
    /**
     * Choose, which QuizCode to update.
     */
    where: QuizCodeWhereUniqueInput
  }

  /**
   * QuizCode updateMany
   */
  export type QuizCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizCodes.
     */
    data: XOR<QuizCodeUpdateManyMutationInput, QuizCodeUncheckedUpdateManyInput>
    /**
     * Filter which QuizCodes to update
     */
    where?: QuizCodeWhereInput
    /**
     * Limit how many QuizCodes to update.
     */
    limit?: number
  }

  /**
   * QuizCode updateManyAndReturn
   */
  export type QuizCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCode
     */
    select?: QuizCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCode
     */
    omit?: QuizCodeOmit<ExtArgs> | null
    /**
     * The data used to update QuizCodes.
     */
    data: XOR<QuizCodeUpdateManyMutationInput, QuizCodeUncheckedUpdateManyInput>
    /**
     * Filter which QuizCodes to update
     */
    where?: QuizCodeWhereInput
    /**
     * Limit how many QuizCodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizCodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizCode upsert
   */
  export type QuizCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCode
     */
    select?: QuizCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCode
     */
    omit?: QuizCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizCodeInclude<ExtArgs> | null
    /**
     * The filter to search for the QuizCode to update in case it exists.
     */
    where: QuizCodeWhereUniqueInput
    /**
     * In case the QuizCode found by the `where` argument doesn't exist, create a new QuizCode with this data.
     */
    create: XOR<QuizCodeCreateInput, QuizCodeUncheckedCreateInput>
    /**
     * In case the QuizCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizCodeUpdateInput, QuizCodeUncheckedUpdateInput>
  }

  /**
   * QuizCode delete
   */
  export type QuizCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCode
     */
    select?: QuizCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCode
     */
    omit?: QuizCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizCodeInclude<ExtArgs> | null
    /**
     * Filter which QuizCode to delete.
     */
    where: QuizCodeWhereUniqueInput
  }

  /**
   * QuizCode deleteMany
   */
  export type QuizCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizCodes to delete
     */
    where?: QuizCodeWhereInput
    /**
     * Limit how many QuizCodes to delete.
     */
    limit?: number
  }

  /**
   * QuizCode without action
   */
  export type QuizCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCode
     */
    select?: QuizCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCode
     */
    omit?: QuizCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizCodeInclude<ExtArgs> | null
  }


  /**
   * Model QuizAttempt
   */

  export type AggregateQuizAttempt = {
    _count: QuizAttemptCountAggregateOutputType | null
    _avg: QuizAttemptAvgAggregateOutputType | null
    _sum: QuizAttemptSumAggregateOutputType | null
    _min: QuizAttemptMinAggregateOutputType | null
    _max: QuizAttemptMaxAggregateOutputType | null
  }

  export type QuizAttemptAvgAggregateOutputType = {
    id: number | null
    sessionId: number | null
    studentId: number | null
  }

  export type QuizAttemptSumAggregateOutputType = {
    id: number | null
    sessionId: number | null
    studentId: number | null
  }

  export type QuizAttemptMinAggregateOutputType = {
    id: number | null
    sessionId: number | null
    studentId: number | null
    startTime: Date | null
    endTime: Date | null
  }

  export type QuizAttemptMaxAggregateOutputType = {
    id: number | null
    sessionId: number | null
    studentId: number | null
    startTime: Date | null
    endTime: Date | null
  }

  export type QuizAttemptCountAggregateOutputType = {
    id: number
    sessionId: number
    studentId: number
    startTime: number
    endTime: number
    _all: number
  }


  export type QuizAttemptAvgAggregateInputType = {
    id?: true
    sessionId?: true
    studentId?: true
  }

  export type QuizAttemptSumAggregateInputType = {
    id?: true
    sessionId?: true
    studentId?: true
  }

  export type QuizAttemptMinAggregateInputType = {
    id?: true
    sessionId?: true
    studentId?: true
    startTime?: true
    endTime?: true
  }

  export type QuizAttemptMaxAggregateInputType = {
    id?: true
    sessionId?: true
    studentId?: true
    startTime?: true
    endTime?: true
  }

  export type QuizAttemptCountAggregateInputType = {
    id?: true
    sessionId?: true
    studentId?: true
    startTime?: true
    endTime?: true
    _all?: true
  }

  export type QuizAttemptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizAttempt to aggregate.
     */
    where?: QuizAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizAttempts to fetch.
     */
    orderBy?: QuizAttemptOrderByWithRelationInput | QuizAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizAttempts
    **/
    _count?: true | QuizAttemptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizAttemptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizAttemptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizAttemptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizAttemptMaxAggregateInputType
  }

  export type GetQuizAttemptAggregateType<T extends QuizAttemptAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizAttempt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizAttempt[P]>
      : GetScalarType<T[P], AggregateQuizAttempt[P]>
  }




  export type QuizAttemptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizAttemptWhereInput
    orderBy?: QuizAttemptOrderByWithAggregationInput | QuizAttemptOrderByWithAggregationInput[]
    by: QuizAttemptScalarFieldEnum[] | QuizAttemptScalarFieldEnum
    having?: QuizAttemptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizAttemptCountAggregateInputType | true
    _avg?: QuizAttemptAvgAggregateInputType
    _sum?: QuizAttemptSumAggregateInputType
    _min?: QuizAttemptMinAggregateInputType
    _max?: QuizAttemptMaxAggregateInputType
  }

  export type QuizAttemptGroupByOutputType = {
    id: number
    sessionId: number
    studentId: number
    startTime: Date
    endTime: Date | null
    _count: QuizAttemptCountAggregateOutputType | null
    _avg: QuizAttemptAvgAggregateOutputType | null
    _sum: QuizAttemptSumAggregateOutputType | null
    _min: QuizAttemptMinAggregateOutputType | null
    _max: QuizAttemptMaxAggregateOutputType | null
  }

  type GetQuizAttemptGroupByPayload<T extends QuizAttemptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizAttemptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizAttemptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizAttemptGroupByOutputType[P]>
            : GetScalarType<T[P], QuizAttemptGroupByOutputType[P]>
        }
      >
    >


  export type QuizAttemptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    studentId?: boolean
    startTime?: boolean
    endTime?: boolean
    responses?: boolean | QuizAttempt$responsesArgs<ExtArgs>
    session?: boolean | QuizSessionDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
    _count?: boolean | QuizAttemptCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizAttempt"]>

  export type QuizAttemptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    studentId?: boolean
    startTime?: boolean
    endTime?: boolean
    session?: boolean | QuizSessionDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizAttempt"]>

  export type QuizAttemptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    studentId?: boolean
    startTime?: boolean
    endTime?: boolean
    session?: boolean | QuizSessionDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizAttempt"]>

  export type QuizAttemptSelectScalar = {
    id?: boolean
    sessionId?: boolean
    studentId?: boolean
    startTime?: boolean
    endTime?: boolean
  }

  export type QuizAttemptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "studentId" | "startTime" | "endTime", ExtArgs["result"]["quizAttempt"]>
  export type QuizAttemptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responses?: boolean | QuizAttempt$responsesArgs<ExtArgs>
    session?: boolean | QuizSessionDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
    _count?: boolean | QuizAttemptCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuizAttemptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | QuizSessionDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type QuizAttemptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | QuizSessionDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $QuizAttemptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizAttempt"
    objects: {
      responses: Prisma.$QuizResponsePayload<ExtArgs>[]
      session: Prisma.$QuizSessionPayload<ExtArgs>
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sessionId: number
      studentId: number
      startTime: Date
      endTime: Date | null
    }, ExtArgs["result"]["quizAttempt"]>
    composites: {}
  }

  type QuizAttemptGetPayload<S extends boolean | null | undefined | QuizAttemptDefaultArgs> = $Result.GetResult<Prisma.$QuizAttemptPayload, S>

  type QuizAttemptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizAttemptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizAttemptCountAggregateInputType | true
    }

  export interface QuizAttemptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizAttempt'], meta: { name: 'QuizAttempt' } }
    /**
     * Find zero or one QuizAttempt that matches the filter.
     * @param {QuizAttemptFindUniqueArgs} args - Arguments to find a QuizAttempt
     * @example
     * // Get one QuizAttempt
     * const quizAttempt = await prisma.quizAttempt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizAttemptFindUniqueArgs>(args: SelectSubset<T, QuizAttemptFindUniqueArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuizAttempt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizAttemptFindUniqueOrThrowArgs} args - Arguments to find a QuizAttempt
     * @example
     * // Get one QuizAttempt
     * const quizAttempt = await prisma.quizAttempt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizAttemptFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizAttemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizAttempt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptFindFirstArgs} args - Arguments to find a QuizAttempt
     * @example
     * // Get one QuizAttempt
     * const quizAttempt = await prisma.quizAttempt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizAttemptFindFirstArgs>(args?: SelectSubset<T, QuizAttemptFindFirstArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizAttempt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptFindFirstOrThrowArgs} args - Arguments to find a QuizAttempt
     * @example
     * // Get one QuizAttempt
     * const quizAttempt = await prisma.quizAttempt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizAttemptFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizAttemptFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizAttempts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizAttempts
     * const quizAttempts = await prisma.quizAttempt.findMany()
     * 
     * // Get first 10 QuizAttempts
     * const quizAttempts = await prisma.quizAttempt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizAttemptWithIdOnly = await prisma.quizAttempt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizAttemptFindManyArgs>(args?: SelectSubset<T, QuizAttemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuizAttempt.
     * @param {QuizAttemptCreateArgs} args - Arguments to create a QuizAttempt.
     * @example
     * // Create one QuizAttempt
     * const QuizAttempt = await prisma.quizAttempt.create({
     *   data: {
     *     // ... data to create a QuizAttempt
     *   }
     * })
     * 
     */
    create<T extends QuizAttemptCreateArgs>(args: SelectSubset<T, QuizAttemptCreateArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuizAttempts.
     * @param {QuizAttemptCreateManyArgs} args - Arguments to create many QuizAttempts.
     * @example
     * // Create many QuizAttempts
     * const quizAttempt = await prisma.quizAttempt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizAttemptCreateManyArgs>(args?: SelectSubset<T, QuizAttemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuizAttempts and returns the data saved in the database.
     * @param {QuizAttemptCreateManyAndReturnArgs} args - Arguments to create many QuizAttempts.
     * @example
     * // Create many QuizAttempts
     * const quizAttempt = await prisma.quizAttempt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuizAttempts and only return the `id`
     * const quizAttemptWithIdOnly = await prisma.quizAttempt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizAttemptCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizAttemptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuizAttempt.
     * @param {QuizAttemptDeleteArgs} args - Arguments to delete one QuizAttempt.
     * @example
     * // Delete one QuizAttempt
     * const QuizAttempt = await prisma.quizAttempt.delete({
     *   where: {
     *     // ... filter to delete one QuizAttempt
     *   }
     * })
     * 
     */
    delete<T extends QuizAttemptDeleteArgs>(args: SelectSubset<T, QuizAttemptDeleteArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuizAttempt.
     * @param {QuizAttemptUpdateArgs} args - Arguments to update one QuizAttempt.
     * @example
     * // Update one QuizAttempt
     * const quizAttempt = await prisma.quizAttempt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizAttemptUpdateArgs>(args: SelectSubset<T, QuizAttemptUpdateArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuizAttempts.
     * @param {QuizAttemptDeleteManyArgs} args - Arguments to filter QuizAttempts to delete.
     * @example
     * // Delete a few QuizAttempts
     * const { count } = await prisma.quizAttempt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizAttemptDeleteManyArgs>(args?: SelectSubset<T, QuizAttemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizAttempts
     * const quizAttempt = await prisma.quizAttempt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizAttemptUpdateManyArgs>(args: SelectSubset<T, QuizAttemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizAttempts and returns the data updated in the database.
     * @param {QuizAttemptUpdateManyAndReturnArgs} args - Arguments to update many QuizAttempts.
     * @example
     * // Update many QuizAttempts
     * const quizAttempt = await prisma.quizAttempt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuizAttempts and only return the `id`
     * const quizAttemptWithIdOnly = await prisma.quizAttempt.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuizAttemptUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizAttemptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuizAttempt.
     * @param {QuizAttemptUpsertArgs} args - Arguments to update or create a QuizAttempt.
     * @example
     * // Update or create a QuizAttempt
     * const quizAttempt = await prisma.quizAttempt.upsert({
     *   create: {
     *     // ... data to create a QuizAttempt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizAttempt we want to update
     *   }
     * })
     */
    upsert<T extends QuizAttemptUpsertArgs>(args: SelectSubset<T, QuizAttemptUpsertArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuizAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptCountArgs} args - Arguments to filter QuizAttempts to count.
     * @example
     * // Count the number of QuizAttempts
     * const count = await prisma.quizAttempt.count({
     *   where: {
     *     // ... the filter for the QuizAttempts we want to count
     *   }
     * })
    **/
    count<T extends QuizAttemptCountArgs>(
      args?: Subset<T, QuizAttemptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizAttemptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizAttemptAggregateArgs>(args: Subset<T, QuizAttemptAggregateArgs>): Prisma.PrismaPromise<GetQuizAttemptAggregateType<T>>

    /**
     * Group by QuizAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptGroupByArgs} args - Group by arguments.
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
      T extends QuizAttemptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizAttemptGroupByArgs['orderBy'] }
        : { orderBy?: QuizAttemptGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, QuizAttemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizAttemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizAttempt model
   */
  readonly fields: QuizAttemptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizAttempt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizAttemptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    responses<T extends QuizAttempt$responsesArgs<ExtArgs> = {}>(args?: Subset<T, QuizAttempt$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    session<T extends QuizSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizSessionDefaultArgs<ExtArgs>>): Prisma__QuizSessionClient<$Result.GetResult<Prisma.$QuizSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuizAttempt model
   */
  interface QuizAttemptFieldRefs {
    readonly id: FieldRef<"QuizAttempt", 'Int'>
    readonly sessionId: FieldRef<"QuizAttempt", 'Int'>
    readonly studentId: FieldRef<"QuizAttempt", 'Int'>
    readonly startTime: FieldRef<"QuizAttempt", 'DateTime'>
    readonly endTime: FieldRef<"QuizAttempt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuizAttempt findUnique
   */
  export type QuizAttemptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * Filter, which QuizAttempt to fetch.
     */
    where: QuizAttemptWhereUniqueInput
  }

  /**
   * QuizAttempt findUniqueOrThrow
   */
  export type QuizAttemptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * Filter, which QuizAttempt to fetch.
     */
    where: QuizAttemptWhereUniqueInput
  }

  /**
   * QuizAttempt findFirst
   */
  export type QuizAttemptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * Filter, which QuizAttempt to fetch.
     */
    where?: QuizAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizAttempts to fetch.
     */
    orderBy?: QuizAttemptOrderByWithRelationInput | QuizAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizAttempts.
     */
    cursor?: QuizAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizAttempts.
     */
    distinct?: QuizAttemptScalarFieldEnum | QuizAttemptScalarFieldEnum[]
  }

  /**
   * QuizAttempt findFirstOrThrow
   */
  export type QuizAttemptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * Filter, which QuizAttempt to fetch.
     */
    where?: QuizAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizAttempts to fetch.
     */
    orderBy?: QuizAttemptOrderByWithRelationInput | QuizAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizAttempts.
     */
    cursor?: QuizAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizAttempts.
     */
    distinct?: QuizAttemptScalarFieldEnum | QuizAttemptScalarFieldEnum[]
  }

  /**
   * QuizAttempt findMany
   */
  export type QuizAttemptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * Filter, which QuizAttempts to fetch.
     */
    where?: QuizAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizAttempts to fetch.
     */
    orderBy?: QuizAttemptOrderByWithRelationInput | QuizAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizAttempts.
     */
    cursor?: QuizAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizAttempts.
     */
    skip?: number
    distinct?: QuizAttemptScalarFieldEnum | QuizAttemptScalarFieldEnum[]
  }

  /**
   * QuizAttempt create
   */
  export type QuizAttemptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * The data needed to create a QuizAttempt.
     */
    data: XOR<QuizAttemptCreateInput, QuizAttemptUncheckedCreateInput>
  }

  /**
   * QuizAttempt createMany
   */
  export type QuizAttemptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizAttempts.
     */
    data: QuizAttemptCreateManyInput | QuizAttemptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuizAttempt createManyAndReturn
   */
  export type QuizAttemptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * The data used to create many QuizAttempts.
     */
    data: QuizAttemptCreateManyInput | QuizAttemptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizAttempt update
   */
  export type QuizAttemptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * The data needed to update a QuizAttempt.
     */
    data: XOR<QuizAttemptUpdateInput, QuizAttemptUncheckedUpdateInput>
    /**
     * Choose, which QuizAttempt to update.
     */
    where: QuizAttemptWhereUniqueInput
  }

  /**
   * QuizAttempt updateMany
   */
  export type QuizAttemptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizAttempts.
     */
    data: XOR<QuizAttemptUpdateManyMutationInput, QuizAttemptUncheckedUpdateManyInput>
    /**
     * Filter which QuizAttempts to update
     */
    where?: QuizAttemptWhereInput
    /**
     * Limit how many QuizAttempts to update.
     */
    limit?: number
  }

  /**
   * QuizAttempt updateManyAndReturn
   */
  export type QuizAttemptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * The data used to update QuizAttempts.
     */
    data: XOR<QuizAttemptUpdateManyMutationInput, QuizAttemptUncheckedUpdateManyInput>
    /**
     * Filter which QuizAttempts to update
     */
    where?: QuizAttemptWhereInput
    /**
     * Limit how many QuizAttempts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizAttempt upsert
   */
  export type QuizAttemptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * The filter to search for the QuizAttempt to update in case it exists.
     */
    where: QuizAttemptWhereUniqueInput
    /**
     * In case the QuizAttempt found by the `where` argument doesn't exist, create a new QuizAttempt with this data.
     */
    create: XOR<QuizAttemptCreateInput, QuizAttemptUncheckedCreateInput>
    /**
     * In case the QuizAttempt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizAttemptUpdateInput, QuizAttemptUncheckedUpdateInput>
  }

  /**
   * QuizAttempt delete
   */
  export type QuizAttemptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * Filter which QuizAttempt to delete.
     */
    where: QuizAttemptWhereUniqueInput
  }

  /**
   * QuizAttempt deleteMany
   */
  export type QuizAttemptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizAttempts to delete
     */
    where?: QuizAttemptWhereInput
    /**
     * Limit how many QuizAttempts to delete.
     */
    limit?: number
  }

  /**
   * QuizAttempt.responses
   */
  export type QuizAttempt$responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResponse
     */
    select?: QuizResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResponse
     */
    omit?: QuizResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResponseInclude<ExtArgs> | null
    where?: QuizResponseWhereInput
    orderBy?: QuizResponseOrderByWithRelationInput | QuizResponseOrderByWithRelationInput[]
    cursor?: QuizResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizResponseScalarFieldEnum | QuizResponseScalarFieldEnum[]
  }

  /**
   * QuizAttempt without action
   */
  export type QuizAttemptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
  }


  /**
   * Model QuizResponse
   */

  export type AggregateQuizResponse = {
    _count: QuizResponseCountAggregateOutputType | null
    _avg: QuizResponseAvgAggregateOutputType | null
    _sum: QuizResponseSumAggregateOutputType | null
    _min: QuizResponseMinAggregateOutputType | null
    _max: QuizResponseMaxAggregateOutputType | null
  }

  export type QuizResponseAvgAggregateOutputType = {
    id: number | null
    attemptId: number | null
    problemId: number | null
    studentAnswer: number | null
    timeSpent: number | null
  }

  export type QuizResponseSumAggregateOutputType = {
    id: number | null
    attemptId: number | null
    problemId: number | null
    studentAnswer: number | null
    timeSpent: number | null
  }

  export type QuizResponseMinAggregateOutputType = {
    id: number | null
    attemptId: number | null
    problemId: number | null
    studentAnswer: number | null
    timeSpent: number | null
    finalAnswerCorrect: boolean | null
    storyGrammarCorrect: boolean | null
  }

  export type QuizResponseMaxAggregateOutputType = {
    id: number | null
    attemptId: number | null
    problemId: number | null
    studentAnswer: number | null
    timeSpent: number | null
    finalAnswerCorrect: boolean | null
    storyGrammarCorrect: boolean | null
  }

  export type QuizResponseCountAggregateOutputType = {
    id: number
    attemptId: number
    problemId: number
    studentAnswer: number
    timeSpent: number
    storyGrammarAnswers: number
    finalAnswerCorrect: number
    storyGrammarCorrect: number
    _all: number
  }


  export type QuizResponseAvgAggregateInputType = {
    id?: true
    attemptId?: true
    problemId?: true
    studentAnswer?: true
    timeSpent?: true
  }

  export type QuizResponseSumAggregateInputType = {
    id?: true
    attemptId?: true
    problemId?: true
    studentAnswer?: true
    timeSpent?: true
  }

  export type QuizResponseMinAggregateInputType = {
    id?: true
    attemptId?: true
    problemId?: true
    studentAnswer?: true
    timeSpent?: true
    finalAnswerCorrect?: true
    storyGrammarCorrect?: true
  }

  export type QuizResponseMaxAggregateInputType = {
    id?: true
    attemptId?: true
    problemId?: true
    studentAnswer?: true
    timeSpent?: true
    finalAnswerCorrect?: true
    storyGrammarCorrect?: true
  }

  export type QuizResponseCountAggregateInputType = {
    id?: true
    attemptId?: true
    problemId?: true
    studentAnswer?: true
    timeSpent?: true
    storyGrammarAnswers?: true
    finalAnswerCorrect?: true
    storyGrammarCorrect?: true
    _all?: true
  }

  export type QuizResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizResponse to aggregate.
     */
    where?: QuizResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizResponses to fetch.
     */
    orderBy?: QuizResponseOrderByWithRelationInput | QuizResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizResponses
    **/
    _count?: true | QuizResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizResponseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizResponseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizResponseMaxAggregateInputType
  }

  export type GetQuizResponseAggregateType<T extends QuizResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizResponse[P]>
      : GetScalarType<T[P], AggregateQuizResponse[P]>
  }




  export type QuizResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizResponseWhereInput
    orderBy?: QuizResponseOrderByWithAggregationInput | QuizResponseOrderByWithAggregationInput[]
    by: QuizResponseScalarFieldEnum[] | QuizResponseScalarFieldEnum
    having?: QuizResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizResponseCountAggregateInputType | true
    _avg?: QuizResponseAvgAggregateInputType
    _sum?: QuizResponseSumAggregateInputType
    _min?: QuizResponseMinAggregateInputType
    _max?: QuizResponseMaxAggregateInputType
  }

  export type QuizResponseGroupByOutputType = {
    id: number
    attemptId: number
    problemId: number
    studentAnswer: number | null
    timeSpent: number
    storyGrammarAnswers: JsonValue | null
    finalAnswerCorrect: boolean | null
    storyGrammarCorrect: boolean | null
    _count: QuizResponseCountAggregateOutputType | null
    _avg: QuizResponseAvgAggregateOutputType | null
    _sum: QuizResponseSumAggregateOutputType | null
    _min: QuizResponseMinAggregateOutputType | null
    _max: QuizResponseMaxAggregateOutputType | null
  }

  type GetQuizResponseGroupByPayload<T extends QuizResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizResponseGroupByOutputType[P]>
            : GetScalarType<T[P], QuizResponseGroupByOutputType[P]>
        }
      >
    >


  export type QuizResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attemptId?: boolean
    problemId?: boolean
    studentAnswer?: boolean
    timeSpent?: boolean
    storyGrammarAnswers?: boolean
    finalAnswerCorrect?: boolean
    storyGrammarCorrect?: boolean
    attempt?: boolean | QuizAttemptDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizResponse"]>

  export type QuizResponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attemptId?: boolean
    problemId?: boolean
    studentAnswer?: boolean
    timeSpent?: boolean
    storyGrammarAnswers?: boolean
    finalAnswerCorrect?: boolean
    storyGrammarCorrect?: boolean
    attempt?: boolean | QuizAttemptDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizResponse"]>

  export type QuizResponseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attemptId?: boolean
    problemId?: boolean
    studentAnswer?: boolean
    timeSpent?: boolean
    storyGrammarAnswers?: boolean
    finalAnswerCorrect?: boolean
    storyGrammarCorrect?: boolean
    attempt?: boolean | QuizAttemptDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizResponse"]>

  export type QuizResponseSelectScalar = {
    id?: boolean
    attemptId?: boolean
    problemId?: boolean
    studentAnswer?: boolean
    timeSpent?: boolean
    storyGrammarAnswers?: boolean
    finalAnswerCorrect?: boolean
    storyGrammarCorrect?: boolean
  }

  export type QuizResponseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "attemptId" | "problemId" | "studentAnswer" | "timeSpent" | "storyGrammarAnswers" | "finalAnswerCorrect" | "storyGrammarCorrect", ExtArgs["result"]["quizResponse"]>
  export type QuizResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attempt?: boolean | QuizAttemptDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type QuizResponseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attempt?: boolean | QuizAttemptDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type QuizResponseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attempt?: boolean | QuizAttemptDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }

  export type $QuizResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizResponse"
    objects: {
      attempt: Prisma.$QuizAttemptPayload<ExtArgs>
      problem: Prisma.$ProblemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      attemptId: number
      problemId: number
      studentAnswer: number | null
      timeSpent: number
      storyGrammarAnswers: Prisma.JsonValue | null
      finalAnswerCorrect: boolean | null
      storyGrammarCorrect: boolean | null
    }, ExtArgs["result"]["quizResponse"]>
    composites: {}
  }

  type QuizResponseGetPayload<S extends boolean | null | undefined | QuizResponseDefaultArgs> = $Result.GetResult<Prisma.$QuizResponsePayload, S>

  type QuizResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizResponseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizResponseCountAggregateInputType | true
    }

  export interface QuizResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizResponse'], meta: { name: 'QuizResponse' } }
    /**
     * Find zero or one QuizResponse that matches the filter.
     * @param {QuizResponseFindUniqueArgs} args - Arguments to find a QuizResponse
     * @example
     * // Get one QuizResponse
     * const quizResponse = await prisma.quizResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizResponseFindUniqueArgs>(args: SelectSubset<T, QuizResponseFindUniqueArgs<ExtArgs>>): Prisma__QuizResponseClient<$Result.GetResult<Prisma.$QuizResponsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuizResponse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizResponseFindUniqueOrThrowArgs} args - Arguments to find a QuizResponse
     * @example
     * // Get one QuizResponse
     * const quizResponse = await prisma.quizResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizResponseClient<$Result.GetResult<Prisma.$QuizResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizResponseFindFirstArgs} args - Arguments to find a QuizResponse
     * @example
     * // Get one QuizResponse
     * const quizResponse = await prisma.quizResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizResponseFindFirstArgs>(args?: SelectSubset<T, QuizResponseFindFirstArgs<ExtArgs>>): Prisma__QuizResponseClient<$Result.GetResult<Prisma.$QuizResponsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizResponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizResponseFindFirstOrThrowArgs} args - Arguments to find a QuizResponse
     * @example
     * // Get one QuizResponse
     * const quizResponse = await prisma.quizResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizResponseClient<$Result.GetResult<Prisma.$QuizResponsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizResponses
     * const quizResponses = await prisma.quizResponse.findMany()
     * 
     * // Get first 10 QuizResponses
     * const quizResponses = await prisma.quizResponse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizResponseWithIdOnly = await prisma.quizResponse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizResponseFindManyArgs>(args?: SelectSubset<T, QuizResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuizResponse.
     * @param {QuizResponseCreateArgs} args - Arguments to create a QuizResponse.
     * @example
     * // Create one QuizResponse
     * const QuizResponse = await prisma.quizResponse.create({
     *   data: {
     *     // ... data to create a QuizResponse
     *   }
     * })
     * 
     */
    create<T extends QuizResponseCreateArgs>(args: SelectSubset<T, QuizResponseCreateArgs<ExtArgs>>): Prisma__QuizResponseClient<$Result.GetResult<Prisma.$QuizResponsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuizResponses.
     * @param {QuizResponseCreateManyArgs} args - Arguments to create many QuizResponses.
     * @example
     * // Create many QuizResponses
     * const quizResponse = await prisma.quizResponse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizResponseCreateManyArgs>(args?: SelectSubset<T, QuizResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuizResponses and returns the data saved in the database.
     * @param {QuizResponseCreateManyAndReturnArgs} args - Arguments to create many QuizResponses.
     * @example
     * // Create many QuizResponses
     * const quizResponse = await prisma.quizResponse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuizResponses and only return the `id`
     * const quizResponseWithIdOnly = await prisma.quizResponse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizResponseCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizResponsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuizResponse.
     * @param {QuizResponseDeleteArgs} args - Arguments to delete one QuizResponse.
     * @example
     * // Delete one QuizResponse
     * const QuizResponse = await prisma.quizResponse.delete({
     *   where: {
     *     // ... filter to delete one QuizResponse
     *   }
     * })
     * 
     */
    delete<T extends QuizResponseDeleteArgs>(args: SelectSubset<T, QuizResponseDeleteArgs<ExtArgs>>): Prisma__QuizResponseClient<$Result.GetResult<Prisma.$QuizResponsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuizResponse.
     * @param {QuizResponseUpdateArgs} args - Arguments to update one QuizResponse.
     * @example
     * // Update one QuizResponse
     * const quizResponse = await prisma.quizResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizResponseUpdateArgs>(args: SelectSubset<T, QuizResponseUpdateArgs<ExtArgs>>): Prisma__QuizResponseClient<$Result.GetResult<Prisma.$QuizResponsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuizResponses.
     * @param {QuizResponseDeleteManyArgs} args - Arguments to filter QuizResponses to delete.
     * @example
     * // Delete a few QuizResponses
     * const { count } = await prisma.quizResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizResponseDeleteManyArgs>(args?: SelectSubset<T, QuizResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizResponses
     * const quizResponse = await prisma.quizResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizResponseUpdateManyArgs>(args: SelectSubset<T, QuizResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizResponses and returns the data updated in the database.
     * @param {QuizResponseUpdateManyAndReturnArgs} args - Arguments to update many QuizResponses.
     * @example
     * // Update many QuizResponses
     * const quizResponse = await prisma.quizResponse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuizResponses and only return the `id`
     * const quizResponseWithIdOnly = await prisma.quizResponse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuizResponseUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizResponseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizResponsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuizResponse.
     * @param {QuizResponseUpsertArgs} args - Arguments to update or create a QuizResponse.
     * @example
     * // Update or create a QuizResponse
     * const quizResponse = await prisma.quizResponse.upsert({
     *   create: {
     *     // ... data to create a QuizResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizResponse we want to update
     *   }
     * })
     */
    upsert<T extends QuizResponseUpsertArgs>(args: SelectSubset<T, QuizResponseUpsertArgs<ExtArgs>>): Prisma__QuizResponseClient<$Result.GetResult<Prisma.$QuizResponsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuizResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizResponseCountArgs} args - Arguments to filter QuizResponses to count.
     * @example
     * // Count the number of QuizResponses
     * const count = await prisma.quizResponse.count({
     *   where: {
     *     // ... the filter for the QuizResponses we want to count
     *   }
     * })
    **/
    count<T extends QuizResponseCountArgs>(
      args?: Subset<T, QuizResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizResponseAggregateArgs>(args: Subset<T, QuizResponseAggregateArgs>): Prisma.PrismaPromise<GetQuizResponseAggregateType<T>>

    /**
     * Group by QuizResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizResponseGroupByArgs} args - Group by arguments.
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
      T extends QuizResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizResponseGroupByArgs['orderBy'] }
        : { orderBy?: QuizResponseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, QuizResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizResponse model
   */
  readonly fields: QuizResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizResponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attempt<T extends QuizAttemptDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizAttemptDefaultArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    problem<T extends ProblemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProblemDefaultArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuizResponse model
   */
  interface QuizResponseFieldRefs {
    readonly id: FieldRef<"QuizResponse", 'Int'>
    readonly attemptId: FieldRef<"QuizResponse", 'Int'>
    readonly problemId: FieldRef<"QuizResponse", 'Int'>
    readonly studentAnswer: FieldRef<"QuizResponse", 'Int'>
    readonly timeSpent: FieldRef<"QuizResponse", 'Int'>
    readonly storyGrammarAnswers: FieldRef<"QuizResponse", 'Json'>
    readonly finalAnswerCorrect: FieldRef<"QuizResponse", 'Boolean'>
    readonly storyGrammarCorrect: FieldRef<"QuizResponse", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * QuizResponse findUnique
   */
  export type QuizResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResponse
     */
    select?: QuizResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResponse
     */
    omit?: QuizResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResponseInclude<ExtArgs> | null
    /**
     * Filter, which QuizResponse to fetch.
     */
    where: QuizResponseWhereUniqueInput
  }

  /**
   * QuizResponse findUniqueOrThrow
   */
  export type QuizResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResponse
     */
    select?: QuizResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResponse
     */
    omit?: QuizResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResponseInclude<ExtArgs> | null
    /**
     * Filter, which QuizResponse to fetch.
     */
    where: QuizResponseWhereUniqueInput
  }

  /**
   * QuizResponse findFirst
   */
  export type QuizResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResponse
     */
    select?: QuizResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResponse
     */
    omit?: QuizResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResponseInclude<ExtArgs> | null
    /**
     * Filter, which QuizResponse to fetch.
     */
    where?: QuizResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizResponses to fetch.
     */
    orderBy?: QuizResponseOrderByWithRelationInput | QuizResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizResponses.
     */
    cursor?: QuizResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizResponses.
     */
    distinct?: QuizResponseScalarFieldEnum | QuizResponseScalarFieldEnum[]
  }

  /**
   * QuizResponse findFirstOrThrow
   */
  export type QuizResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResponse
     */
    select?: QuizResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResponse
     */
    omit?: QuizResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResponseInclude<ExtArgs> | null
    /**
     * Filter, which QuizResponse to fetch.
     */
    where?: QuizResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizResponses to fetch.
     */
    orderBy?: QuizResponseOrderByWithRelationInput | QuizResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizResponses.
     */
    cursor?: QuizResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizResponses.
     */
    distinct?: QuizResponseScalarFieldEnum | QuizResponseScalarFieldEnum[]
  }

  /**
   * QuizResponse findMany
   */
  export type QuizResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResponse
     */
    select?: QuizResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResponse
     */
    omit?: QuizResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResponseInclude<ExtArgs> | null
    /**
     * Filter, which QuizResponses to fetch.
     */
    where?: QuizResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizResponses to fetch.
     */
    orderBy?: QuizResponseOrderByWithRelationInput | QuizResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizResponses.
     */
    cursor?: QuizResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizResponses.
     */
    skip?: number
    distinct?: QuizResponseScalarFieldEnum | QuizResponseScalarFieldEnum[]
  }

  /**
   * QuizResponse create
   */
  export type QuizResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResponse
     */
    select?: QuizResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResponse
     */
    omit?: QuizResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a QuizResponse.
     */
    data: XOR<QuizResponseCreateInput, QuizResponseUncheckedCreateInput>
  }

  /**
   * QuizResponse createMany
   */
  export type QuizResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizResponses.
     */
    data: QuizResponseCreateManyInput | QuizResponseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuizResponse createManyAndReturn
   */
  export type QuizResponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResponse
     */
    select?: QuizResponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResponse
     */
    omit?: QuizResponseOmit<ExtArgs> | null
    /**
     * The data used to create many QuizResponses.
     */
    data: QuizResponseCreateManyInput | QuizResponseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResponseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizResponse update
   */
  export type QuizResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResponse
     */
    select?: QuizResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResponse
     */
    omit?: QuizResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a QuizResponse.
     */
    data: XOR<QuizResponseUpdateInput, QuizResponseUncheckedUpdateInput>
    /**
     * Choose, which QuizResponse to update.
     */
    where: QuizResponseWhereUniqueInput
  }

  /**
   * QuizResponse updateMany
   */
  export type QuizResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizResponses.
     */
    data: XOR<QuizResponseUpdateManyMutationInput, QuizResponseUncheckedUpdateManyInput>
    /**
     * Filter which QuizResponses to update
     */
    where?: QuizResponseWhereInput
    /**
     * Limit how many QuizResponses to update.
     */
    limit?: number
  }

  /**
   * QuizResponse updateManyAndReturn
   */
  export type QuizResponseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResponse
     */
    select?: QuizResponseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResponse
     */
    omit?: QuizResponseOmit<ExtArgs> | null
    /**
     * The data used to update QuizResponses.
     */
    data: XOR<QuizResponseUpdateManyMutationInput, QuizResponseUncheckedUpdateManyInput>
    /**
     * Filter which QuizResponses to update
     */
    where?: QuizResponseWhereInput
    /**
     * Limit how many QuizResponses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResponseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizResponse upsert
   */
  export type QuizResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResponse
     */
    select?: QuizResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResponse
     */
    omit?: QuizResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the QuizResponse to update in case it exists.
     */
    where: QuizResponseWhereUniqueInput
    /**
     * In case the QuizResponse found by the `where` argument doesn't exist, create a new QuizResponse with this data.
     */
    create: XOR<QuizResponseCreateInput, QuizResponseUncheckedCreateInput>
    /**
     * In case the QuizResponse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizResponseUpdateInput, QuizResponseUncheckedUpdateInput>
  }

  /**
   * QuizResponse delete
   */
  export type QuizResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResponse
     */
    select?: QuizResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResponse
     */
    omit?: QuizResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResponseInclude<ExtArgs> | null
    /**
     * Filter which QuizResponse to delete.
     */
    where: QuizResponseWhereUniqueInput
  }

  /**
   * QuizResponse deleteMany
   */
  export type QuizResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizResponses to delete
     */
    where?: QuizResponseWhereInput
    /**
     * Limit how many QuizResponses to delete.
     */
    limit?: number
  }

  /**
   * QuizResponse without action
   */
  export type QuizResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResponse
     */
    select?: QuizResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResponse
     */
    omit?: QuizResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResponseInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TeacherScalarFieldEnum: {
    id: 'id',
    email: 'email',
    hashedPassword: 'hashedPassword',
    createdAt: 'createdAt',
    name: 'name'
  };

  export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum]


  export const ClassScalarFieldEnum: {
    id: 'id',
    name: 'name',
    teacherId: 'teacherId',
    createdAt: 'createdAt'
  };

  export type ClassScalarFieldEnum = (typeof ClassScalarFieldEnum)[keyof typeof ClassScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    classId: 'classId',
    userName: 'userName'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const ProblemScalarFieldEnum: {
    id: 'id',
    content: 'content',
    answer: 'answer',
    createdAt: 'createdAt',
    groundTruthId: 'groundTruthId'
  };

  export type ProblemScalarFieldEnum = (typeof ProblemScalarFieldEnum)[keyof typeof ProblemScalarFieldEnum]


  export const GroundTruthScalarFieldEnum: {
    id: 'id',
    category: 'category',
    subcategory: 'subcategory',
    answer: 'answer',
    modelAnswers: 'modelAnswers'
  };

  export type GroundTruthScalarFieldEnum = (typeof GroundTruthScalarFieldEnum)[keyof typeof GroundTruthScalarFieldEnum]


  export const ModelEvaluationScalarFieldEnum: {
    id: 'id',
    problemId: 'problemId',
    tokenUsage: 'tokenUsage',
    createdAt: 'createdAt',
    predictedCategory: 'predictedCategory',
    predictedSubcategory: 'predictedSubcategory',
    modelName: 'modelName',
    answer: 'answer',
    isAnswerCorrect: 'isAnswerCorrect',
    isModelMappingCorrect: 'isModelMappingCorrect',
    modelAnswers: 'modelAnswers',
    storyGrammarPrompts: 'storyGrammarPrompts',
    groundTruthId: 'groundTruthId',
    modelAnswerReasoning: 'modelAnswerReasoning',
    subCategoryReasoning: 'subCategoryReasoning',
    supercategoryReasoning: 'supercategoryReasoning'
  };

  export type ModelEvaluationScalarFieldEnum = (typeof ModelEvaluationScalarFieldEnum)[keyof typeof ModelEvaluationScalarFieldEnum]


  export const QuizSessionScalarFieldEnum: {
    id: 'id',
    classId: 'classId',
    teacherId: 'teacherId',
    startTime: 'startTime',
    endTime: 'endTime',
    status: 'status',
    settings: 'settings'
  };

  export type QuizSessionScalarFieldEnum = (typeof QuizSessionScalarFieldEnum)[keyof typeof QuizSessionScalarFieldEnum]


  export const QuizCodeScalarFieldEnum: {
    code: 'code',
    sessionId: 'sessionId',
    studentId: 'studentId',
    createdAt: 'createdAt'
  };

  export type QuizCodeScalarFieldEnum = (typeof QuizCodeScalarFieldEnum)[keyof typeof QuizCodeScalarFieldEnum]


  export const QuizAttemptScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    studentId: 'studentId',
    startTime: 'startTime',
    endTime: 'endTime'
  };

  export type QuizAttemptScalarFieldEnum = (typeof QuizAttemptScalarFieldEnum)[keyof typeof QuizAttemptScalarFieldEnum]


  export const QuizResponseScalarFieldEnum: {
    id: 'id',
    attemptId: 'attemptId',
    problemId: 'problemId',
    studentAnswer: 'studentAnswer',
    timeSpent: 'timeSpent',
    storyGrammarAnswers: 'storyGrammarAnswers',
    finalAnswerCorrect: 'finalAnswerCorrect',
    storyGrammarCorrect: 'storyGrammarCorrect'
  };

  export type QuizResponseScalarFieldEnum = (typeof QuizResponseScalarFieldEnum)[keyof typeof QuizResponseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Category'
   */
  export type EnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category'>
    


  /**
   * Reference to a field of type 'Category[]'
   */
  export type ListEnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category[]'>
    


  /**
   * Reference to a field of type 'Subcategory'
   */
  export type EnumSubcategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Subcategory'>
    


  /**
   * Reference to a field of type 'Subcategory[]'
   */
  export type ListEnumSubcategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Subcategory[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'AIModelName'
   */
  export type EnumAIModelNameFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AIModelName'>
    


  /**
   * Reference to a field of type 'AIModelName[]'
   */
  export type ListEnumAIModelNameFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AIModelName[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'QuizStatus'
   */
  export type EnumQuizStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuizStatus'>
    


  /**
   * Reference to a field of type 'QuizStatus[]'
   */
  export type ListEnumQuizStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuizStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type TeacherWhereInput = {
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    id?: IntFilter<"Teacher"> | number
    email?: StringFilter<"Teacher"> | string
    hashedPassword?: StringFilter<"Teacher"> | string
    createdAt?: DateTimeFilter<"Teacher"> | Date | string
    name?: StringFilter<"Teacher"> | string
    classes?: ClassListRelationFilter
    quizSessions?: QuizSessionListRelationFilter
  }

  export type TeacherOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    classes?: ClassOrderByRelationAggregateInput
    quizSessions?: QuizSessionOrderByRelationAggregateInput
  }

  export type TeacherWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    hashedPassword?: StringFilter<"Teacher"> | string
    createdAt?: DateTimeFilter<"Teacher"> | Date | string
    name?: StringFilter<"Teacher"> | string
    classes?: ClassListRelationFilter
    quizSessions?: QuizSessionListRelationFilter
  }, "id" | "email">

  export type TeacherOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    _count?: TeacherCountOrderByAggregateInput
    _avg?: TeacherAvgOrderByAggregateInput
    _max?: TeacherMaxOrderByAggregateInput
    _min?: TeacherMinOrderByAggregateInput
    _sum?: TeacherSumOrderByAggregateInput
  }

  export type TeacherScalarWhereWithAggregatesInput = {
    AND?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    OR?: TeacherScalarWhereWithAggregatesInput[]
    NOT?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Teacher"> | number
    email?: StringWithAggregatesFilter<"Teacher"> | string
    hashedPassword?: StringWithAggregatesFilter<"Teacher"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Teacher"> | Date | string
    name?: StringWithAggregatesFilter<"Teacher"> | string
  }

  export type ClassWhereInput = {
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    id?: IntFilter<"Class"> | number
    name?: StringFilter<"Class"> | string
    teacherId?: IntFilter<"Class"> | number
    createdAt?: DateTimeFilter<"Class"> | Date | string
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    quizSessions?: QuizSessionListRelationFilter
    students?: StudentListRelationFilter
  }

  export type ClassOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
    teacher?: TeacherOrderByWithRelationInput
    quizSessions?: QuizSessionOrderByRelationAggregateInput
    students?: StudentOrderByRelationAggregateInput
  }

  export type ClassWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    teacherId_name?: ClassTeacherIdNameCompoundUniqueInput
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    name?: StringFilter<"Class"> | string
    teacherId?: IntFilter<"Class"> | number
    createdAt?: DateTimeFilter<"Class"> | Date | string
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    quizSessions?: QuizSessionListRelationFilter
    students?: StudentListRelationFilter
  }, "id" | "teacherId_name">

  export type ClassOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
    _count?: ClassCountOrderByAggregateInput
    _avg?: ClassAvgOrderByAggregateInput
    _max?: ClassMaxOrderByAggregateInput
    _min?: ClassMinOrderByAggregateInput
    _sum?: ClassSumOrderByAggregateInput
  }

  export type ClassScalarWhereWithAggregatesInput = {
    AND?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    OR?: ClassScalarWhereWithAggregatesInput[]
    NOT?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Class"> | number
    name?: StringWithAggregatesFilter<"Class"> | string
    teacherId?: IntWithAggregatesFilter<"Class"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Class"> | Date | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: IntFilter<"Student"> | number
    name?: StringFilter<"Student"> | string
    classId?: IntFilter<"Student"> | number
    userName?: StringFilter<"Student"> | string
    quizAttempts?: QuizAttemptListRelationFilter
    quizCodes?: QuizCodeListRelationFilter
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    classId?: SortOrder
    userName?: SortOrder
    quizAttempts?: QuizAttemptOrderByRelationAggregateInput
    quizCodes?: QuizCodeOrderByRelationAggregateInput
    class?: ClassOrderByWithRelationInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userName?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    name?: StringFilter<"Student"> | string
    classId?: IntFilter<"Student"> | number
    quizAttempts?: QuizAttemptListRelationFilter
    quizCodes?: QuizCodeListRelationFilter
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
  }, "id" | "userName">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    classId?: SortOrder
    userName?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Student"> | number
    name?: StringWithAggregatesFilter<"Student"> | string
    classId?: IntWithAggregatesFilter<"Student"> | number
    userName?: StringWithAggregatesFilter<"Student"> | string
  }

  export type ProblemWhereInput = {
    AND?: ProblemWhereInput | ProblemWhereInput[]
    OR?: ProblemWhereInput[]
    NOT?: ProblemWhereInput | ProblemWhereInput[]
    id?: IntFilter<"Problem"> | number
    content?: StringFilter<"Problem"> | string
    answer?: IntFilter<"Problem"> | number
    createdAt?: DateTimeFilter<"Problem"> | Date | string
    groundTruthId?: IntFilter<"Problem"> | number
    groundTruth?: XOR<GroundTruthScalarRelationFilter, GroundTruthWhereInput>
    modelEvaluations?: ModelEvaluationListRelationFilter
    quizResponses?: QuizResponseListRelationFilter
  }

  export type ProblemOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    groundTruthId?: SortOrder
    groundTruth?: GroundTruthOrderByWithRelationInput
    modelEvaluations?: ModelEvaluationOrderByRelationAggregateInput
    quizResponses?: QuizResponseOrderByRelationAggregateInput
  }

  export type ProblemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    groundTruthId?: number
    AND?: ProblemWhereInput | ProblemWhereInput[]
    OR?: ProblemWhereInput[]
    NOT?: ProblemWhereInput | ProblemWhereInput[]
    content?: StringFilter<"Problem"> | string
    answer?: IntFilter<"Problem"> | number
    createdAt?: DateTimeFilter<"Problem"> | Date | string
    groundTruth?: XOR<GroundTruthScalarRelationFilter, GroundTruthWhereInput>
    modelEvaluations?: ModelEvaluationListRelationFilter
    quizResponses?: QuizResponseListRelationFilter
  }, "id" | "groundTruthId">

  export type ProblemOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    groundTruthId?: SortOrder
    _count?: ProblemCountOrderByAggregateInput
    _avg?: ProblemAvgOrderByAggregateInput
    _max?: ProblemMaxOrderByAggregateInput
    _min?: ProblemMinOrderByAggregateInput
    _sum?: ProblemSumOrderByAggregateInput
  }

  export type ProblemScalarWhereWithAggregatesInput = {
    AND?: ProblemScalarWhereWithAggregatesInput | ProblemScalarWhereWithAggregatesInput[]
    OR?: ProblemScalarWhereWithAggregatesInput[]
    NOT?: ProblemScalarWhereWithAggregatesInput | ProblemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Problem"> | number
    content?: StringWithAggregatesFilter<"Problem"> | string
    answer?: IntWithAggregatesFilter<"Problem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Problem"> | Date | string
    groundTruthId?: IntWithAggregatesFilter<"Problem"> | number
  }

  export type GroundTruthWhereInput = {
    AND?: GroundTruthWhereInput | GroundTruthWhereInput[]
    OR?: GroundTruthWhereInput[]
    NOT?: GroundTruthWhereInput | GroundTruthWhereInput[]
    id?: IntFilter<"GroundTruth"> | number
    category?: EnumCategoryFilter<"GroundTruth"> | $Enums.Category
    subcategory?: EnumSubcategoryFilter<"GroundTruth"> | $Enums.Subcategory
    answer?: IntFilter<"GroundTruth"> | number
    modelAnswers?: JsonFilter<"GroundTruth">
    problem?: XOR<ProblemNullableScalarRelationFilter, ProblemWhereInput> | null
    modelEvaluations?: ModelEvaluationListRelationFilter
  }

  export type GroundTruthOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    answer?: SortOrder
    modelAnswers?: SortOrder
    problem?: ProblemOrderByWithRelationInput
    modelEvaluations?: ModelEvaluationOrderByRelationAggregateInput
  }

  export type GroundTruthWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GroundTruthWhereInput | GroundTruthWhereInput[]
    OR?: GroundTruthWhereInput[]
    NOT?: GroundTruthWhereInput | GroundTruthWhereInput[]
    category?: EnumCategoryFilter<"GroundTruth"> | $Enums.Category
    subcategory?: EnumSubcategoryFilter<"GroundTruth"> | $Enums.Subcategory
    answer?: IntFilter<"GroundTruth"> | number
    modelAnswers?: JsonFilter<"GroundTruth">
    problem?: XOR<ProblemNullableScalarRelationFilter, ProblemWhereInput> | null
    modelEvaluations?: ModelEvaluationListRelationFilter
  }, "id">

  export type GroundTruthOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    answer?: SortOrder
    modelAnswers?: SortOrder
    _count?: GroundTruthCountOrderByAggregateInput
    _avg?: GroundTruthAvgOrderByAggregateInput
    _max?: GroundTruthMaxOrderByAggregateInput
    _min?: GroundTruthMinOrderByAggregateInput
    _sum?: GroundTruthSumOrderByAggregateInput
  }

  export type GroundTruthScalarWhereWithAggregatesInput = {
    AND?: GroundTruthScalarWhereWithAggregatesInput | GroundTruthScalarWhereWithAggregatesInput[]
    OR?: GroundTruthScalarWhereWithAggregatesInput[]
    NOT?: GroundTruthScalarWhereWithAggregatesInput | GroundTruthScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GroundTruth"> | number
    category?: EnumCategoryWithAggregatesFilter<"GroundTruth"> | $Enums.Category
    subcategory?: EnumSubcategoryWithAggregatesFilter<"GroundTruth"> | $Enums.Subcategory
    answer?: IntWithAggregatesFilter<"GroundTruth"> | number
    modelAnswers?: JsonWithAggregatesFilter<"GroundTruth">
  }

  export type ModelEvaluationWhereInput = {
    AND?: ModelEvaluationWhereInput | ModelEvaluationWhereInput[]
    OR?: ModelEvaluationWhereInput[]
    NOT?: ModelEvaluationWhereInput | ModelEvaluationWhereInput[]
    id?: IntFilter<"ModelEvaluation"> | number
    problemId?: IntFilter<"ModelEvaluation"> | number
    tokenUsage?: JsonFilter<"ModelEvaluation">
    createdAt?: DateTimeFilter<"ModelEvaluation"> | Date | string
    predictedCategory?: EnumCategoryNullableFilter<"ModelEvaluation"> | $Enums.Category | null
    predictedSubcategory?: EnumSubcategoryNullableFilter<"ModelEvaluation"> | $Enums.Subcategory | null
    modelName?: EnumAIModelNameFilter<"ModelEvaluation"> | $Enums.AIModelName
    answer?: IntNullableFilter<"ModelEvaluation"> | number | null
    isAnswerCorrect?: BoolFilter<"ModelEvaluation"> | boolean
    isModelMappingCorrect?: BoolFilter<"ModelEvaluation"> | boolean
    modelAnswers?: JsonNullableFilter<"ModelEvaluation">
    storyGrammarPrompts?: JsonNullableFilter<"ModelEvaluation">
    groundTruthId?: IntFilter<"ModelEvaluation"> | number
    modelAnswerReasoning?: StringNullableFilter<"ModelEvaluation"> | string | null
    subCategoryReasoning?: StringNullableFilter<"ModelEvaluation"> | string | null
    supercategoryReasoning?: StringFilter<"ModelEvaluation"> | string
    groundTruth?: XOR<GroundTruthScalarRelationFilter, GroundTruthWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }

  export type ModelEvaluationOrderByWithRelationInput = {
    id?: SortOrder
    problemId?: SortOrder
    tokenUsage?: SortOrder
    createdAt?: SortOrder
    predictedCategory?: SortOrderInput | SortOrder
    predictedSubcategory?: SortOrderInput | SortOrder
    modelName?: SortOrder
    answer?: SortOrderInput | SortOrder
    isAnswerCorrect?: SortOrder
    isModelMappingCorrect?: SortOrder
    modelAnswers?: SortOrderInput | SortOrder
    storyGrammarPrompts?: SortOrderInput | SortOrder
    groundTruthId?: SortOrder
    modelAnswerReasoning?: SortOrderInput | SortOrder
    subCategoryReasoning?: SortOrderInput | SortOrder
    supercategoryReasoning?: SortOrder
    groundTruth?: GroundTruthOrderByWithRelationInput
    problem?: ProblemOrderByWithRelationInput
  }

  export type ModelEvaluationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ModelEvaluationWhereInput | ModelEvaluationWhereInput[]
    OR?: ModelEvaluationWhereInput[]
    NOT?: ModelEvaluationWhereInput | ModelEvaluationWhereInput[]
    problemId?: IntFilter<"ModelEvaluation"> | number
    tokenUsage?: JsonFilter<"ModelEvaluation">
    createdAt?: DateTimeFilter<"ModelEvaluation"> | Date | string
    predictedCategory?: EnumCategoryNullableFilter<"ModelEvaluation"> | $Enums.Category | null
    predictedSubcategory?: EnumSubcategoryNullableFilter<"ModelEvaluation"> | $Enums.Subcategory | null
    modelName?: EnumAIModelNameFilter<"ModelEvaluation"> | $Enums.AIModelName
    answer?: IntNullableFilter<"ModelEvaluation"> | number | null
    isAnswerCorrect?: BoolFilter<"ModelEvaluation"> | boolean
    isModelMappingCorrect?: BoolFilter<"ModelEvaluation"> | boolean
    modelAnswers?: JsonNullableFilter<"ModelEvaluation">
    storyGrammarPrompts?: JsonNullableFilter<"ModelEvaluation">
    groundTruthId?: IntFilter<"ModelEvaluation"> | number
    modelAnswerReasoning?: StringNullableFilter<"ModelEvaluation"> | string | null
    subCategoryReasoning?: StringNullableFilter<"ModelEvaluation"> | string | null
    supercategoryReasoning?: StringFilter<"ModelEvaluation"> | string
    groundTruth?: XOR<GroundTruthScalarRelationFilter, GroundTruthWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }, "id">

  export type ModelEvaluationOrderByWithAggregationInput = {
    id?: SortOrder
    problemId?: SortOrder
    tokenUsage?: SortOrder
    createdAt?: SortOrder
    predictedCategory?: SortOrderInput | SortOrder
    predictedSubcategory?: SortOrderInput | SortOrder
    modelName?: SortOrder
    answer?: SortOrderInput | SortOrder
    isAnswerCorrect?: SortOrder
    isModelMappingCorrect?: SortOrder
    modelAnswers?: SortOrderInput | SortOrder
    storyGrammarPrompts?: SortOrderInput | SortOrder
    groundTruthId?: SortOrder
    modelAnswerReasoning?: SortOrderInput | SortOrder
    subCategoryReasoning?: SortOrderInput | SortOrder
    supercategoryReasoning?: SortOrder
    _count?: ModelEvaluationCountOrderByAggregateInput
    _avg?: ModelEvaluationAvgOrderByAggregateInput
    _max?: ModelEvaluationMaxOrderByAggregateInput
    _min?: ModelEvaluationMinOrderByAggregateInput
    _sum?: ModelEvaluationSumOrderByAggregateInput
  }

  export type ModelEvaluationScalarWhereWithAggregatesInput = {
    AND?: ModelEvaluationScalarWhereWithAggregatesInput | ModelEvaluationScalarWhereWithAggregatesInput[]
    OR?: ModelEvaluationScalarWhereWithAggregatesInput[]
    NOT?: ModelEvaluationScalarWhereWithAggregatesInput | ModelEvaluationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ModelEvaluation"> | number
    problemId?: IntWithAggregatesFilter<"ModelEvaluation"> | number
    tokenUsage?: JsonWithAggregatesFilter<"ModelEvaluation">
    createdAt?: DateTimeWithAggregatesFilter<"ModelEvaluation"> | Date | string
    predictedCategory?: EnumCategoryNullableWithAggregatesFilter<"ModelEvaluation"> | $Enums.Category | null
    predictedSubcategory?: EnumSubcategoryNullableWithAggregatesFilter<"ModelEvaluation"> | $Enums.Subcategory | null
    modelName?: EnumAIModelNameWithAggregatesFilter<"ModelEvaluation"> | $Enums.AIModelName
    answer?: IntNullableWithAggregatesFilter<"ModelEvaluation"> | number | null
    isAnswerCorrect?: BoolWithAggregatesFilter<"ModelEvaluation"> | boolean
    isModelMappingCorrect?: BoolWithAggregatesFilter<"ModelEvaluation"> | boolean
    modelAnswers?: JsonNullableWithAggregatesFilter<"ModelEvaluation">
    storyGrammarPrompts?: JsonNullableWithAggregatesFilter<"ModelEvaluation">
    groundTruthId?: IntWithAggregatesFilter<"ModelEvaluation"> | number
    modelAnswerReasoning?: StringNullableWithAggregatesFilter<"ModelEvaluation"> | string | null
    subCategoryReasoning?: StringNullableWithAggregatesFilter<"ModelEvaluation"> | string | null
    supercategoryReasoning?: StringWithAggregatesFilter<"ModelEvaluation"> | string
  }

  export type QuizSessionWhereInput = {
    AND?: QuizSessionWhereInput | QuizSessionWhereInput[]
    OR?: QuizSessionWhereInput[]
    NOT?: QuizSessionWhereInput | QuizSessionWhereInput[]
    id?: IntFilter<"QuizSession"> | number
    classId?: IntFilter<"QuizSession"> | number
    teacherId?: IntFilter<"QuizSession"> | number
    startTime?: DateTimeFilter<"QuizSession"> | Date | string
    endTime?: DateTimeNullableFilter<"QuizSession"> | Date | string | null
    status?: EnumQuizStatusFilter<"QuizSession"> | $Enums.QuizStatus
    settings?: JsonNullableFilter<"QuizSession">
    attempts?: QuizAttemptListRelationFilter
    quizCodes?: QuizCodeListRelationFilter
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
  }

  export type QuizSessionOrderByWithRelationInput = {
    id?: SortOrder
    classId?: SortOrder
    teacherId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    status?: SortOrder
    settings?: SortOrderInput | SortOrder
    attempts?: QuizAttemptOrderByRelationAggregateInput
    quizCodes?: QuizCodeOrderByRelationAggregateInput
    class?: ClassOrderByWithRelationInput
    teacher?: TeacherOrderByWithRelationInput
  }

  export type QuizSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuizSessionWhereInput | QuizSessionWhereInput[]
    OR?: QuizSessionWhereInput[]
    NOT?: QuizSessionWhereInput | QuizSessionWhereInput[]
    classId?: IntFilter<"QuizSession"> | number
    teacherId?: IntFilter<"QuizSession"> | number
    startTime?: DateTimeFilter<"QuizSession"> | Date | string
    endTime?: DateTimeNullableFilter<"QuizSession"> | Date | string | null
    status?: EnumQuizStatusFilter<"QuizSession"> | $Enums.QuizStatus
    settings?: JsonNullableFilter<"QuizSession">
    attempts?: QuizAttemptListRelationFilter
    quizCodes?: QuizCodeListRelationFilter
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
  }, "id">

  export type QuizSessionOrderByWithAggregationInput = {
    id?: SortOrder
    classId?: SortOrder
    teacherId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    status?: SortOrder
    settings?: SortOrderInput | SortOrder
    _count?: QuizSessionCountOrderByAggregateInput
    _avg?: QuizSessionAvgOrderByAggregateInput
    _max?: QuizSessionMaxOrderByAggregateInput
    _min?: QuizSessionMinOrderByAggregateInput
    _sum?: QuizSessionSumOrderByAggregateInput
  }

  export type QuizSessionScalarWhereWithAggregatesInput = {
    AND?: QuizSessionScalarWhereWithAggregatesInput | QuizSessionScalarWhereWithAggregatesInput[]
    OR?: QuizSessionScalarWhereWithAggregatesInput[]
    NOT?: QuizSessionScalarWhereWithAggregatesInput | QuizSessionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"QuizSession"> | number
    classId?: IntWithAggregatesFilter<"QuizSession"> | number
    teacherId?: IntWithAggregatesFilter<"QuizSession"> | number
    startTime?: DateTimeWithAggregatesFilter<"QuizSession"> | Date | string
    endTime?: DateTimeNullableWithAggregatesFilter<"QuizSession"> | Date | string | null
    status?: EnumQuizStatusWithAggregatesFilter<"QuizSession"> | $Enums.QuizStatus
    settings?: JsonNullableWithAggregatesFilter<"QuizSession">
  }

  export type QuizCodeWhereInput = {
    AND?: QuizCodeWhereInput | QuizCodeWhereInput[]
    OR?: QuizCodeWhereInput[]
    NOT?: QuizCodeWhereInput | QuizCodeWhereInput[]
    code?: StringFilter<"QuizCode"> | string
    sessionId?: IntFilter<"QuizCode"> | number
    studentId?: IntFilter<"QuizCode"> | number
    createdAt?: DateTimeFilter<"QuizCode"> | Date | string
    session?: XOR<QuizSessionScalarRelationFilter, QuizSessionWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type QuizCodeOrderByWithRelationInput = {
    code?: SortOrder
    sessionId?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
    session?: QuizSessionOrderByWithRelationInput
    student?: StudentOrderByWithRelationInput
  }

  export type QuizCodeWhereUniqueInput = Prisma.AtLeast<{
    code?: string
    AND?: QuizCodeWhereInput | QuizCodeWhereInput[]
    OR?: QuizCodeWhereInput[]
    NOT?: QuizCodeWhereInput | QuizCodeWhereInput[]
    sessionId?: IntFilter<"QuizCode"> | number
    studentId?: IntFilter<"QuizCode"> | number
    createdAt?: DateTimeFilter<"QuizCode"> | Date | string
    session?: XOR<QuizSessionScalarRelationFilter, QuizSessionWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "code" | "code">

  export type QuizCodeOrderByWithAggregationInput = {
    code?: SortOrder
    sessionId?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
    _count?: QuizCodeCountOrderByAggregateInput
    _avg?: QuizCodeAvgOrderByAggregateInput
    _max?: QuizCodeMaxOrderByAggregateInput
    _min?: QuizCodeMinOrderByAggregateInput
    _sum?: QuizCodeSumOrderByAggregateInput
  }

  export type QuizCodeScalarWhereWithAggregatesInput = {
    AND?: QuizCodeScalarWhereWithAggregatesInput | QuizCodeScalarWhereWithAggregatesInput[]
    OR?: QuizCodeScalarWhereWithAggregatesInput[]
    NOT?: QuizCodeScalarWhereWithAggregatesInput | QuizCodeScalarWhereWithAggregatesInput[]
    code?: StringWithAggregatesFilter<"QuizCode"> | string
    sessionId?: IntWithAggregatesFilter<"QuizCode"> | number
    studentId?: IntWithAggregatesFilter<"QuizCode"> | number
    createdAt?: DateTimeWithAggregatesFilter<"QuizCode"> | Date | string
  }

  export type QuizAttemptWhereInput = {
    AND?: QuizAttemptWhereInput | QuizAttemptWhereInput[]
    OR?: QuizAttemptWhereInput[]
    NOT?: QuizAttemptWhereInput | QuizAttemptWhereInput[]
    id?: IntFilter<"QuizAttempt"> | number
    sessionId?: IntFilter<"QuizAttempt"> | number
    studentId?: IntFilter<"QuizAttempt"> | number
    startTime?: DateTimeFilter<"QuizAttempt"> | Date | string
    endTime?: DateTimeNullableFilter<"QuizAttempt"> | Date | string | null
    responses?: QuizResponseListRelationFilter
    session?: XOR<QuizSessionScalarRelationFilter, QuizSessionWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type QuizAttemptOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    studentId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    responses?: QuizResponseOrderByRelationAggregateInput
    session?: QuizSessionOrderByWithRelationInput
    student?: StudentOrderByWithRelationInput
  }

  export type QuizAttemptWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuizAttemptWhereInput | QuizAttemptWhereInput[]
    OR?: QuizAttemptWhereInput[]
    NOT?: QuizAttemptWhereInput | QuizAttemptWhereInput[]
    sessionId?: IntFilter<"QuizAttempt"> | number
    studentId?: IntFilter<"QuizAttempt"> | number
    startTime?: DateTimeFilter<"QuizAttempt"> | Date | string
    endTime?: DateTimeNullableFilter<"QuizAttempt"> | Date | string | null
    responses?: QuizResponseListRelationFilter
    session?: XOR<QuizSessionScalarRelationFilter, QuizSessionWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "id">

  export type QuizAttemptOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    studentId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    _count?: QuizAttemptCountOrderByAggregateInput
    _avg?: QuizAttemptAvgOrderByAggregateInput
    _max?: QuizAttemptMaxOrderByAggregateInput
    _min?: QuizAttemptMinOrderByAggregateInput
    _sum?: QuizAttemptSumOrderByAggregateInput
  }

  export type QuizAttemptScalarWhereWithAggregatesInput = {
    AND?: QuizAttemptScalarWhereWithAggregatesInput | QuizAttemptScalarWhereWithAggregatesInput[]
    OR?: QuizAttemptScalarWhereWithAggregatesInput[]
    NOT?: QuizAttemptScalarWhereWithAggregatesInput | QuizAttemptScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"QuizAttempt"> | number
    sessionId?: IntWithAggregatesFilter<"QuizAttempt"> | number
    studentId?: IntWithAggregatesFilter<"QuizAttempt"> | number
    startTime?: DateTimeWithAggregatesFilter<"QuizAttempt"> | Date | string
    endTime?: DateTimeNullableWithAggregatesFilter<"QuizAttempt"> | Date | string | null
  }

  export type QuizResponseWhereInput = {
    AND?: QuizResponseWhereInput | QuizResponseWhereInput[]
    OR?: QuizResponseWhereInput[]
    NOT?: QuizResponseWhereInput | QuizResponseWhereInput[]
    id?: IntFilter<"QuizResponse"> | number
    attemptId?: IntFilter<"QuizResponse"> | number
    problemId?: IntFilter<"QuizResponse"> | number
    studentAnswer?: IntNullableFilter<"QuizResponse"> | number | null
    timeSpent?: IntFilter<"QuizResponse"> | number
    storyGrammarAnswers?: JsonNullableFilter<"QuizResponse">
    finalAnswerCorrect?: BoolNullableFilter<"QuizResponse"> | boolean | null
    storyGrammarCorrect?: BoolNullableFilter<"QuizResponse"> | boolean | null
    attempt?: XOR<QuizAttemptScalarRelationFilter, QuizAttemptWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }

  export type QuizResponseOrderByWithRelationInput = {
    id?: SortOrder
    attemptId?: SortOrder
    problemId?: SortOrder
    studentAnswer?: SortOrderInput | SortOrder
    timeSpent?: SortOrder
    storyGrammarAnswers?: SortOrderInput | SortOrder
    finalAnswerCorrect?: SortOrderInput | SortOrder
    storyGrammarCorrect?: SortOrderInput | SortOrder
    attempt?: QuizAttemptOrderByWithRelationInput
    problem?: ProblemOrderByWithRelationInput
  }

  export type QuizResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuizResponseWhereInput | QuizResponseWhereInput[]
    OR?: QuizResponseWhereInput[]
    NOT?: QuizResponseWhereInput | QuizResponseWhereInput[]
    attemptId?: IntFilter<"QuizResponse"> | number
    problemId?: IntFilter<"QuizResponse"> | number
    studentAnswer?: IntNullableFilter<"QuizResponse"> | number | null
    timeSpent?: IntFilter<"QuizResponse"> | number
    storyGrammarAnswers?: JsonNullableFilter<"QuizResponse">
    finalAnswerCorrect?: BoolNullableFilter<"QuizResponse"> | boolean | null
    storyGrammarCorrect?: BoolNullableFilter<"QuizResponse"> | boolean | null
    attempt?: XOR<QuizAttemptScalarRelationFilter, QuizAttemptWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }, "id">

  export type QuizResponseOrderByWithAggregationInput = {
    id?: SortOrder
    attemptId?: SortOrder
    problemId?: SortOrder
    studentAnswer?: SortOrderInput | SortOrder
    timeSpent?: SortOrder
    storyGrammarAnswers?: SortOrderInput | SortOrder
    finalAnswerCorrect?: SortOrderInput | SortOrder
    storyGrammarCorrect?: SortOrderInput | SortOrder
    _count?: QuizResponseCountOrderByAggregateInput
    _avg?: QuizResponseAvgOrderByAggregateInput
    _max?: QuizResponseMaxOrderByAggregateInput
    _min?: QuizResponseMinOrderByAggregateInput
    _sum?: QuizResponseSumOrderByAggregateInput
  }

  export type QuizResponseScalarWhereWithAggregatesInput = {
    AND?: QuizResponseScalarWhereWithAggregatesInput | QuizResponseScalarWhereWithAggregatesInput[]
    OR?: QuizResponseScalarWhereWithAggregatesInput[]
    NOT?: QuizResponseScalarWhereWithAggregatesInput | QuizResponseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"QuizResponse"> | number
    attemptId?: IntWithAggregatesFilter<"QuizResponse"> | number
    problemId?: IntWithAggregatesFilter<"QuizResponse"> | number
    studentAnswer?: IntNullableWithAggregatesFilter<"QuizResponse"> | number | null
    timeSpent?: IntWithAggregatesFilter<"QuizResponse"> | number
    storyGrammarAnswers?: JsonNullableWithAggregatesFilter<"QuizResponse">
    finalAnswerCorrect?: BoolNullableWithAggregatesFilter<"QuizResponse"> | boolean | null
    storyGrammarCorrect?: BoolNullableWithAggregatesFilter<"QuizResponse"> | boolean | null
  }

  export type TeacherCreateInput = {
    email: string
    hashedPassword: string
    createdAt?: Date | string
    name: string
    classes?: ClassCreateNestedManyWithoutTeacherInput
    quizSessions?: QuizSessionCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateInput = {
    id?: number
    email: string
    hashedPassword: string
    createdAt?: Date | string
    name: string
    classes?: ClassUncheckedCreateNestedManyWithoutTeacherInput
    quizSessions?: QuizSessionUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    classes?: ClassUpdateManyWithoutTeacherNestedInput
    quizSessions?: QuizSessionUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    classes?: ClassUncheckedUpdateManyWithoutTeacherNestedInput
    quizSessions?: QuizSessionUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherCreateManyInput = {
    id?: number
    email: string
    hashedPassword: string
    createdAt?: Date | string
    name: string
  }

  export type TeacherUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ClassCreateInput = {
    name: string
    createdAt?: Date | string
    teacher: TeacherCreateNestedOneWithoutClassesInput
    quizSessions?: QuizSessionCreateNestedManyWithoutClassInput
    students?: StudentCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateInput = {
    id?: number
    name: string
    teacherId: number
    createdAt?: Date | string
    quizSessions?: QuizSessionUncheckedCreateNestedManyWithoutClassInput
    students?: StudentUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: TeacherUpdateOneRequiredWithoutClassesNestedInput
    quizSessions?: QuizSessionUpdateManyWithoutClassNestedInput
    students?: StudentUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    teacherId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizSessions?: QuizSessionUncheckedUpdateManyWithoutClassNestedInput
    students?: StudentUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassCreateManyInput = {
    id?: number
    name: string
    teacherId: number
    createdAt?: Date | string
  }

  export type ClassUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    teacherId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateInput = {
    name: string
    userName: string
    quizAttempts?: QuizAttemptCreateNestedManyWithoutStudentInput
    quizCodes?: QuizCodeCreateNestedManyWithoutStudentInput
    class: ClassCreateNestedOneWithoutStudentsInput
  }

  export type StudentUncheckedCreateInput = {
    id?: number
    name: string
    classId: number
    userName: string
    quizAttempts?: QuizAttemptUncheckedCreateNestedManyWithoutStudentInput
    quizCodes?: QuizCodeUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    quizAttempts?: QuizAttemptUpdateManyWithoutStudentNestedInput
    quizCodes?: QuizCodeUpdateManyWithoutStudentNestedInput
    class?: ClassUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    classId?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    quizAttempts?: QuizAttemptUncheckedUpdateManyWithoutStudentNestedInput
    quizCodes?: QuizCodeUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: number
    name: string
    classId: number
    userName: string
  }

  export type StudentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    classId?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
  }

  export type ProblemCreateInput = {
    content: string
    answer: number
    createdAt?: Date | string
    groundTruth: GroundTruthCreateNestedOneWithoutProblemInput
    modelEvaluations?: ModelEvaluationCreateNestedManyWithoutProblemInput
    quizResponses?: QuizResponseCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateInput = {
    id?: number
    content: string
    answer: number
    createdAt?: Date | string
    groundTruthId: number
    modelEvaluations?: ModelEvaluationUncheckedCreateNestedManyWithoutProblemInput
    quizResponses?: QuizResponseUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    answer?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groundTruth?: GroundTruthUpdateOneRequiredWithoutProblemNestedInput
    modelEvaluations?: ModelEvaluationUpdateManyWithoutProblemNestedInput
    quizResponses?: QuizResponseUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    answer?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groundTruthId?: IntFieldUpdateOperationsInput | number
    modelEvaluations?: ModelEvaluationUncheckedUpdateManyWithoutProblemNestedInput
    quizResponses?: QuizResponseUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemCreateManyInput = {
    id?: number
    content: string
    answer: number
    createdAt?: Date | string
    groundTruthId: number
  }

  export type ProblemUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    answer?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    answer?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groundTruthId?: IntFieldUpdateOperationsInput | number
  }

  export type GroundTruthCreateInput = {
    category: $Enums.Category
    subcategory: $Enums.Subcategory
    answer: number
    modelAnswers: JsonNullValueInput | InputJsonValue
    problem?: ProblemCreateNestedOneWithoutGroundTruthInput
    modelEvaluations?: ModelEvaluationCreateNestedManyWithoutGroundTruthInput
  }

  export type GroundTruthUncheckedCreateInput = {
    id?: number
    category: $Enums.Category
    subcategory: $Enums.Subcategory
    answer: number
    modelAnswers: JsonNullValueInput | InputJsonValue
    problem?: ProblemUncheckedCreateNestedOneWithoutGroundTruthInput
    modelEvaluations?: ModelEvaluationUncheckedCreateNestedManyWithoutGroundTruthInput
  }

  export type GroundTruthUpdateInput = {
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    subcategory?: EnumSubcategoryFieldUpdateOperationsInput | $Enums.Subcategory
    answer?: IntFieldUpdateOperationsInput | number
    modelAnswers?: JsonNullValueInput | InputJsonValue
    problem?: ProblemUpdateOneWithoutGroundTruthNestedInput
    modelEvaluations?: ModelEvaluationUpdateManyWithoutGroundTruthNestedInput
  }

  export type GroundTruthUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    subcategory?: EnumSubcategoryFieldUpdateOperationsInput | $Enums.Subcategory
    answer?: IntFieldUpdateOperationsInput | number
    modelAnswers?: JsonNullValueInput | InputJsonValue
    problem?: ProblemUncheckedUpdateOneWithoutGroundTruthNestedInput
    modelEvaluations?: ModelEvaluationUncheckedUpdateManyWithoutGroundTruthNestedInput
  }

  export type GroundTruthCreateManyInput = {
    id?: number
    category: $Enums.Category
    subcategory: $Enums.Subcategory
    answer: number
    modelAnswers: JsonNullValueInput | InputJsonValue
  }

  export type GroundTruthUpdateManyMutationInput = {
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    subcategory?: EnumSubcategoryFieldUpdateOperationsInput | $Enums.Subcategory
    answer?: IntFieldUpdateOperationsInput | number
    modelAnswers?: JsonNullValueInput | InputJsonValue
  }

  export type GroundTruthUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    subcategory?: EnumSubcategoryFieldUpdateOperationsInput | $Enums.Subcategory
    answer?: IntFieldUpdateOperationsInput | number
    modelAnswers?: JsonNullValueInput | InputJsonValue
  }

  export type ModelEvaluationCreateInput = {
    tokenUsage: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    predictedCategory?: $Enums.Category | null
    predictedSubcategory?: $Enums.Subcategory | null
    modelName: $Enums.AIModelName
    answer?: number | null
    isAnswerCorrect: boolean
    isModelMappingCorrect: boolean
    modelAnswers?: NullableJsonNullValueInput | InputJsonValue
    storyGrammarPrompts?: NullableJsonNullValueInput | InputJsonValue
    modelAnswerReasoning?: string | null
    subCategoryReasoning?: string | null
    supercategoryReasoning: string
    groundTruth: GroundTruthCreateNestedOneWithoutModelEvaluationsInput
    problem: ProblemCreateNestedOneWithoutModelEvaluationsInput
  }

  export type ModelEvaluationUncheckedCreateInput = {
    id?: number
    problemId: number
    tokenUsage: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    predictedCategory?: $Enums.Category | null
    predictedSubcategory?: $Enums.Subcategory | null
    modelName: $Enums.AIModelName
    answer?: number | null
    isAnswerCorrect: boolean
    isModelMappingCorrect: boolean
    modelAnswers?: NullableJsonNullValueInput | InputJsonValue
    storyGrammarPrompts?: NullableJsonNullValueInput | InputJsonValue
    groundTruthId: number
    modelAnswerReasoning?: string | null
    subCategoryReasoning?: string | null
    supercategoryReasoning: string
  }

  export type ModelEvaluationUpdateInput = {
    tokenUsage?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    predictedCategory?: NullableEnumCategoryFieldUpdateOperationsInput | $Enums.Category | null
    predictedSubcategory?: NullableEnumSubcategoryFieldUpdateOperationsInput | $Enums.Subcategory | null
    modelName?: EnumAIModelNameFieldUpdateOperationsInput | $Enums.AIModelName
    answer?: NullableIntFieldUpdateOperationsInput | number | null
    isAnswerCorrect?: BoolFieldUpdateOperationsInput | boolean
    isModelMappingCorrect?: BoolFieldUpdateOperationsInput | boolean
    modelAnswers?: NullableJsonNullValueInput | InputJsonValue
    storyGrammarPrompts?: NullableJsonNullValueInput | InputJsonValue
    modelAnswerReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    subCategoryReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    supercategoryReasoning?: StringFieldUpdateOperationsInput | string
    groundTruth?: GroundTruthUpdateOneRequiredWithoutModelEvaluationsNestedInput
    problem?: ProblemUpdateOneRequiredWithoutModelEvaluationsNestedInput
  }

  export type ModelEvaluationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    problemId?: IntFieldUpdateOperationsInput | number
    tokenUsage?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    predictedCategory?: NullableEnumCategoryFieldUpdateOperationsInput | $Enums.Category | null
    predictedSubcategory?: NullableEnumSubcategoryFieldUpdateOperationsInput | $Enums.Subcategory | null
    modelName?: EnumAIModelNameFieldUpdateOperationsInput | $Enums.AIModelName
    answer?: NullableIntFieldUpdateOperationsInput | number | null
    isAnswerCorrect?: BoolFieldUpdateOperationsInput | boolean
    isModelMappingCorrect?: BoolFieldUpdateOperationsInput | boolean
    modelAnswers?: NullableJsonNullValueInput | InputJsonValue
    storyGrammarPrompts?: NullableJsonNullValueInput | InputJsonValue
    groundTruthId?: IntFieldUpdateOperationsInput | number
    modelAnswerReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    subCategoryReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    supercategoryReasoning?: StringFieldUpdateOperationsInput | string
  }

  export type ModelEvaluationCreateManyInput = {
    id?: number
    problemId: number
    tokenUsage: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    predictedCategory?: $Enums.Category | null
    predictedSubcategory?: $Enums.Subcategory | null
    modelName: $Enums.AIModelName
    answer?: number | null
    isAnswerCorrect: boolean
    isModelMappingCorrect: boolean
    modelAnswers?: NullableJsonNullValueInput | InputJsonValue
    storyGrammarPrompts?: NullableJsonNullValueInput | InputJsonValue
    groundTruthId: number
    modelAnswerReasoning?: string | null
    subCategoryReasoning?: string | null
    supercategoryReasoning: string
  }

  export type ModelEvaluationUpdateManyMutationInput = {
    tokenUsage?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    predictedCategory?: NullableEnumCategoryFieldUpdateOperationsInput | $Enums.Category | null
    predictedSubcategory?: NullableEnumSubcategoryFieldUpdateOperationsInput | $Enums.Subcategory | null
    modelName?: EnumAIModelNameFieldUpdateOperationsInput | $Enums.AIModelName
    answer?: NullableIntFieldUpdateOperationsInput | number | null
    isAnswerCorrect?: BoolFieldUpdateOperationsInput | boolean
    isModelMappingCorrect?: BoolFieldUpdateOperationsInput | boolean
    modelAnswers?: NullableJsonNullValueInput | InputJsonValue
    storyGrammarPrompts?: NullableJsonNullValueInput | InputJsonValue
    modelAnswerReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    subCategoryReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    supercategoryReasoning?: StringFieldUpdateOperationsInput | string
  }

  export type ModelEvaluationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    problemId?: IntFieldUpdateOperationsInput | number
    tokenUsage?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    predictedCategory?: NullableEnumCategoryFieldUpdateOperationsInput | $Enums.Category | null
    predictedSubcategory?: NullableEnumSubcategoryFieldUpdateOperationsInput | $Enums.Subcategory | null
    modelName?: EnumAIModelNameFieldUpdateOperationsInput | $Enums.AIModelName
    answer?: NullableIntFieldUpdateOperationsInput | number | null
    isAnswerCorrect?: BoolFieldUpdateOperationsInput | boolean
    isModelMappingCorrect?: BoolFieldUpdateOperationsInput | boolean
    modelAnswers?: NullableJsonNullValueInput | InputJsonValue
    storyGrammarPrompts?: NullableJsonNullValueInput | InputJsonValue
    groundTruthId?: IntFieldUpdateOperationsInput | number
    modelAnswerReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    subCategoryReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    supercategoryReasoning?: StringFieldUpdateOperationsInput | string
  }

  export type QuizSessionCreateInput = {
    startTime?: Date | string
    endTime?: Date | string | null
    status?: $Enums.QuizStatus
    settings?: NullableJsonNullValueInput | InputJsonValue
    attempts?: QuizAttemptCreateNestedManyWithoutSessionInput
    quizCodes?: QuizCodeCreateNestedManyWithoutSessionInput
    class: ClassCreateNestedOneWithoutQuizSessionsInput
    teacher: TeacherCreateNestedOneWithoutQuizSessionsInput
  }

  export type QuizSessionUncheckedCreateInput = {
    id?: number
    classId: number
    teacherId: number
    startTime?: Date | string
    endTime?: Date | string | null
    status?: $Enums.QuizStatus
    settings?: NullableJsonNullValueInput | InputJsonValue
    attempts?: QuizAttemptUncheckedCreateNestedManyWithoutSessionInput
    quizCodes?: QuizCodeUncheckedCreateNestedManyWithoutSessionInput
  }

  export type QuizSessionUpdateInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    settings?: NullableJsonNullValueInput | InputJsonValue
    attempts?: QuizAttemptUpdateManyWithoutSessionNestedInput
    quizCodes?: QuizCodeUpdateManyWithoutSessionNestedInput
    class?: ClassUpdateOneRequiredWithoutQuizSessionsNestedInput
    teacher?: TeacherUpdateOneRequiredWithoutQuizSessionsNestedInput
  }

  export type QuizSessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    settings?: NullableJsonNullValueInput | InputJsonValue
    attempts?: QuizAttemptUncheckedUpdateManyWithoutSessionNestedInput
    quizCodes?: QuizCodeUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type QuizSessionCreateManyInput = {
    id?: number
    classId: number
    teacherId: number
    startTime?: Date | string
    endTime?: Date | string | null
    status?: $Enums.QuizStatus
    settings?: NullableJsonNullValueInput | InputJsonValue
  }

  export type QuizSessionUpdateManyMutationInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    settings?: NullableJsonNullValueInput | InputJsonValue
  }

  export type QuizSessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    settings?: NullableJsonNullValueInput | InputJsonValue
  }

  export type QuizCodeCreateInput = {
    code: string
    createdAt?: Date | string
    session: QuizSessionCreateNestedOneWithoutQuizCodesInput
    student: StudentCreateNestedOneWithoutQuizCodesInput
  }

  export type QuizCodeUncheckedCreateInput = {
    code: string
    sessionId: number
    studentId: number
    createdAt?: Date | string
  }

  export type QuizCodeUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: QuizSessionUpdateOneRequiredWithoutQuizCodesNestedInput
    student?: StudentUpdateOneRequiredWithoutQuizCodesNestedInput
  }

  export type QuizCodeUncheckedUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    sessionId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizCodeCreateManyInput = {
    code: string
    sessionId: number
    studentId: number
    createdAt?: Date | string
  }

  export type QuizCodeUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizCodeUncheckedUpdateManyInput = {
    code?: StringFieldUpdateOperationsInput | string
    sessionId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizAttemptCreateInput = {
    startTime?: Date | string
    endTime?: Date | string | null
    responses?: QuizResponseCreateNestedManyWithoutAttemptInput
    session: QuizSessionCreateNestedOneWithoutAttemptsInput
    student: StudentCreateNestedOneWithoutQuizAttemptsInput
  }

  export type QuizAttemptUncheckedCreateInput = {
    id?: number
    sessionId: number
    studentId: number
    startTime?: Date | string
    endTime?: Date | string | null
    responses?: QuizResponseUncheckedCreateNestedManyWithoutAttemptInput
  }

  export type QuizAttemptUpdateInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responses?: QuizResponseUpdateManyWithoutAttemptNestedInput
    session?: QuizSessionUpdateOneRequiredWithoutAttemptsNestedInput
    student?: StudentUpdateOneRequiredWithoutQuizAttemptsNestedInput
  }

  export type QuizAttemptUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responses?: QuizResponseUncheckedUpdateManyWithoutAttemptNestedInput
  }

  export type QuizAttemptCreateManyInput = {
    id?: number
    sessionId: number
    studentId: number
    startTime?: Date | string
    endTime?: Date | string | null
  }

  export type QuizAttemptUpdateManyMutationInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuizAttemptUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuizResponseCreateInput = {
    studentAnswer?: number | null
    timeSpent: number
    storyGrammarAnswers?: NullableJsonNullValueInput | InputJsonValue
    finalAnswerCorrect?: boolean | null
    storyGrammarCorrect?: boolean | null
    attempt: QuizAttemptCreateNestedOneWithoutResponsesInput
    problem: ProblemCreateNestedOneWithoutQuizResponsesInput
  }

  export type QuizResponseUncheckedCreateInput = {
    id?: number
    attemptId: number
    problemId: number
    studentAnswer?: number | null
    timeSpent: number
    storyGrammarAnswers?: NullableJsonNullValueInput | InputJsonValue
    finalAnswerCorrect?: boolean | null
    storyGrammarCorrect?: boolean | null
  }

  export type QuizResponseUpdateInput = {
    studentAnswer?: NullableIntFieldUpdateOperationsInput | number | null
    timeSpent?: IntFieldUpdateOperationsInput | number
    storyGrammarAnswers?: NullableJsonNullValueInput | InputJsonValue
    finalAnswerCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    storyGrammarCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    attempt?: QuizAttemptUpdateOneRequiredWithoutResponsesNestedInput
    problem?: ProblemUpdateOneRequiredWithoutQuizResponsesNestedInput
  }

  export type QuizResponseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    attemptId?: IntFieldUpdateOperationsInput | number
    problemId?: IntFieldUpdateOperationsInput | number
    studentAnswer?: NullableIntFieldUpdateOperationsInput | number | null
    timeSpent?: IntFieldUpdateOperationsInput | number
    storyGrammarAnswers?: NullableJsonNullValueInput | InputJsonValue
    finalAnswerCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    storyGrammarCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type QuizResponseCreateManyInput = {
    id?: number
    attemptId: number
    problemId: number
    studentAnswer?: number | null
    timeSpent: number
    storyGrammarAnswers?: NullableJsonNullValueInput | InputJsonValue
    finalAnswerCorrect?: boolean | null
    storyGrammarCorrect?: boolean | null
  }

  export type QuizResponseUpdateManyMutationInput = {
    studentAnswer?: NullableIntFieldUpdateOperationsInput | number | null
    timeSpent?: IntFieldUpdateOperationsInput | number
    storyGrammarAnswers?: NullableJsonNullValueInput | InputJsonValue
    finalAnswerCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    storyGrammarCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type QuizResponseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    attemptId?: IntFieldUpdateOperationsInput | number
    problemId?: IntFieldUpdateOperationsInput | number
    studentAnswer?: NullableIntFieldUpdateOperationsInput | number | null
    timeSpent?: IntFieldUpdateOperationsInput | number
    storyGrammarAnswers?: NullableJsonNullValueInput | InputJsonValue
    finalAnswerCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    storyGrammarCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ClassListRelationFilter = {
    every?: ClassWhereInput
    some?: ClassWhereInput
    none?: ClassWhereInput
  }

  export type QuizSessionListRelationFilter = {
    every?: QuizSessionWhereInput
    some?: QuizSessionWhereInput
    none?: QuizSessionWhereInput
  }

  export type ClassOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeacherCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
  }

  export type TeacherAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TeacherMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
  }

  export type TeacherMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
  }

  export type TeacherSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TeacherScalarRelationFilter = {
    is?: TeacherWhereInput
    isNot?: TeacherWhereInput
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassTeacherIdNameCompoundUniqueInput = {
    teacherId: number
    name: string
  }

  export type ClassCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
  }

  export type ClassAvgOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
  }

  export type ClassMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
  }

  export type ClassMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
  }

  export type ClassSumOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
  }

  export type QuizAttemptListRelationFilter = {
    every?: QuizAttemptWhereInput
    some?: QuizAttemptWhereInput
    none?: QuizAttemptWhereInput
  }

  export type QuizCodeListRelationFilter = {
    every?: QuizCodeWhereInput
    some?: QuizCodeWhereInput
    none?: QuizCodeWhereInput
  }

  export type ClassScalarRelationFilter = {
    is?: ClassWhereInput
    isNot?: ClassWhereInput
  }

  export type QuizAttemptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizCodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    classId?: SortOrder
    userName?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    classId?: SortOrder
    userName?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    classId?: SortOrder
    userName?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
  }

  export type GroundTruthScalarRelationFilter = {
    is?: GroundTruthWhereInput
    isNot?: GroundTruthWhereInput
  }

  export type ModelEvaluationListRelationFilter = {
    every?: ModelEvaluationWhereInput
    some?: ModelEvaluationWhereInput
    none?: ModelEvaluationWhereInput
  }

  export type QuizResponseListRelationFilter = {
    every?: QuizResponseWhereInput
    some?: QuizResponseWhereInput
    none?: QuizResponseWhereInput
  }

  export type ModelEvaluationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProblemCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    groundTruthId?: SortOrder
  }

  export type ProblemAvgOrderByAggregateInput = {
    id?: SortOrder
    answer?: SortOrder
    groundTruthId?: SortOrder
  }

  export type ProblemMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    groundTruthId?: SortOrder
  }

  export type ProblemMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    groundTruthId?: SortOrder
  }

  export type ProblemSumOrderByAggregateInput = {
    id?: SortOrder
    answer?: SortOrder
    groundTruthId?: SortOrder
  }

  export type EnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type EnumSubcategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Subcategory | EnumSubcategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Subcategory[] | ListEnumSubcategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Subcategory[] | ListEnumSubcategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumSubcategoryFilter<$PrismaModel> | $Enums.Subcategory
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ProblemNullableScalarRelationFilter = {
    is?: ProblemWhereInput | null
    isNot?: ProblemWhereInput | null
  }

  export type GroundTruthCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    answer?: SortOrder
    modelAnswers?: SortOrder
  }

  export type GroundTruthAvgOrderByAggregateInput = {
    id?: SortOrder
    answer?: SortOrder
  }

  export type GroundTruthMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    answer?: SortOrder
  }

  export type GroundTruthMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    answer?: SortOrder
  }

  export type GroundTruthSumOrderByAggregateInput = {
    id?: SortOrder
    answer?: SortOrder
  }

  export type EnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type EnumSubcategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Subcategory | EnumSubcategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Subcategory[] | ListEnumSubcategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Subcategory[] | ListEnumSubcategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumSubcategoryWithAggregatesFilter<$PrismaModel> | $Enums.Subcategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubcategoryFilter<$PrismaModel>
    _max?: NestedEnumSubcategoryFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumCategoryNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCategoryNullableFilter<$PrismaModel> | $Enums.Category | null
  }

  export type EnumSubcategoryNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Subcategory | EnumSubcategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.Subcategory[] | ListEnumSubcategoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Subcategory[] | ListEnumSubcategoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSubcategoryNullableFilter<$PrismaModel> | $Enums.Subcategory | null
  }

  export type EnumAIModelNameFilter<$PrismaModel = never> = {
    equals?: $Enums.AIModelName | EnumAIModelNameFieldRefInput<$PrismaModel>
    in?: $Enums.AIModelName[] | ListEnumAIModelNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.AIModelName[] | ListEnumAIModelNameFieldRefInput<$PrismaModel>
    not?: NestedEnumAIModelNameFilter<$PrismaModel> | $Enums.AIModelName
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ProblemScalarRelationFilter = {
    is?: ProblemWhereInput
    isNot?: ProblemWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ModelEvaluationCountOrderByAggregateInput = {
    id?: SortOrder
    problemId?: SortOrder
    tokenUsage?: SortOrder
    createdAt?: SortOrder
    predictedCategory?: SortOrder
    predictedSubcategory?: SortOrder
    modelName?: SortOrder
    answer?: SortOrder
    isAnswerCorrect?: SortOrder
    isModelMappingCorrect?: SortOrder
    modelAnswers?: SortOrder
    storyGrammarPrompts?: SortOrder
    groundTruthId?: SortOrder
    modelAnswerReasoning?: SortOrder
    subCategoryReasoning?: SortOrder
    supercategoryReasoning?: SortOrder
  }

  export type ModelEvaluationAvgOrderByAggregateInput = {
    id?: SortOrder
    problemId?: SortOrder
    answer?: SortOrder
    groundTruthId?: SortOrder
  }

  export type ModelEvaluationMaxOrderByAggregateInput = {
    id?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    predictedCategory?: SortOrder
    predictedSubcategory?: SortOrder
    modelName?: SortOrder
    answer?: SortOrder
    isAnswerCorrect?: SortOrder
    isModelMappingCorrect?: SortOrder
    groundTruthId?: SortOrder
    modelAnswerReasoning?: SortOrder
    subCategoryReasoning?: SortOrder
    supercategoryReasoning?: SortOrder
  }

  export type ModelEvaluationMinOrderByAggregateInput = {
    id?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    predictedCategory?: SortOrder
    predictedSubcategory?: SortOrder
    modelName?: SortOrder
    answer?: SortOrder
    isAnswerCorrect?: SortOrder
    isModelMappingCorrect?: SortOrder
    groundTruthId?: SortOrder
    modelAnswerReasoning?: SortOrder
    subCategoryReasoning?: SortOrder
    supercategoryReasoning?: SortOrder
  }

  export type ModelEvaluationSumOrderByAggregateInput = {
    id?: SortOrder
    problemId?: SortOrder
    answer?: SortOrder
    groundTruthId?: SortOrder
  }

  export type EnumCategoryNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCategoryNullableWithAggregatesFilter<$PrismaModel> | $Enums.Category | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCategoryNullableFilter<$PrismaModel>
    _max?: NestedEnumCategoryNullableFilter<$PrismaModel>
  }

  export type EnumSubcategoryNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Subcategory | EnumSubcategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.Subcategory[] | ListEnumSubcategoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Subcategory[] | ListEnumSubcategoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSubcategoryNullableWithAggregatesFilter<$PrismaModel> | $Enums.Subcategory | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSubcategoryNullableFilter<$PrismaModel>
    _max?: NestedEnumSubcategoryNullableFilter<$PrismaModel>
  }

  export type EnumAIModelNameWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AIModelName | EnumAIModelNameFieldRefInput<$PrismaModel>
    in?: $Enums.AIModelName[] | ListEnumAIModelNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.AIModelName[] | ListEnumAIModelNameFieldRefInput<$PrismaModel>
    not?: NestedEnumAIModelNameWithAggregatesFilter<$PrismaModel> | $Enums.AIModelName
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAIModelNameFilter<$PrismaModel>
    _max?: NestedEnumAIModelNameFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumQuizStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.QuizStatus | EnumQuizStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuizStatus[] | ListEnumQuizStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuizStatus[] | ListEnumQuizStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQuizStatusFilter<$PrismaModel> | $Enums.QuizStatus
  }

  export type QuizSessionCountOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    teacherId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    settings?: SortOrder
  }

  export type QuizSessionAvgOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    teacherId?: SortOrder
  }

  export type QuizSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    teacherId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
  }

  export type QuizSessionMinOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    teacherId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
  }

  export type QuizSessionSumOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    teacherId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumQuizStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuizStatus | EnumQuizStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuizStatus[] | ListEnumQuizStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuizStatus[] | ListEnumQuizStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQuizStatusWithAggregatesFilter<$PrismaModel> | $Enums.QuizStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuizStatusFilter<$PrismaModel>
    _max?: NestedEnumQuizStatusFilter<$PrismaModel>
  }

  export type QuizSessionScalarRelationFilter = {
    is?: QuizSessionWhereInput
    isNot?: QuizSessionWhereInput
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type QuizCodeCountOrderByAggregateInput = {
    code?: SortOrder
    sessionId?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
  }

  export type QuizCodeAvgOrderByAggregateInput = {
    sessionId?: SortOrder
    studentId?: SortOrder
  }

  export type QuizCodeMaxOrderByAggregateInput = {
    code?: SortOrder
    sessionId?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
  }

  export type QuizCodeMinOrderByAggregateInput = {
    code?: SortOrder
    sessionId?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
  }

  export type QuizCodeSumOrderByAggregateInput = {
    sessionId?: SortOrder
    studentId?: SortOrder
  }

  export type QuizAttemptCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    studentId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type QuizAttemptAvgOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    studentId?: SortOrder
  }

  export type QuizAttemptMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    studentId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type QuizAttemptMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    studentId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type QuizAttemptSumOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    studentId?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type QuizAttemptScalarRelationFilter = {
    is?: QuizAttemptWhereInput
    isNot?: QuizAttemptWhereInput
  }

  export type QuizResponseCountOrderByAggregateInput = {
    id?: SortOrder
    attemptId?: SortOrder
    problemId?: SortOrder
    studentAnswer?: SortOrder
    timeSpent?: SortOrder
    storyGrammarAnswers?: SortOrder
    finalAnswerCorrect?: SortOrder
    storyGrammarCorrect?: SortOrder
  }

  export type QuizResponseAvgOrderByAggregateInput = {
    id?: SortOrder
    attemptId?: SortOrder
    problemId?: SortOrder
    studentAnswer?: SortOrder
    timeSpent?: SortOrder
  }

  export type QuizResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    attemptId?: SortOrder
    problemId?: SortOrder
    studentAnswer?: SortOrder
    timeSpent?: SortOrder
    finalAnswerCorrect?: SortOrder
    storyGrammarCorrect?: SortOrder
  }

  export type QuizResponseMinOrderByAggregateInput = {
    id?: SortOrder
    attemptId?: SortOrder
    problemId?: SortOrder
    studentAnswer?: SortOrder
    timeSpent?: SortOrder
    finalAnswerCorrect?: SortOrder
    storyGrammarCorrect?: SortOrder
  }

  export type QuizResponseSumOrderByAggregateInput = {
    id?: SortOrder
    attemptId?: SortOrder
    problemId?: SortOrder
    studentAnswer?: SortOrder
    timeSpent?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type ClassCreateNestedManyWithoutTeacherInput = {
    create?: XOR<ClassCreateWithoutTeacherInput, ClassUncheckedCreateWithoutTeacherInput> | ClassCreateWithoutTeacherInput[] | ClassUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutTeacherInput | ClassCreateOrConnectWithoutTeacherInput[]
    createMany?: ClassCreateManyTeacherInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type QuizSessionCreateNestedManyWithoutTeacherInput = {
    create?: XOR<QuizSessionCreateWithoutTeacherInput, QuizSessionUncheckedCreateWithoutTeacherInput> | QuizSessionCreateWithoutTeacherInput[] | QuizSessionUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: QuizSessionCreateOrConnectWithoutTeacherInput | QuizSessionCreateOrConnectWithoutTeacherInput[]
    createMany?: QuizSessionCreateManyTeacherInputEnvelope
    connect?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
  }

  export type ClassUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<ClassCreateWithoutTeacherInput, ClassUncheckedCreateWithoutTeacherInput> | ClassCreateWithoutTeacherInput[] | ClassUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutTeacherInput | ClassCreateOrConnectWithoutTeacherInput[]
    createMany?: ClassCreateManyTeacherInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type QuizSessionUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<QuizSessionCreateWithoutTeacherInput, QuizSessionUncheckedCreateWithoutTeacherInput> | QuizSessionCreateWithoutTeacherInput[] | QuizSessionUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: QuizSessionCreateOrConnectWithoutTeacherInput | QuizSessionCreateOrConnectWithoutTeacherInput[]
    createMany?: QuizSessionCreateManyTeacherInputEnvelope
    connect?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ClassUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<ClassCreateWithoutTeacherInput, ClassUncheckedCreateWithoutTeacherInput> | ClassCreateWithoutTeacherInput[] | ClassUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutTeacherInput | ClassCreateOrConnectWithoutTeacherInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutTeacherInput | ClassUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: ClassCreateManyTeacherInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutTeacherInput | ClassUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutTeacherInput | ClassUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type QuizSessionUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<QuizSessionCreateWithoutTeacherInput, QuizSessionUncheckedCreateWithoutTeacherInput> | QuizSessionCreateWithoutTeacherInput[] | QuizSessionUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: QuizSessionCreateOrConnectWithoutTeacherInput | QuizSessionCreateOrConnectWithoutTeacherInput[]
    upsert?: QuizSessionUpsertWithWhereUniqueWithoutTeacherInput | QuizSessionUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: QuizSessionCreateManyTeacherInputEnvelope
    set?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
    disconnect?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
    delete?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
    connect?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
    update?: QuizSessionUpdateWithWhereUniqueWithoutTeacherInput | QuizSessionUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: QuizSessionUpdateManyWithWhereWithoutTeacherInput | QuizSessionUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: QuizSessionScalarWhereInput | QuizSessionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClassUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<ClassCreateWithoutTeacherInput, ClassUncheckedCreateWithoutTeacherInput> | ClassCreateWithoutTeacherInput[] | ClassUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutTeacherInput | ClassCreateOrConnectWithoutTeacherInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutTeacherInput | ClassUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: ClassCreateManyTeacherInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutTeacherInput | ClassUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutTeacherInput | ClassUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type QuizSessionUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<QuizSessionCreateWithoutTeacherInput, QuizSessionUncheckedCreateWithoutTeacherInput> | QuizSessionCreateWithoutTeacherInput[] | QuizSessionUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: QuizSessionCreateOrConnectWithoutTeacherInput | QuizSessionCreateOrConnectWithoutTeacherInput[]
    upsert?: QuizSessionUpsertWithWhereUniqueWithoutTeacherInput | QuizSessionUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: QuizSessionCreateManyTeacherInputEnvelope
    set?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
    disconnect?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
    delete?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
    connect?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
    update?: QuizSessionUpdateWithWhereUniqueWithoutTeacherInput | QuizSessionUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: QuizSessionUpdateManyWithWhereWithoutTeacherInput | QuizSessionUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: QuizSessionScalarWhereInput | QuizSessionScalarWhereInput[]
  }

  export type TeacherCreateNestedOneWithoutClassesInput = {
    create?: XOR<TeacherCreateWithoutClassesInput, TeacherUncheckedCreateWithoutClassesInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutClassesInput
    connect?: TeacherWhereUniqueInput
  }

  export type QuizSessionCreateNestedManyWithoutClassInput = {
    create?: XOR<QuizSessionCreateWithoutClassInput, QuizSessionUncheckedCreateWithoutClassInput> | QuizSessionCreateWithoutClassInput[] | QuizSessionUncheckedCreateWithoutClassInput[]
    connectOrCreate?: QuizSessionCreateOrConnectWithoutClassInput | QuizSessionCreateOrConnectWithoutClassInput[]
    createMany?: QuizSessionCreateManyClassInputEnvelope
    connect?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
  }

  export type StudentCreateNestedManyWithoutClassInput = {
    create?: XOR<StudentCreateWithoutClassInput, StudentUncheckedCreateWithoutClassInput> | StudentCreateWithoutClassInput[] | StudentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutClassInput | StudentCreateOrConnectWithoutClassInput[]
    createMany?: StudentCreateManyClassInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type QuizSessionUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<QuizSessionCreateWithoutClassInput, QuizSessionUncheckedCreateWithoutClassInput> | QuizSessionCreateWithoutClassInput[] | QuizSessionUncheckedCreateWithoutClassInput[]
    connectOrCreate?: QuizSessionCreateOrConnectWithoutClassInput | QuizSessionCreateOrConnectWithoutClassInput[]
    createMany?: QuizSessionCreateManyClassInputEnvelope
    connect?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<StudentCreateWithoutClassInput, StudentUncheckedCreateWithoutClassInput> | StudentCreateWithoutClassInput[] | StudentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutClassInput | StudentCreateOrConnectWithoutClassInput[]
    createMany?: StudentCreateManyClassInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type TeacherUpdateOneRequiredWithoutClassesNestedInput = {
    create?: XOR<TeacherCreateWithoutClassesInput, TeacherUncheckedCreateWithoutClassesInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutClassesInput
    upsert?: TeacherUpsertWithoutClassesInput
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutClassesInput, TeacherUpdateWithoutClassesInput>, TeacherUncheckedUpdateWithoutClassesInput>
  }

  export type QuizSessionUpdateManyWithoutClassNestedInput = {
    create?: XOR<QuizSessionCreateWithoutClassInput, QuizSessionUncheckedCreateWithoutClassInput> | QuizSessionCreateWithoutClassInput[] | QuizSessionUncheckedCreateWithoutClassInput[]
    connectOrCreate?: QuizSessionCreateOrConnectWithoutClassInput | QuizSessionCreateOrConnectWithoutClassInput[]
    upsert?: QuizSessionUpsertWithWhereUniqueWithoutClassInput | QuizSessionUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: QuizSessionCreateManyClassInputEnvelope
    set?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
    disconnect?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
    delete?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
    connect?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
    update?: QuizSessionUpdateWithWhereUniqueWithoutClassInput | QuizSessionUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: QuizSessionUpdateManyWithWhereWithoutClassInput | QuizSessionUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: QuizSessionScalarWhereInput | QuizSessionScalarWhereInput[]
  }

  export type StudentUpdateManyWithoutClassNestedInput = {
    create?: XOR<StudentCreateWithoutClassInput, StudentUncheckedCreateWithoutClassInput> | StudentCreateWithoutClassInput[] | StudentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutClassInput | StudentCreateOrConnectWithoutClassInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutClassInput | StudentUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: StudentCreateManyClassInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutClassInput | StudentUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutClassInput | StudentUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type QuizSessionUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<QuizSessionCreateWithoutClassInput, QuizSessionUncheckedCreateWithoutClassInput> | QuizSessionCreateWithoutClassInput[] | QuizSessionUncheckedCreateWithoutClassInput[]
    connectOrCreate?: QuizSessionCreateOrConnectWithoutClassInput | QuizSessionCreateOrConnectWithoutClassInput[]
    upsert?: QuizSessionUpsertWithWhereUniqueWithoutClassInput | QuizSessionUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: QuizSessionCreateManyClassInputEnvelope
    set?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
    disconnect?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
    delete?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
    connect?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
    update?: QuizSessionUpdateWithWhereUniqueWithoutClassInput | QuizSessionUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: QuizSessionUpdateManyWithWhereWithoutClassInput | QuizSessionUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: QuizSessionScalarWhereInput | QuizSessionScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<StudentCreateWithoutClassInput, StudentUncheckedCreateWithoutClassInput> | StudentCreateWithoutClassInput[] | StudentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutClassInput | StudentCreateOrConnectWithoutClassInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutClassInput | StudentUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: StudentCreateManyClassInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutClassInput | StudentUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutClassInput | StudentUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type QuizAttemptCreateNestedManyWithoutStudentInput = {
    create?: XOR<QuizAttemptCreateWithoutStudentInput, QuizAttemptUncheckedCreateWithoutStudentInput> | QuizAttemptCreateWithoutStudentInput[] | QuizAttemptUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutStudentInput | QuizAttemptCreateOrConnectWithoutStudentInput[]
    createMany?: QuizAttemptCreateManyStudentInputEnvelope
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
  }

  export type QuizCodeCreateNestedManyWithoutStudentInput = {
    create?: XOR<QuizCodeCreateWithoutStudentInput, QuizCodeUncheckedCreateWithoutStudentInput> | QuizCodeCreateWithoutStudentInput[] | QuizCodeUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: QuizCodeCreateOrConnectWithoutStudentInput | QuizCodeCreateOrConnectWithoutStudentInput[]
    createMany?: QuizCodeCreateManyStudentInputEnvelope
    connect?: QuizCodeWhereUniqueInput | QuizCodeWhereUniqueInput[]
  }

  export type ClassCreateNestedOneWithoutStudentsInput = {
    create?: XOR<ClassCreateWithoutStudentsInput, ClassUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutStudentsInput
    connect?: ClassWhereUniqueInput
  }

  export type QuizAttemptUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<QuizAttemptCreateWithoutStudentInput, QuizAttemptUncheckedCreateWithoutStudentInput> | QuizAttemptCreateWithoutStudentInput[] | QuizAttemptUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutStudentInput | QuizAttemptCreateOrConnectWithoutStudentInput[]
    createMany?: QuizAttemptCreateManyStudentInputEnvelope
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
  }

  export type QuizCodeUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<QuizCodeCreateWithoutStudentInput, QuizCodeUncheckedCreateWithoutStudentInput> | QuizCodeCreateWithoutStudentInput[] | QuizCodeUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: QuizCodeCreateOrConnectWithoutStudentInput | QuizCodeCreateOrConnectWithoutStudentInput[]
    createMany?: QuizCodeCreateManyStudentInputEnvelope
    connect?: QuizCodeWhereUniqueInput | QuizCodeWhereUniqueInput[]
  }

  export type QuizAttemptUpdateManyWithoutStudentNestedInput = {
    create?: XOR<QuizAttemptCreateWithoutStudentInput, QuizAttemptUncheckedCreateWithoutStudentInput> | QuizAttemptCreateWithoutStudentInput[] | QuizAttemptUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutStudentInput | QuizAttemptCreateOrConnectWithoutStudentInput[]
    upsert?: QuizAttemptUpsertWithWhereUniqueWithoutStudentInput | QuizAttemptUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: QuizAttemptCreateManyStudentInputEnvelope
    set?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    disconnect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    delete?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    update?: QuizAttemptUpdateWithWhereUniqueWithoutStudentInput | QuizAttemptUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: QuizAttemptUpdateManyWithWhereWithoutStudentInput | QuizAttemptUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: QuizAttemptScalarWhereInput | QuizAttemptScalarWhereInput[]
  }

  export type QuizCodeUpdateManyWithoutStudentNestedInput = {
    create?: XOR<QuizCodeCreateWithoutStudentInput, QuizCodeUncheckedCreateWithoutStudentInput> | QuizCodeCreateWithoutStudentInput[] | QuizCodeUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: QuizCodeCreateOrConnectWithoutStudentInput | QuizCodeCreateOrConnectWithoutStudentInput[]
    upsert?: QuizCodeUpsertWithWhereUniqueWithoutStudentInput | QuizCodeUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: QuizCodeCreateManyStudentInputEnvelope
    set?: QuizCodeWhereUniqueInput | QuizCodeWhereUniqueInput[]
    disconnect?: QuizCodeWhereUniqueInput | QuizCodeWhereUniqueInput[]
    delete?: QuizCodeWhereUniqueInput | QuizCodeWhereUniqueInput[]
    connect?: QuizCodeWhereUniqueInput | QuizCodeWhereUniqueInput[]
    update?: QuizCodeUpdateWithWhereUniqueWithoutStudentInput | QuizCodeUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: QuizCodeUpdateManyWithWhereWithoutStudentInput | QuizCodeUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: QuizCodeScalarWhereInput | QuizCodeScalarWhereInput[]
  }

  export type ClassUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<ClassCreateWithoutStudentsInput, ClassUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutStudentsInput
    upsert?: ClassUpsertWithoutStudentsInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutStudentsInput, ClassUpdateWithoutStudentsInput>, ClassUncheckedUpdateWithoutStudentsInput>
  }

  export type QuizAttemptUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<QuizAttemptCreateWithoutStudentInput, QuizAttemptUncheckedCreateWithoutStudentInput> | QuizAttemptCreateWithoutStudentInput[] | QuizAttemptUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutStudentInput | QuizAttemptCreateOrConnectWithoutStudentInput[]
    upsert?: QuizAttemptUpsertWithWhereUniqueWithoutStudentInput | QuizAttemptUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: QuizAttemptCreateManyStudentInputEnvelope
    set?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    disconnect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    delete?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    update?: QuizAttemptUpdateWithWhereUniqueWithoutStudentInput | QuizAttemptUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: QuizAttemptUpdateManyWithWhereWithoutStudentInput | QuizAttemptUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: QuizAttemptScalarWhereInput | QuizAttemptScalarWhereInput[]
  }

  export type QuizCodeUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<QuizCodeCreateWithoutStudentInput, QuizCodeUncheckedCreateWithoutStudentInput> | QuizCodeCreateWithoutStudentInput[] | QuizCodeUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: QuizCodeCreateOrConnectWithoutStudentInput | QuizCodeCreateOrConnectWithoutStudentInput[]
    upsert?: QuizCodeUpsertWithWhereUniqueWithoutStudentInput | QuizCodeUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: QuizCodeCreateManyStudentInputEnvelope
    set?: QuizCodeWhereUniqueInput | QuizCodeWhereUniqueInput[]
    disconnect?: QuizCodeWhereUniqueInput | QuizCodeWhereUniqueInput[]
    delete?: QuizCodeWhereUniqueInput | QuizCodeWhereUniqueInput[]
    connect?: QuizCodeWhereUniqueInput | QuizCodeWhereUniqueInput[]
    update?: QuizCodeUpdateWithWhereUniqueWithoutStudentInput | QuizCodeUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: QuizCodeUpdateManyWithWhereWithoutStudentInput | QuizCodeUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: QuizCodeScalarWhereInput | QuizCodeScalarWhereInput[]
  }

  export type GroundTruthCreateNestedOneWithoutProblemInput = {
    create?: XOR<GroundTruthCreateWithoutProblemInput, GroundTruthUncheckedCreateWithoutProblemInput>
    connectOrCreate?: GroundTruthCreateOrConnectWithoutProblemInput
    connect?: GroundTruthWhereUniqueInput
  }

  export type ModelEvaluationCreateNestedManyWithoutProblemInput = {
    create?: XOR<ModelEvaluationCreateWithoutProblemInput, ModelEvaluationUncheckedCreateWithoutProblemInput> | ModelEvaluationCreateWithoutProblemInput[] | ModelEvaluationUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ModelEvaluationCreateOrConnectWithoutProblemInput | ModelEvaluationCreateOrConnectWithoutProblemInput[]
    createMany?: ModelEvaluationCreateManyProblemInputEnvelope
    connect?: ModelEvaluationWhereUniqueInput | ModelEvaluationWhereUniqueInput[]
  }

  export type QuizResponseCreateNestedManyWithoutProblemInput = {
    create?: XOR<QuizResponseCreateWithoutProblemInput, QuizResponseUncheckedCreateWithoutProblemInput> | QuizResponseCreateWithoutProblemInput[] | QuizResponseUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: QuizResponseCreateOrConnectWithoutProblemInput | QuizResponseCreateOrConnectWithoutProblemInput[]
    createMany?: QuizResponseCreateManyProblemInputEnvelope
    connect?: QuizResponseWhereUniqueInput | QuizResponseWhereUniqueInput[]
  }

  export type ModelEvaluationUncheckedCreateNestedManyWithoutProblemInput = {
    create?: XOR<ModelEvaluationCreateWithoutProblemInput, ModelEvaluationUncheckedCreateWithoutProblemInput> | ModelEvaluationCreateWithoutProblemInput[] | ModelEvaluationUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ModelEvaluationCreateOrConnectWithoutProblemInput | ModelEvaluationCreateOrConnectWithoutProblemInput[]
    createMany?: ModelEvaluationCreateManyProblemInputEnvelope
    connect?: ModelEvaluationWhereUniqueInput | ModelEvaluationWhereUniqueInput[]
  }

  export type QuizResponseUncheckedCreateNestedManyWithoutProblemInput = {
    create?: XOR<QuizResponseCreateWithoutProblemInput, QuizResponseUncheckedCreateWithoutProblemInput> | QuizResponseCreateWithoutProblemInput[] | QuizResponseUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: QuizResponseCreateOrConnectWithoutProblemInput | QuizResponseCreateOrConnectWithoutProblemInput[]
    createMany?: QuizResponseCreateManyProblemInputEnvelope
    connect?: QuizResponseWhereUniqueInput | QuizResponseWhereUniqueInput[]
  }

  export type GroundTruthUpdateOneRequiredWithoutProblemNestedInput = {
    create?: XOR<GroundTruthCreateWithoutProblemInput, GroundTruthUncheckedCreateWithoutProblemInput>
    connectOrCreate?: GroundTruthCreateOrConnectWithoutProblemInput
    upsert?: GroundTruthUpsertWithoutProblemInput
    connect?: GroundTruthWhereUniqueInput
    update?: XOR<XOR<GroundTruthUpdateToOneWithWhereWithoutProblemInput, GroundTruthUpdateWithoutProblemInput>, GroundTruthUncheckedUpdateWithoutProblemInput>
  }

  export type ModelEvaluationUpdateManyWithoutProblemNestedInput = {
    create?: XOR<ModelEvaluationCreateWithoutProblemInput, ModelEvaluationUncheckedCreateWithoutProblemInput> | ModelEvaluationCreateWithoutProblemInput[] | ModelEvaluationUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ModelEvaluationCreateOrConnectWithoutProblemInput | ModelEvaluationCreateOrConnectWithoutProblemInput[]
    upsert?: ModelEvaluationUpsertWithWhereUniqueWithoutProblemInput | ModelEvaluationUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: ModelEvaluationCreateManyProblemInputEnvelope
    set?: ModelEvaluationWhereUniqueInput | ModelEvaluationWhereUniqueInput[]
    disconnect?: ModelEvaluationWhereUniqueInput | ModelEvaluationWhereUniqueInput[]
    delete?: ModelEvaluationWhereUniqueInput | ModelEvaluationWhereUniqueInput[]
    connect?: ModelEvaluationWhereUniqueInput | ModelEvaluationWhereUniqueInput[]
    update?: ModelEvaluationUpdateWithWhereUniqueWithoutProblemInput | ModelEvaluationUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: ModelEvaluationUpdateManyWithWhereWithoutProblemInput | ModelEvaluationUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: ModelEvaluationScalarWhereInput | ModelEvaluationScalarWhereInput[]
  }

  export type QuizResponseUpdateManyWithoutProblemNestedInput = {
    create?: XOR<QuizResponseCreateWithoutProblemInput, QuizResponseUncheckedCreateWithoutProblemInput> | QuizResponseCreateWithoutProblemInput[] | QuizResponseUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: QuizResponseCreateOrConnectWithoutProblemInput | QuizResponseCreateOrConnectWithoutProblemInput[]
    upsert?: QuizResponseUpsertWithWhereUniqueWithoutProblemInput | QuizResponseUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: QuizResponseCreateManyProblemInputEnvelope
    set?: QuizResponseWhereUniqueInput | QuizResponseWhereUniqueInput[]
    disconnect?: QuizResponseWhereUniqueInput | QuizResponseWhereUniqueInput[]
    delete?: QuizResponseWhereUniqueInput | QuizResponseWhereUniqueInput[]
    connect?: QuizResponseWhereUniqueInput | QuizResponseWhereUniqueInput[]
    update?: QuizResponseUpdateWithWhereUniqueWithoutProblemInput | QuizResponseUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: QuizResponseUpdateManyWithWhereWithoutProblemInput | QuizResponseUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: QuizResponseScalarWhereInput | QuizResponseScalarWhereInput[]
  }

  export type ModelEvaluationUncheckedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<ModelEvaluationCreateWithoutProblemInput, ModelEvaluationUncheckedCreateWithoutProblemInput> | ModelEvaluationCreateWithoutProblemInput[] | ModelEvaluationUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ModelEvaluationCreateOrConnectWithoutProblemInput | ModelEvaluationCreateOrConnectWithoutProblemInput[]
    upsert?: ModelEvaluationUpsertWithWhereUniqueWithoutProblemInput | ModelEvaluationUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: ModelEvaluationCreateManyProblemInputEnvelope
    set?: ModelEvaluationWhereUniqueInput | ModelEvaluationWhereUniqueInput[]
    disconnect?: ModelEvaluationWhereUniqueInput | ModelEvaluationWhereUniqueInput[]
    delete?: ModelEvaluationWhereUniqueInput | ModelEvaluationWhereUniqueInput[]
    connect?: ModelEvaluationWhereUniqueInput | ModelEvaluationWhereUniqueInput[]
    update?: ModelEvaluationUpdateWithWhereUniqueWithoutProblemInput | ModelEvaluationUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: ModelEvaluationUpdateManyWithWhereWithoutProblemInput | ModelEvaluationUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: ModelEvaluationScalarWhereInput | ModelEvaluationScalarWhereInput[]
  }

  export type QuizResponseUncheckedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<QuizResponseCreateWithoutProblemInput, QuizResponseUncheckedCreateWithoutProblemInput> | QuizResponseCreateWithoutProblemInput[] | QuizResponseUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: QuizResponseCreateOrConnectWithoutProblemInput | QuizResponseCreateOrConnectWithoutProblemInput[]
    upsert?: QuizResponseUpsertWithWhereUniqueWithoutProblemInput | QuizResponseUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: QuizResponseCreateManyProblemInputEnvelope
    set?: QuizResponseWhereUniqueInput | QuizResponseWhereUniqueInput[]
    disconnect?: QuizResponseWhereUniqueInput | QuizResponseWhereUniqueInput[]
    delete?: QuizResponseWhereUniqueInput | QuizResponseWhereUniqueInput[]
    connect?: QuizResponseWhereUniqueInput | QuizResponseWhereUniqueInput[]
    update?: QuizResponseUpdateWithWhereUniqueWithoutProblemInput | QuizResponseUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: QuizResponseUpdateManyWithWhereWithoutProblemInput | QuizResponseUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: QuizResponseScalarWhereInput | QuizResponseScalarWhereInput[]
  }

  export type ProblemCreateNestedOneWithoutGroundTruthInput = {
    create?: XOR<ProblemCreateWithoutGroundTruthInput, ProblemUncheckedCreateWithoutGroundTruthInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutGroundTruthInput
    connect?: ProblemWhereUniqueInput
  }

  export type ModelEvaluationCreateNestedManyWithoutGroundTruthInput = {
    create?: XOR<ModelEvaluationCreateWithoutGroundTruthInput, ModelEvaluationUncheckedCreateWithoutGroundTruthInput> | ModelEvaluationCreateWithoutGroundTruthInput[] | ModelEvaluationUncheckedCreateWithoutGroundTruthInput[]
    connectOrCreate?: ModelEvaluationCreateOrConnectWithoutGroundTruthInput | ModelEvaluationCreateOrConnectWithoutGroundTruthInput[]
    createMany?: ModelEvaluationCreateManyGroundTruthInputEnvelope
    connect?: ModelEvaluationWhereUniqueInput | ModelEvaluationWhereUniqueInput[]
  }

  export type ProblemUncheckedCreateNestedOneWithoutGroundTruthInput = {
    create?: XOR<ProblemCreateWithoutGroundTruthInput, ProblemUncheckedCreateWithoutGroundTruthInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutGroundTruthInput
    connect?: ProblemWhereUniqueInput
  }

  export type ModelEvaluationUncheckedCreateNestedManyWithoutGroundTruthInput = {
    create?: XOR<ModelEvaluationCreateWithoutGroundTruthInput, ModelEvaluationUncheckedCreateWithoutGroundTruthInput> | ModelEvaluationCreateWithoutGroundTruthInput[] | ModelEvaluationUncheckedCreateWithoutGroundTruthInput[]
    connectOrCreate?: ModelEvaluationCreateOrConnectWithoutGroundTruthInput | ModelEvaluationCreateOrConnectWithoutGroundTruthInput[]
    createMany?: ModelEvaluationCreateManyGroundTruthInputEnvelope
    connect?: ModelEvaluationWhereUniqueInput | ModelEvaluationWhereUniqueInput[]
  }

  export type EnumCategoryFieldUpdateOperationsInput = {
    set?: $Enums.Category
  }

  export type EnumSubcategoryFieldUpdateOperationsInput = {
    set?: $Enums.Subcategory
  }

  export type ProblemUpdateOneWithoutGroundTruthNestedInput = {
    create?: XOR<ProblemCreateWithoutGroundTruthInput, ProblemUncheckedCreateWithoutGroundTruthInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutGroundTruthInput
    upsert?: ProblemUpsertWithoutGroundTruthInput
    disconnect?: ProblemWhereInput | boolean
    delete?: ProblemWhereInput | boolean
    connect?: ProblemWhereUniqueInput
    update?: XOR<XOR<ProblemUpdateToOneWithWhereWithoutGroundTruthInput, ProblemUpdateWithoutGroundTruthInput>, ProblemUncheckedUpdateWithoutGroundTruthInput>
  }

  export type ModelEvaluationUpdateManyWithoutGroundTruthNestedInput = {
    create?: XOR<ModelEvaluationCreateWithoutGroundTruthInput, ModelEvaluationUncheckedCreateWithoutGroundTruthInput> | ModelEvaluationCreateWithoutGroundTruthInput[] | ModelEvaluationUncheckedCreateWithoutGroundTruthInput[]
    connectOrCreate?: ModelEvaluationCreateOrConnectWithoutGroundTruthInput | ModelEvaluationCreateOrConnectWithoutGroundTruthInput[]
    upsert?: ModelEvaluationUpsertWithWhereUniqueWithoutGroundTruthInput | ModelEvaluationUpsertWithWhereUniqueWithoutGroundTruthInput[]
    createMany?: ModelEvaluationCreateManyGroundTruthInputEnvelope
    set?: ModelEvaluationWhereUniqueInput | ModelEvaluationWhereUniqueInput[]
    disconnect?: ModelEvaluationWhereUniqueInput | ModelEvaluationWhereUniqueInput[]
    delete?: ModelEvaluationWhereUniqueInput | ModelEvaluationWhereUniqueInput[]
    connect?: ModelEvaluationWhereUniqueInput | ModelEvaluationWhereUniqueInput[]
    update?: ModelEvaluationUpdateWithWhereUniqueWithoutGroundTruthInput | ModelEvaluationUpdateWithWhereUniqueWithoutGroundTruthInput[]
    updateMany?: ModelEvaluationUpdateManyWithWhereWithoutGroundTruthInput | ModelEvaluationUpdateManyWithWhereWithoutGroundTruthInput[]
    deleteMany?: ModelEvaluationScalarWhereInput | ModelEvaluationScalarWhereInput[]
  }

  export type ProblemUncheckedUpdateOneWithoutGroundTruthNestedInput = {
    create?: XOR<ProblemCreateWithoutGroundTruthInput, ProblemUncheckedCreateWithoutGroundTruthInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutGroundTruthInput
    upsert?: ProblemUpsertWithoutGroundTruthInput
    disconnect?: ProblemWhereInput | boolean
    delete?: ProblemWhereInput | boolean
    connect?: ProblemWhereUniqueInput
    update?: XOR<XOR<ProblemUpdateToOneWithWhereWithoutGroundTruthInput, ProblemUpdateWithoutGroundTruthInput>, ProblemUncheckedUpdateWithoutGroundTruthInput>
  }

  export type ModelEvaluationUncheckedUpdateManyWithoutGroundTruthNestedInput = {
    create?: XOR<ModelEvaluationCreateWithoutGroundTruthInput, ModelEvaluationUncheckedCreateWithoutGroundTruthInput> | ModelEvaluationCreateWithoutGroundTruthInput[] | ModelEvaluationUncheckedCreateWithoutGroundTruthInput[]
    connectOrCreate?: ModelEvaluationCreateOrConnectWithoutGroundTruthInput | ModelEvaluationCreateOrConnectWithoutGroundTruthInput[]
    upsert?: ModelEvaluationUpsertWithWhereUniqueWithoutGroundTruthInput | ModelEvaluationUpsertWithWhereUniqueWithoutGroundTruthInput[]
    createMany?: ModelEvaluationCreateManyGroundTruthInputEnvelope
    set?: ModelEvaluationWhereUniqueInput | ModelEvaluationWhereUniqueInput[]
    disconnect?: ModelEvaluationWhereUniqueInput | ModelEvaluationWhereUniqueInput[]
    delete?: ModelEvaluationWhereUniqueInput | ModelEvaluationWhereUniqueInput[]
    connect?: ModelEvaluationWhereUniqueInput | ModelEvaluationWhereUniqueInput[]
    update?: ModelEvaluationUpdateWithWhereUniqueWithoutGroundTruthInput | ModelEvaluationUpdateWithWhereUniqueWithoutGroundTruthInput[]
    updateMany?: ModelEvaluationUpdateManyWithWhereWithoutGroundTruthInput | ModelEvaluationUpdateManyWithWhereWithoutGroundTruthInput[]
    deleteMany?: ModelEvaluationScalarWhereInput | ModelEvaluationScalarWhereInput[]
  }

  export type GroundTruthCreateNestedOneWithoutModelEvaluationsInput = {
    create?: XOR<GroundTruthCreateWithoutModelEvaluationsInput, GroundTruthUncheckedCreateWithoutModelEvaluationsInput>
    connectOrCreate?: GroundTruthCreateOrConnectWithoutModelEvaluationsInput
    connect?: GroundTruthWhereUniqueInput
  }

  export type ProblemCreateNestedOneWithoutModelEvaluationsInput = {
    create?: XOR<ProblemCreateWithoutModelEvaluationsInput, ProblemUncheckedCreateWithoutModelEvaluationsInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutModelEvaluationsInput
    connect?: ProblemWhereUniqueInput
  }

  export type NullableEnumCategoryFieldUpdateOperationsInput = {
    set?: $Enums.Category | null
  }

  export type NullableEnumSubcategoryFieldUpdateOperationsInput = {
    set?: $Enums.Subcategory | null
  }

  export type EnumAIModelNameFieldUpdateOperationsInput = {
    set?: $Enums.AIModelName
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type GroundTruthUpdateOneRequiredWithoutModelEvaluationsNestedInput = {
    create?: XOR<GroundTruthCreateWithoutModelEvaluationsInput, GroundTruthUncheckedCreateWithoutModelEvaluationsInput>
    connectOrCreate?: GroundTruthCreateOrConnectWithoutModelEvaluationsInput
    upsert?: GroundTruthUpsertWithoutModelEvaluationsInput
    connect?: GroundTruthWhereUniqueInput
    update?: XOR<XOR<GroundTruthUpdateToOneWithWhereWithoutModelEvaluationsInput, GroundTruthUpdateWithoutModelEvaluationsInput>, GroundTruthUncheckedUpdateWithoutModelEvaluationsInput>
  }

  export type ProblemUpdateOneRequiredWithoutModelEvaluationsNestedInput = {
    create?: XOR<ProblemCreateWithoutModelEvaluationsInput, ProblemUncheckedCreateWithoutModelEvaluationsInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutModelEvaluationsInput
    upsert?: ProblemUpsertWithoutModelEvaluationsInput
    connect?: ProblemWhereUniqueInput
    update?: XOR<XOR<ProblemUpdateToOneWithWhereWithoutModelEvaluationsInput, ProblemUpdateWithoutModelEvaluationsInput>, ProblemUncheckedUpdateWithoutModelEvaluationsInput>
  }

  export type QuizAttemptCreateNestedManyWithoutSessionInput = {
    create?: XOR<QuizAttemptCreateWithoutSessionInput, QuizAttemptUncheckedCreateWithoutSessionInput> | QuizAttemptCreateWithoutSessionInput[] | QuizAttemptUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutSessionInput | QuizAttemptCreateOrConnectWithoutSessionInput[]
    createMany?: QuizAttemptCreateManySessionInputEnvelope
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
  }

  export type QuizCodeCreateNestedManyWithoutSessionInput = {
    create?: XOR<QuizCodeCreateWithoutSessionInput, QuizCodeUncheckedCreateWithoutSessionInput> | QuizCodeCreateWithoutSessionInput[] | QuizCodeUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: QuizCodeCreateOrConnectWithoutSessionInput | QuizCodeCreateOrConnectWithoutSessionInput[]
    createMany?: QuizCodeCreateManySessionInputEnvelope
    connect?: QuizCodeWhereUniqueInput | QuizCodeWhereUniqueInput[]
  }

  export type ClassCreateNestedOneWithoutQuizSessionsInput = {
    create?: XOR<ClassCreateWithoutQuizSessionsInput, ClassUncheckedCreateWithoutQuizSessionsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutQuizSessionsInput
    connect?: ClassWhereUniqueInput
  }

  export type TeacherCreateNestedOneWithoutQuizSessionsInput = {
    create?: XOR<TeacherCreateWithoutQuizSessionsInput, TeacherUncheckedCreateWithoutQuizSessionsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutQuizSessionsInput
    connect?: TeacherWhereUniqueInput
  }

  export type QuizAttemptUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<QuizAttemptCreateWithoutSessionInput, QuizAttemptUncheckedCreateWithoutSessionInput> | QuizAttemptCreateWithoutSessionInput[] | QuizAttemptUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutSessionInput | QuizAttemptCreateOrConnectWithoutSessionInput[]
    createMany?: QuizAttemptCreateManySessionInputEnvelope
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
  }

  export type QuizCodeUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<QuizCodeCreateWithoutSessionInput, QuizCodeUncheckedCreateWithoutSessionInput> | QuizCodeCreateWithoutSessionInput[] | QuizCodeUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: QuizCodeCreateOrConnectWithoutSessionInput | QuizCodeCreateOrConnectWithoutSessionInput[]
    createMany?: QuizCodeCreateManySessionInputEnvelope
    connect?: QuizCodeWhereUniqueInput | QuizCodeWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumQuizStatusFieldUpdateOperationsInput = {
    set?: $Enums.QuizStatus
  }

  export type QuizAttemptUpdateManyWithoutSessionNestedInput = {
    create?: XOR<QuizAttemptCreateWithoutSessionInput, QuizAttemptUncheckedCreateWithoutSessionInput> | QuizAttemptCreateWithoutSessionInput[] | QuizAttemptUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutSessionInput | QuizAttemptCreateOrConnectWithoutSessionInput[]
    upsert?: QuizAttemptUpsertWithWhereUniqueWithoutSessionInput | QuizAttemptUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: QuizAttemptCreateManySessionInputEnvelope
    set?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    disconnect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    delete?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    update?: QuizAttemptUpdateWithWhereUniqueWithoutSessionInput | QuizAttemptUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: QuizAttemptUpdateManyWithWhereWithoutSessionInput | QuizAttemptUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: QuizAttemptScalarWhereInput | QuizAttemptScalarWhereInput[]
  }

  export type QuizCodeUpdateManyWithoutSessionNestedInput = {
    create?: XOR<QuizCodeCreateWithoutSessionInput, QuizCodeUncheckedCreateWithoutSessionInput> | QuizCodeCreateWithoutSessionInput[] | QuizCodeUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: QuizCodeCreateOrConnectWithoutSessionInput | QuizCodeCreateOrConnectWithoutSessionInput[]
    upsert?: QuizCodeUpsertWithWhereUniqueWithoutSessionInput | QuizCodeUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: QuizCodeCreateManySessionInputEnvelope
    set?: QuizCodeWhereUniqueInput | QuizCodeWhereUniqueInput[]
    disconnect?: QuizCodeWhereUniqueInput | QuizCodeWhereUniqueInput[]
    delete?: QuizCodeWhereUniqueInput | QuizCodeWhereUniqueInput[]
    connect?: QuizCodeWhereUniqueInput | QuizCodeWhereUniqueInput[]
    update?: QuizCodeUpdateWithWhereUniqueWithoutSessionInput | QuizCodeUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: QuizCodeUpdateManyWithWhereWithoutSessionInput | QuizCodeUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: QuizCodeScalarWhereInput | QuizCodeScalarWhereInput[]
  }

  export type ClassUpdateOneRequiredWithoutQuizSessionsNestedInput = {
    create?: XOR<ClassCreateWithoutQuizSessionsInput, ClassUncheckedCreateWithoutQuizSessionsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutQuizSessionsInput
    upsert?: ClassUpsertWithoutQuizSessionsInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutQuizSessionsInput, ClassUpdateWithoutQuizSessionsInput>, ClassUncheckedUpdateWithoutQuizSessionsInput>
  }

  export type TeacherUpdateOneRequiredWithoutQuizSessionsNestedInput = {
    create?: XOR<TeacherCreateWithoutQuizSessionsInput, TeacherUncheckedCreateWithoutQuizSessionsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutQuizSessionsInput
    upsert?: TeacherUpsertWithoutQuizSessionsInput
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutQuizSessionsInput, TeacherUpdateWithoutQuizSessionsInput>, TeacherUncheckedUpdateWithoutQuizSessionsInput>
  }

  export type QuizAttemptUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<QuizAttemptCreateWithoutSessionInput, QuizAttemptUncheckedCreateWithoutSessionInput> | QuizAttemptCreateWithoutSessionInput[] | QuizAttemptUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutSessionInput | QuizAttemptCreateOrConnectWithoutSessionInput[]
    upsert?: QuizAttemptUpsertWithWhereUniqueWithoutSessionInput | QuizAttemptUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: QuizAttemptCreateManySessionInputEnvelope
    set?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    disconnect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    delete?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    update?: QuizAttemptUpdateWithWhereUniqueWithoutSessionInput | QuizAttemptUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: QuizAttemptUpdateManyWithWhereWithoutSessionInput | QuizAttemptUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: QuizAttemptScalarWhereInput | QuizAttemptScalarWhereInput[]
  }

  export type QuizCodeUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<QuizCodeCreateWithoutSessionInput, QuizCodeUncheckedCreateWithoutSessionInput> | QuizCodeCreateWithoutSessionInput[] | QuizCodeUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: QuizCodeCreateOrConnectWithoutSessionInput | QuizCodeCreateOrConnectWithoutSessionInput[]
    upsert?: QuizCodeUpsertWithWhereUniqueWithoutSessionInput | QuizCodeUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: QuizCodeCreateManySessionInputEnvelope
    set?: QuizCodeWhereUniqueInput | QuizCodeWhereUniqueInput[]
    disconnect?: QuizCodeWhereUniqueInput | QuizCodeWhereUniqueInput[]
    delete?: QuizCodeWhereUniqueInput | QuizCodeWhereUniqueInput[]
    connect?: QuizCodeWhereUniqueInput | QuizCodeWhereUniqueInput[]
    update?: QuizCodeUpdateWithWhereUniqueWithoutSessionInput | QuizCodeUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: QuizCodeUpdateManyWithWhereWithoutSessionInput | QuizCodeUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: QuizCodeScalarWhereInput | QuizCodeScalarWhereInput[]
  }

  export type QuizSessionCreateNestedOneWithoutQuizCodesInput = {
    create?: XOR<QuizSessionCreateWithoutQuizCodesInput, QuizSessionUncheckedCreateWithoutQuizCodesInput>
    connectOrCreate?: QuizSessionCreateOrConnectWithoutQuizCodesInput
    connect?: QuizSessionWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutQuizCodesInput = {
    create?: XOR<StudentCreateWithoutQuizCodesInput, StudentUncheckedCreateWithoutQuizCodesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutQuizCodesInput
    connect?: StudentWhereUniqueInput
  }

  export type QuizSessionUpdateOneRequiredWithoutQuizCodesNestedInput = {
    create?: XOR<QuizSessionCreateWithoutQuizCodesInput, QuizSessionUncheckedCreateWithoutQuizCodesInput>
    connectOrCreate?: QuizSessionCreateOrConnectWithoutQuizCodesInput
    upsert?: QuizSessionUpsertWithoutQuizCodesInput
    connect?: QuizSessionWhereUniqueInput
    update?: XOR<XOR<QuizSessionUpdateToOneWithWhereWithoutQuizCodesInput, QuizSessionUpdateWithoutQuizCodesInput>, QuizSessionUncheckedUpdateWithoutQuizCodesInput>
  }

  export type StudentUpdateOneRequiredWithoutQuizCodesNestedInput = {
    create?: XOR<StudentCreateWithoutQuizCodesInput, StudentUncheckedCreateWithoutQuizCodesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutQuizCodesInput
    upsert?: StudentUpsertWithoutQuizCodesInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutQuizCodesInput, StudentUpdateWithoutQuizCodesInput>, StudentUncheckedUpdateWithoutQuizCodesInput>
  }

  export type QuizResponseCreateNestedManyWithoutAttemptInput = {
    create?: XOR<QuizResponseCreateWithoutAttemptInput, QuizResponseUncheckedCreateWithoutAttemptInput> | QuizResponseCreateWithoutAttemptInput[] | QuizResponseUncheckedCreateWithoutAttemptInput[]
    connectOrCreate?: QuizResponseCreateOrConnectWithoutAttemptInput | QuizResponseCreateOrConnectWithoutAttemptInput[]
    createMany?: QuizResponseCreateManyAttemptInputEnvelope
    connect?: QuizResponseWhereUniqueInput | QuizResponseWhereUniqueInput[]
  }

  export type QuizSessionCreateNestedOneWithoutAttemptsInput = {
    create?: XOR<QuizSessionCreateWithoutAttemptsInput, QuizSessionUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: QuizSessionCreateOrConnectWithoutAttemptsInput
    connect?: QuizSessionWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutQuizAttemptsInput = {
    create?: XOR<StudentCreateWithoutQuizAttemptsInput, StudentUncheckedCreateWithoutQuizAttemptsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutQuizAttemptsInput
    connect?: StudentWhereUniqueInput
  }

  export type QuizResponseUncheckedCreateNestedManyWithoutAttemptInput = {
    create?: XOR<QuizResponseCreateWithoutAttemptInput, QuizResponseUncheckedCreateWithoutAttemptInput> | QuizResponseCreateWithoutAttemptInput[] | QuizResponseUncheckedCreateWithoutAttemptInput[]
    connectOrCreate?: QuizResponseCreateOrConnectWithoutAttemptInput | QuizResponseCreateOrConnectWithoutAttemptInput[]
    createMany?: QuizResponseCreateManyAttemptInputEnvelope
    connect?: QuizResponseWhereUniqueInput | QuizResponseWhereUniqueInput[]
  }

  export type QuizResponseUpdateManyWithoutAttemptNestedInput = {
    create?: XOR<QuizResponseCreateWithoutAttemptInput, QuizResponseUncheckedCreateWithoutAttemptInput> | QuizResponseCreateWithoutAttemptInput[] | QuizResponseUncheckedCreateWithoutAttemptInput[]
    connectOrCreate?: QuizResponseCreateOrConnectWithoutAttemptInput | QuizResponseCreateOrConnectWithoutAttemptInput[]
    upsert?: QuizResponseUpsertWithWhereUniqueWithoutAttemptInput | QuizResponseUpsertWithWhereUniqueWithoutAttemptInput[]
    createMany?: QuizResponseCreateManyAttemptInputEnvelope
    set?: QuizResponseWhereUniqueInput | QuizResponseWhereUniqueInput[]
    disconnect?: QuizResponseWhereUniqueInput | QuizResponseWhereUniqueInput[]
    delete?: QuizResponseWhereUniqueInput | QuizResponseWhereUniqueInput[]
    connect?: QuizResponseWhereUniqueInput | QuizResponseWhereUniqueInput[]
    update?: QuizResponseUpdateWithWhereUniqueWithoutAttemptInput | QuizResponseUpdateWithWhereUniqueWithoutAttemptInput[]
    updateMany?: QuizResponseUpdateManyWithWhereWithoutAttemptInput | QuizResponseUpdateManyWithWhereWithoutAttemptInput[]
    deleteMany?: QuizResponseScalarWhereInput | QuizResponseScalarWhereInput[]
  }

  export type QuizSessionUpdateOneRequiredWithoutAttemptsNestedInput = {
    create?: XOR<QuizSessionCreateWithoutAttemptsInput, QuizSessionUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: QuizSessionCreateOrConnectWithoutAttemptsInput
    upsert?: QuizSessionUpsertWithoutAttemptsInput
    connect?: QuizSessionWhereUniqueInput
    update?: XOR<XOR<QuizSessionUpdateToOneWithWhereWithoutAttemptsInput, QuizSessionUpdateWithoutAttemptsInput>, QuizSessionUncheckedUpdateWithoutAttemptsInput>
  }

  export type StudentUpdateOneRequiredWithoutQuizAttemptsNestedInput = {
    create?: XOR<StudentCreateWithoutQuizAttemptsInput, StudentUncheckedCreateWithoutQuizAttemptsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutQuizAttemptsInput
    upsert?: StudentUpsertWithoutQuizAttemptsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutQuizAttemptsInput, StudentUpdateWithoutQuizAttemptsInput>, StudentUncheckedUpdateWithoutQuizAttemptsInput>
  }

  export type QuizResponseUncheckedUpdateManyWithoutAttemptNestedInput = {
    create?: XOR<QuizResponseCreateWithoutAttemptInput, QuizResponseUncheckedCreateWithoutAttemptInput> | QuizResponseCreateWithoutAttemptInput[] | QuizResponseUncheckedCreateWithoutAttemptInput[]
    connectOrCreate?: QuizResponseCreateOrConnectWithoutAttemptInput | QuizResponseCreateOrConnectWithoutAttemptInput[]
    upsert?: QuizResponseUpsertWithWhereUniqueWithoutAttemptInput | QuizResponseUpsertWithWhereUniqueWithoutAttemptInput[]
    createMany?: QuizResponseCreateManyAttemptInputEnvelope
    set?: QuizResponseWhereUniqueInput | QuizResponseWhereUniqueInput[]
    disconnect?: QuizResponseWhereUniqueInput | QuizResponseWhereUniqueInput[]
    delete?: QuizResponseWhereUniqueInput | QuizResponseWhereUniqueInput[]
    connect?: QuizResponseWhereUniqueInput | QuizResponseWhereUniqueInput[]
    update?: QuizResponseUpdateWithWhereUniqueWithoutAttemptInput | QuizResponseUpdateWithWhereUniqueWithoutAttemptInput[]
    updateMany?: QuizResponseUpdateManyWithWhereWithoutAttemptInput | QuizResponseUpdateManyWithWhereWithoutAttemptInput[]
    deleteMany?: QuizResponseScalarWhereInput | QuizResponseScalarWhereInput[]
  }

  export type QuizAttemptCreateNestedOneWithoutResponsesInput = {
    create?: XOR<QuizAttemptCreateWithoutResponsesInput, QuizAttemptUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutResponsesInput
    connect?: QuizAttemptWhereUniqueInput
  }

  export type ProblemCreateNestedOneWithoutQuizResponsesInput = {
    create?: XOR<ProblemCreateWithoutQuizResponsesInput, ProblemUncheckedCreateWithoutQuizResponsesInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutQuizResponsesInput
    connect?: ProblemWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type QuizAttemptUpdateOneRequiredWithoutResponsesNestedInput = {
    create?: XOR<QuizAttemptCreateWithoutResponsesInput, QuizAttemptUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutResponsesInput
    upsert?: QuizAttemptUpsertWithoutResponsesInput
    connect?: QuizAttemptWhereUniqueInput
    update?: XOR<XOR<QuizAttemptUpdateToOneWithWhereWithoutResponsesInput, QuizAttemptUpdateWithoutResponsesInput>, QuizAttemptUncheckedUpdateWithoutResponsesInput>
  }

  export type ProblemUpdateOneRequiredWithoutQuizResponsesNestedInput = {
    create?: XOR<ProblemCreateWithoutQuizResponsesInput, ProblemUncheckedCreateWithoutQuizResponsesInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutQuizResponsesInput
    upsert?: ProblemUpsertWithoutQuizResponsesInput
    connect?: ProblemWhereUniqueInput
    update?: XOR<XOR<ProblemUpdateToOneWithWhereWithoutQuizResponsesInput, ProblemUpdateWithoutQuizResponsesInput>, ProblemUncheckedUpdateWithoutQuizResponsesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type NestedEnumSubcategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Subcategory | EnumSubcategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Subcategory[] | ListEnumSubcategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Subcategory[] | ListEnumSubcategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumSubcategoryFilter<$PrismaModel> | $Enums.Subcategory
  }

  export type NestedEnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type NestedEnumSubcategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Subcategory | EnumSubcategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Subcategory[] | ListEnumSubcategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Subcategory[] | ListEnumSubcategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumSubcategoryWithAggregatesFilter<$PrismaModel> | $Enums.Subcategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubcategoryFilter<$PrismaModel>
    _max?: NestedEnumSubcategoryFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumCategoryNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCategoryNullableFilter<$PrismaModel> | $Enums.Category | null
  }

  export type NestedEnumSubcategoryNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Subcategory | EnumSubcategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.Subcategory[] | ListEnumSubcategoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Subcategory[] | ListEnumSubcategoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSubcategoryNullableFilter<$PrismaModel> | $Enums.Subcategory | null
  }

  export type NestedEnumAIModelNameFilter<$PrismaModel = never> = {
    equals?: $Enums.AIModelName | EnumAIModelNameFieldRefInput<$PrismaModel>
    in?: $Enums.AIModelName[] | ListEnumAIModelNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.AIModelName[] | ListEnumAIModelNameFieldRefInput<$PrismaModel>
    not?: NestedEnumAIModelNameFilter<$PrismaModel> | $Enums.AIModelName
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumCategoryNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCategoryNullableWithAggregatesFilter<$PrismaModel> | $Enums.Category | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCategoryNullableFilter<$PrismaModel>
    _max?: NestedEnumCategoryNullableFilter<$PrismaModel>
  }

  export type NestedEnumSubcategoryNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Subcategory | EnumSubcategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.Subcategory[] | ListEnumSubcategoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Subcategory[] | ListEnumSubcategoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSubcategoryNullableWithAggregatesFilter<$PrismaModel> | $Enums.Subcategory | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSubcategoryNullableFilter<$PrismaModel>
    _max?: NestedEnumSubcategoryNullableFilter<$PrismaModel>
  }

  export type NestedEnumAIModelNameWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AIModelName | EnumAIModelNameFieldRefInput<$PrismaModel>
    in?: $Enums.AIModelName[] | ListEnumAIModelNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.AIModelName[] | ListEnumAIModelNameFieldRefInput<$PrismaModel>
    not?: NestedEnumAIModelNameWithAggregatesFilter<$PrismaModel> | $Enums.AIModelName
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAIModelNameFilter<$PrismaModel>
    _max?: NestedEnumAIModelNameFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumQuizStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.QuizStatus | EnumQuizStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuizStatus[] | ListEnumQuizStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuizStatus[] | ListEnumQuizStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQuizStatusFilter<$PrismaModel> | $Enums.QuizStatus
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumQuizStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuizStatus | EnumQuizStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuizStatus[] | ListEnumQuizStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuizStatus[] | ListEnumQuizStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQuizStatusWithAggregatesFilter<$PrismaModel> | $Enums.QuizStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuizStatusFilter<$PrismaModel>
    _max?: NestedEnumQuizStatusFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type ClassCreateWithoutTeacherInput = {
    name: string
    createdAt?: Date | string
    quizSessions?: QuizSessionCreateNestedManyWithoutClassInput
    students?: StudentCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutTeacherInput = {
    id?: number
    name: string
    createdAt?: Date | string
    quizSessions?: QuizSessionUncheckedCreateNestedManyWithoutClassInput
    students?: StudentUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutTeacherInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutTeacherInput, ClassUncheckedCreateWithoutTeacherInput>
  }

  export type ClassCreateManyTeacherInputEnvelope = {
    data: ClassCreateManyTeacherInput | ClassCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type QuizSessionCreateWithoutTeacherInput = {
    startTime?: Date | string
    endTime?: Date | string | null
    status?: $Enums.QuizStatus
    settings?: NullableJsonNullValueInput | InputJsonValue
    attempts?: QuizAttemptCreateNestedManyWithoutSessionInput
    quizCodes?: QuizCodeCreateNestedManyWithoutSessionInput
    class: ClassCreateNestedOneWithoutQuizSessionsInput
  }

  export type QuizSessionUncheckedCreateWithoutTeacherInput = {
    id?: number
    classId: number
    startTime?: Date | string
    endTime?: Date | string | null
    status?: $Enums.QuizStatus
    settings?: NullableJsonNullValueInput | InputJsonValue
    attempts?: QuizAttemptUncheckedCreateNestedManyWithoutSessionInput
    quizCodes?: QuizCodeUncheckedCreateNestedManyWithoutSessionInput
  }

  export type QuizSessionCreateOrConnectWithoutTeacherInput = {
    where: QuizSessionWhereUniqueInput
    create: XOR<QuizSessionCreateWithoutTeacherInput, QuizSessionUncheckedCreateWithoutTeacherInput>
  }

  export type QuizSessionCreateManyTeacherInputEnvelope = {
    data: QuizSessionCreateManyTeacherInput | QuizSessionCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type ClassUpsertWithWhereUniqueWithoutTeacherInput = {
    where: ClassWhereUniqueInput
    update: XOR<ClassUpdateWithoutTeacherInput, ClassUncheckedUpdateWithoutTeacherInput>
    create: XOR<ClassCreateWithoutTeacherInput, ClassUncheckedCreateWithoutTeacherInput>
  }

  export type ClassUpdateWithWhereUniqueWithoutTeacherInput = {
    where: ClassWhereUniqueInput
    data: XOR<ClassUpdateWithoutTeacherInput, ClassUncheckedUpdateWithoutTeacherInput>
  }

  export type ClassUpdateManyWithWhereWithoutTeacherInput = {
    where: ClassScalarWhereInput
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyWithoutTeacherInput>
  }

  export type ClassScalarWhereInput = {
    AND?: ClassScalarWhereInput | ClassScalarWhereInput[]
    OR?: ClassScalarWhereInput[]
    NOT?: ClassScalarWhereInput | ClassScalarWhereInput[]
    id?: IntFilter<"Class"> | number
    name?: StringFilter<"Class"> | string
    teacherId?: IntFilter<"Class"> | number
    createdAt?: DateTimeFilter<"Class"> | Date | string
  }

  export type QuizSessionUpsertWithWhereUniqueWithoutTeacherInput = {
    where: QuizSessionWhereUniqueInput
    update: XOR<QuizSessionUpdateWithoutTeacherInput, QuizSessionUncheckedUpdateWithoutTeacherInput>
    create: XOR<QuizSessionCreateWithoutTeacherInput, QuizSessionUncheckedCreateWithoutTeacherInput>
  }

  export type QuizSessionUpdateWithWhereUniqueWithoutTeacherInput = {
    where: QuizSessionWhereUniqueInput
    data: XOR<QuizSessionUpdateWithoutTeacherInput, QuizSessionUncheckedUpdateWithoutTeacherInput>
  }

  export type QuizSessionUpdateManyWithWhereWithoutTeacherInput = {
    where: QuizSessionScalarWhereInput
    data: XOR<QuizSessionUpdateManyMutationInput, QuizSessionUncheckedUpdateManyWithoutTeacherInput>
  }

  export type QuizSessionScalarWhereInput = {
    AND?: QuizSessionScalarWhereInput | QuizSessionScalarWhereInput[]
    OR?: QuizSessionScalarWhereInput[]
    NOT?: QuizSessionScalarWhereInput | QuizSessionScalarWhereInput[]
    id?: IntFilter<"QuizSession"> | number
    classId?: IntFilter<"QuizSession"> | number
    teacherId?: IntFilter<"QuizSession"> | number
    startTime?: DateTimeFilter<"QuizSession"> | Date | string
    endTime?: DateTimeNullableFilter<"QuizSession"> | Date | string | null
    status?: EnumQuizStatusFilter<"QuizSession"> | $Enums.QuizStatus
    settings?: JsonNullableFilter<"QuizSession">
  }

  export type TeacherCreateWithoutClassesInput = {
    email: string
    hashedPassword: string
    createdAt?: Date | string
    name: string
    quizSessions?: QuizSessionCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutClassesInput = {
    id?: number
    email: string
    hashedPassword: string
    createdAt?: Date | string
    name: string
    quizSessions?: QuizSessionUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutClassesInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutClassesInput, TeacherUncheckedCreateWithoutClassesInput>
  }

  export type QuizSessionCreateWithoutClassInput = {
    startTime?: Date | string
    endTime?: Date | string | null
    status?: $Enums.QuizStatus
    settings?: NullableJsonNullValueInput | InputJsonValue
    attempts?: QuizAttemptCreateNestedManyWithoutSessionInput
    quizCodes?: QuizCodeCreateNestedManyWithoutSessionInput
    teacher: TeacherCreateNestedOneWithoutQuizSessionsInput
  }

  export type QuizSessionUncheckedCreateWithoutClassInput = {
    id?: number
    teacherId: number
    startTime?: Date | string
    endTime?: Date | string | null
    status?: $Enums.QuizStatus
    settings?: NullableJsonNullValueInput | InputJsonValue
    attempts?: QuizAttemptUncheckedCreateNestedManyWithoutSessionInput
    quizCodes?: QuizCodeUncheckedCreateNestedManyWithoutSessionInput
  }

  export type QuizSessionCreateOrConnectWithoutClassInput = {
    where: QuizSessionWhereUniqueInput
    create: XOR<QuizSessionCreateWithoutClassInput, QuizSessionUncheckedCreateWithoutClassInput>
  }

  export type QuizSessionCreateManyClassInputEnvelope = {
    data: QuizSessionCreateManyClassInput | QuizSessionCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type StudentCreateWithoutClassInput = {
    name: string
    userName: string
    quizAttempts?: QuizAttemptCreateNestedManyWithoutStudentInput
    quizCodes?: QuizCodeCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutClassInput = {
    id?: number
    name: string
    userName: string
    quizAttempts?: QuizAttemptUncheckedCreateNestedManyWithoutStudentInput
    quizCodes?: QuizCodeUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutClassInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutClassInput, StudentUncheckedCreateWithoutClassInput>
  }

  export type StudentCreateManyClassInputEnvelope = {
    data: StudentCreateManyClassInput | StudentCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type TeacherUpsertWithoutClassesInput = {
    update: XOR<TeacherUpdateWithoutClassesInput, TeacherUncheckedUpdateWithoutClassesInput>
    create: XOR<TeacherCreateWithoutClassesInput, TeacherUncheckedCreateWithoutClassesInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutClassesInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutClassesInput, TeacherUncheckedUpdateWithoutClassesInput>
  }

  export type TeacherUpdateWithoutClassesInput = {
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    quizSessions?: QuizSessionUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutClassesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    quizSessions?: QuizSessionUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type QuizSessionUpsertWithWhereUniqueWithoutClassInput = {
    where: QuizSessionWhereUniqueInput
    update: XOR<QuizSessionUpdateWithoutClassInput, QuizSessionUncheckedUpdateWithoutClassInput>
    create: XOR<QuizSessionCreateWithoutClassInput, QuizSessionUncheckedCreateWithoutClassInput>
  }

  export type QuizSessionUpdateWithWhereUniqueWithoutClassInput = {
    where: QuizSessionWhereUniqueInput
    data: XOR<QuizSessionUpdateWithoutClassInput, QuizSessionUncheckedUpdateWithoutClassInput>
  }

  export type QuizSessionUpdateManyWithWhereWithoutClassInput = {
    where: QuizSessionScalarWhereInput
    data: XOR<QuizSessionUpdateManyMutationInput, QuizSessionUncheckedUpdateManyWithoutClassInput>
  }

  export type StudentUpsertWithWhereUniqueWithoutClassInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutClassInput, StudentUncheckedUpdateWithoutClassInput>
    create: XOR<StudentCreateWithoutClassInput, StudentUncheckedCreateWithoutClassInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutClassInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutClassInput, StudentUncheckedUpdateWithoutClassInput>
  }

  export type StudentUpdateManyWithWhereWithoutClassInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutClassInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    id?: IntFilter<"Student"> | number
    name?: StringFilter<"Student"> | string
    classId?: IntFilter<"Student"> | number
    userName?: StringFilter<"Student"> | string
  }

  export type QuizAttemptCreateWithoutStudentInput = {
    startTime?: Date | string
    endTime?: Date | string | null
    responses?: QuizResponseCreateNestedManyWithoutAttemptInput
    session: QuizSessionCreateNestedOneWithoutAttemptsInput
  }

  export type QuizAttemptUncheckedCreateWithoutStudentInput = {
    id?: number
    sessionId: number
    startTime?: Date | string
    endTime?: Date | string | null
    responses?: QuizResponseUncheckedCreateNestedManyWithoutAttemptInput
  }

  export type QuizAttemptCreateOrConnectWithoutStudentInput = {
    where: QuizAttemptWhereUniqueInput
    create: XOR<QuizAttemptCreateWithoutStudentInput, QuizAttemptUncheckedCreateWithoutStudentInput>
  }

  export type QuizAttemptCreateManyStudentInputEnvelope = {
    data: QuizAttemptCreateManyStudentInput | QuizAttemptCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type QuizCodeCreateWithoutStudentInput = {
    code: string
    createdAt?: Date | string
    session: QuizSessionCreateNestedOneWithoutQuizCodesInput
  }

  export type QuizCodeUncheckedCreateWithoutStudentInput = {
    code: string
    sessionId: number
    createdAt?: Date | string
  }

  export type QuizCodeCreateOrConnectWithoutStudentInput = {
    where: QuizCodeWhereUniqueInput
    create: XOR<QuizCodeCreateWithoutStudentInput, QuizCodeUncheckedCreateWithoutStudentInput>
  }

  export type QuizCodeCreateManyStudentInputEnvelope = {
    data: QuizCodeCreateManyStudentInput | QuizCodeCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type ClassCreateWithoutStudentsInput = {
    name: string
    createdAt?: Date | string
    teacher: TeacherCreateNestedOneWithoutClassesInput
    quizSessions?: QuizSessionCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutStudentsInput = {
    id?: number
    name: string
    teacherId: number
    createdAt?: Date | string
    quizSessions?: QuizSessionUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutStudentsInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutStudentsInput, ClassUncheckedCreateWithoutStudentsInput>
  }

  export type QuizAttemptUpsertWithWhereUniqueWithoutStudentInput = {
    where: QuizAttemptWhereUniqueInput
    update: XOR<QuizAttemptUpdateWithoutStudentInput, QuizAttemptUncheckedUpdateWithoutStudentInput>
    create: XOR<QuizAttemptCreateWithoutStudentInput, QuizAttemptUncheckedCreateWithoutStudentInput>
  }

  export type QuizAttemptUpdateWithWhereUniqueWithoutStudentInput = {
    where: QuizAttemptWhereUniqueInput
    data: XOR<QuizAttemptUpdateWithoutStudentInput, QuizAttemptUncheckedUpdateWithoutStudentInput>
  }

  export type QuizAttemptUpdateManyWithWhereWithoutStudentInput = {
    where: QuizAttemptScalarWhereInput
    data: XOR<QuizAttemptUpdateManyMutationInput, QuizAttemptUncheckedUpdateManyWithoutStudentInput>
  }

  export type QuizAttemptScalarWhereInput = {
    AND?: QuizAttemptScalarWhereInput | QuizAttemptScalarWhereInput[]
    OR?: QuizAttemptScalarWhereInput[]
    NOT?: QuizAttemptScalarWhereInput | QuizAttemptScalarWhereInput[]
    id?: IntFilter<"QuizAttempt"> | number
    sessionId?: IntFilter<"QuizAttempt"> | number
    studentId?: IntFilter<"QuizAttempt"> | number
    startTime?: DateTimeFilter<"QuizAttempt"> | Date | string
    endTime?: DateTimeNullableFilter<"QuizAttempt"> | Date | string | null
  }

  export type QuizCodeUpsertWithWhereUniqueWithoutStudentInput = {
    where: QuizCodeWhereUniqueInput
    update: XOR<QuizCodeUpdateWithoutStudentInput, QuizCodeUncheckedUpdateWithoutStudentInput>
    create: XOR<QuizCodeCreateWithoutStudentInput, QuizCodeUncheckedCreateWithoutStudentInput>
  }

  export type QuizCodeUpdateWithWhereUniqueWithoutStudentInput = {
    where: QuizCodeWhereUniqueInput
    data: XOR<QuizCodeUpdateWithoutStudentInput, QuizCodeUncheckedUpdateWithoutStudentInput>
  }

  export type QuizCodeUpdateManyWithWhereWithoutStudentInput = {
    where: QuizCodeScalarWhereInput
    data: XOR<QuizCodeUpdateManyMutationInput, QuizCodeUncheckedUpdateManyWithoutStudentInput>
  }

  export type QuizCodeScalarWhereInput = {
    AND?: QuizCodeScalarWhereInput | QuizCodeScalarWhereInput[]
    OR?: QuizCodeScalarWhereInput[]
    NOT?: QuizCodeScalarWhereInput | QuizCodeScalarWhereInput[]
    code?: StringFilter<"QuizCode"> | string
    sessionId?: IntFilter<"QuizCode"> | number
    studentId?: IntFilter<"QuizCode"> | number
    createdAt?: DateTimeFilter<"QuizCode"> | Date | string
  }

  export type ClassUpsertWithoutStudentsInput = {
    update: XOR<ClassUpdateWithoutStudentsInput, ClassUncheckedUpdateWithoutStudentsInput>
    create: XOR<ClassCreateWithoutStudentsInput, ClassUncheckedCreateWithoutStudentsInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutStudentsInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutStudentsInput, ClassUncheckedUpdateWithoutStudentsInput>
  }

  export type ClassUpdateWithoutStudentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: TeacherUpdateOneRequiredWithoutClassesNestedInput
    quizSessions?: QuizSessionUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    teacherId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizSessions?: QuizSessionUncheckedUpdateManyWithoutClassNestedInput
  }

  export type GroundTruthCreateWithoutProblemInput = {
    category: $Enums.Category
    subcategory: $Enums.Subcategory
    answer: number
    modelAnswers: JsonNullValueInput | InputJsonValue
    modelEvaluations?: ModelEvaluationCreateNestedManyWithoutGroundTruthInput
  }

  export type GroundTruthUncheckedCreateWithoutProblemInput = {
    id?: number
    category: $Enums.Category
    subcategory: $Enums.Subcategory
    answer: number
    modelAnswers: JsonNullValueInput | InputJsonValue
    modelEvaluations?: ModelEvaluationUncheckedCreateNestedManyWithoutGroundTruthInput
  }

  export type GroundTruthCreateOrConnectWithoutProblemInput = {
    where: GroundTruthWhereUniqueInput
    create: XOR<GroundTruthCreateWithoutProblemInput, GroundTruthUncheckedCreateWithoutProblemInput>
  }

  export type ModelEvaluationCreateWithoutProblemInput = {
    tokenUsage: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    predictedCategory?: $Enums.Category | null
    predictedSubcategory?: $Enums.Subcategory | null
    modelName: $Enums.AIModelName
    answer?: number | null
    isAnswerCorrect: boolean
    isModelMappingCorrect: boolean
    modelAnswers?: NullableJsonNullValueInput | InputJsonValue
    storyGrammarPrompts?: NullableJsonNullValueInput | InputJsonValue
    modelAnswerReasoning?: string | null
    subCategoryReasoning?: string | null
    supercategoryReasoning: string
    groundTruth: GroundTruthCreateNestedOneWithoutModelEvaluationsInput
  }

  export type ModelEvaluationUncheckedCreateWithoutProblemInput = {
    id?: number
    tokenUsage: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    predictedCategory?: $Enums.Category | null
    predictedSubcategory?: $Enums.Subcategory | null
    modelName: $Enums.AIModelName
    answer?: number | null
    isAnswerCorrect: boolean
    isModelMappingCorrect: boolean
    modelAnswers?: NullableJsonNullValueInput | InputJsonValue
    storyGrammarPrompts?: NullableJsonNullValueInput | InputJsonValue
    groundTruthId: number
    modelAnswerReasoning?: string | null
    subCategoryReasoning?: string | null
    supercategoryReasoning: string
  }

  export type ModelEvaluationCreateOrConnectWithoutProblemInput = {
    where: ModelEvaluationWhereUniqueInput
    create: XOR<ModelEvaluationCreateWithoutProblemInput, ModelEvaluationUncheckedCreateWithoutProblemInput>
  }

  export type ModelEvaluationCreateManyProblemInputEnvelope = {
    data: ModelEvaluationCreateManyProblemInput | ModelEvaluationCreateManyProblemInput[]
    skipDuplicates?: boolean
  }

  export type QuizResponseCreateWithoutProblemInput = {
    studentAnswer?: number | null
    timeSpent: number
    storyGrammarAnswers?: NullableJsonNullValueInput | InputJsonValue
    finalAnswerCorrect?: boolean | null
    storyGrammarCorrect?: boolean | null
    attempt: QuizAttemptCreateNestedOneWithoutResponsesInput
  }

  export type QuizResponseUncheckedCreateWithoutProblemInput = {
    id?: number
    attemptId: number
    studentAnswer?: number | null
    timeSpent: number
    storyGrammarAnswers?: NullableJsonNullValueInput | InputJsonValue
    finalAnswerCorrect?: boolean | null
    storyGrammarCorrect?: boolean | null
  }

  export type QuizResponseCreateOrConnectWithoutProblemInput = {
    where: QuizResponseWhereUniqueInput
    create: XOR<QuizResponseCreateWithoutProblemInput, QuizResponseUncheckedCreateWithoutProblemInput>
  }

  export type QuizResponseCreateManyProblemInputEnvelope = {
    data: QuizResponseCreateManyProblemInput | QuizResponseCreateManyProblemInput[]
    skipDuplicates?: boolean
  }

  export type GroundTruthUpsertWithoutProblemInput = {
    update: XOR<GroundTruthUpdateWithoutProblemInput, GroundTruthUncheckedUpdateWithoutProblemInput>
    create: XOR<GroundTruthCreateWithoutProblemInput, GroundTruthUncheckedCreateWithoutProblemInput>
    where?: GroundTruthWhereInput
  }

  export type GroundTruthUpdateToOneWithWhereWithoutProblemInput = {
    where?: GroundTruthWhereInput
    data: XOR<GroundTruthUpdateWithoutProblemInput, GroundTruthUncheckedUpdateWithoutProblemInput>
  }

  export type GroundTruthUpdateWithoutProblemInput = {
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    subcategory?: EnumSubcategoryFieldUpdateOperationsInput | $Enums.Subcategory
    answer?: IntFieldUpdateOperationsInput | number
    modelAnswers?: JsonNullValueInput | InputJsonValue
    modelEvaluations?: ModelEvaluationUpdateManyWithoutGroundTruthNestedInput
  }

  export type GroundTruthUncheckedUpdateWithoutProblemInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    subcategory?: EnumSubcategoryFieldUpdateOperationsInput | $Enums.Subcategory
    answer?: IntFieldUpdateOperationsInput | number
    modelAnswers?: JsonNullValueInput | InputJsonValue
    modelEvaluations?: ModelEvaluationUncheckedUpdateManyWithoutGroundTruthNestedInput
  }

  export type ModelEvaluationUpsertWithWhereUniqueWithoutProblemInput = {
    where: ModelEvaluationWhereUniqueInput
    update: XOR<ModelEvaluationUpdateWithoutProblemInput, ModelEvaluationUncheckedUpdateWithoutProblemInput>
    create: XOR<ModelEvaluationCreateWithoutProblemInput, ModelEvaluationUncheckedCreateWithoutProblemInput>
  }

  export type ModelEvaluationUpdateWithWhereUniqueWithoutProblemInput = {
    where: ModelEvaluationWhereUniqueInput
    data: XOR<ModelEvaluationUpdateWithoutProblemInput, ModelEvaluationUncheckedUpdateWithoutProblemInput>
  }

  export type ModelEvaluationUpdateManyWithWhereWithoutProblemInput = {
    where: ModelEvaluationScalarWhereInput
    data: XOR<ModelEvaluationUpdateManyMutationInput, ModelEvaluationUncheckedUpdateManyWithoutProblemInput>
  }

  export type ModelEvaluationScalarWhereInput = {
    AND?: ModelEvaluationScalarWhereInput | ModelEvaluationScalarWhereInput[]
    OR?: ModelEvaluationScalarWhereInput[]
    NOT?: ModelEvaluationScalarWhereInput | ModelEvaluationScalarWhereInput[]
    id?: IntFilter<"ModelEvaluation"> | number
    problemId?: IntFilter<"ModelEvaluation"> | number
    tokenUsage?: JsonFilter<"ModelEvaluation">
    createdAt?: DateTimeFilter<"ModelEvaluation"> | Date | string
    predictedCategory?: EnumCategoryNullableFilter<"ModelEvaluation"> | $Enums.Category | null
    predictedSubcategory?: EnumSubcategoryNullableFilter<"ModelEvaluation"> | $Enums.Subcategory | null
    modelName?: EnumAIModelNameFilter<"ModelEvaluation"> | $Enums.AIModelName
    answer?: IntNullableFilter<"ModelEvaluation"> | number | null
    isAnswerCorrect?: BoolFilter<"ModelEvaluation"> | boolean
    isModelMappingCorrect?: BoolFilter<"ModelEvaluation"> | boolean
    modelAnswers?: JsonNullableFilter<"ModelEvaluation">
    storyGrammarPrompts?: JsonNullableFilter<"ModelEvaluation">
    groundTruthId?: IntFilter<"ModelEvaluation"> | number
    modelAnswerReasoning?: StringNullableFilter<"ModelEvaluation"> | string | null
    subCategoryReasoning?: StringNullableFilter<"ModelEvaluation"> | string | null
    supercategoryReasoning?: StringFilter<"ModelEvaluation"> | string
  }

  export type QuizResponseUpsertWithWhereUniqueWithoutProblemInput = {
    where: QuizResponseWhereUniqueInput
    update: XOR<QuizResponseUpdateWithoutProblemInput, QuizResponseUncheckedUpdateWithoutProblemInput>
    create: XOR<QuizResponseCreateWithoutProblemInput, QuizResponseUncheckedCreateWithoutProblemInput>
  }

  export type QuizResponseUpdateWithWhereUniqueWithoutProblemInput = {
    where: QuizResponseWhereUniqueInput
    data: XOR<QuizResponseUpdateWithoutProblemInput, QuizResponseUncheckedUpdateWithoutProblemInput>
  }

  export type QuizResponseUpdateManyWithWhereWithoutProblemInput = {
    where: QuizResponseScalarWhereInput
    data: XOR<QuizResponseUpdateManyMutationInput, QuizResponseUncheckedUpdateManyWithoutProblemInput>
  }

  export type QuizResponseScalarWhereInput = {
    AND?: QuizResponseScalarWhereInput | QuizResponseScalarWhereInput[]
    OR?: QuizResponseScalarWhereInput[]
    NOT?: QuizResponseScalarWhereInput | QuizResponseScalarWhereInput[]
    id?: IntFilter<"QuizResponse"> | number
    attemptId?: IntFilter<"QuizResponse"> | number
    problemId?: IntFilter<"QuizResponse"> | number
    studentAnswer?: IntNullableFilter<"QuizResponse"> | number | null
    timeSpent?: IntFilter<"QuizResponse"> | number
    storyGrammarAnswers?: JsonNullableFilter<"QuizResponse">
    finalAnswerCorrect?: BoolNullableFilter<"QuizResponse"> | boolean | null
    storyGrammarCorrect?: BoolNullableFilter<"QuizResponse"> | boolean | null
  }

  export type ProblemCreateWithoutGroundTruthInput = {
    content: string
    answer: number
    createdAt?: Date | string
    modelEvaluations?: ModelEvaluationCreateNestedManyWithoutProblemInput
    quizResponses?: QuizResponseCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateWithoutGroundTruthInput = {
    id?: number
    content: string
    answer: number
    createdAt?: Date | string
    modelEvaluations?: ModelEvaluationUncheckedCreateNestedManyWithoutProblemInput
    quizResponses?: QuizResponseUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutGroundTruthInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutGroundTruthInput, ProblemUncheckedCreateWithoutGroundTruthInput>
  }

  export type ModelEvaluationCreateWithoutGroundTruthInput = {
    tokenUsage: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    predictedCategory?: $Enums.Category | null
    predictedSubcategory?: $Enums.Subcategory | null
    modelName: $Enums.AIModelName
    answer?: number | null
    isAnswerCorrect: boolean
    isModelMappingCorrect: boolean
    modelAnswers?: NullableJsonNullValueInput | InputJsonValue
    storyGrammarPrompts?: NullableJsonNullValueInput | InputJsonValue
    modelAnswerReasoning?: string | null
    subCategoryReasoning?: string | null
    supercategoryReasoning: string
    problem: ProblemCreateNestedOneWithoutModelEvaluationsInput
  }

  export type ModelEvaluationUncheckedCreateWithoutGroundTruthInput = {
    id?: number
    problemId: number
    tokenUsage: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    predictedCategory?: $Enums.Category | null
    predictedSubcategory?: $Enums.Subcategory | null
    modelName: $Enums.AIModelName
    answer?: number | null
    isAnswerCorrect: boolean
    isModelMappingCorrect: boolean
    modelAnswers?: NullableJsonNullValueInput | InputJsonValue
    storyGrammarPrompts?: NullableJsonNullValueInput | InputJsonValue
    modelAnswerReasoning?: string | null
    subCategoryReasoning?: string | null
    supercategoryReasoning: string
  }

  export type ModelEvaluationCreateOrConnectWithoutGroundTruthInput = {
    where: ModelEvaluationWhereUniqueInput
    create: XOR<ModelEvaluationCreateWithoutGroundTruthInput, ModelEvaluationUncheckedCreateWithoutGroundTruthInput>
  }

  export type ModelEvaluationCreateManyGroundTruthInputEnvelope = {
    data: ModelEvaluationCreateManyGroundTruthInput | ModelEvaluationCreateManyGroundTruthInput[]
    skipDuplicates?: boolean
  }

  export type ProblemUpsertWithoutGroundTruthInput = {
    update: XOR<ProblemUpdateWithoutGroundTruthInput, ProblemUncheckedUpdateWithoutGroundTruthInput>
    create: XOR<ProblemCreateWithoutGroundTruthInput, ProblemUncheckedCreateWithoutGroundTruthInput>
    where?: ProblemWhereInput
  }

  export type ProblemUpdateToOneWithWhereWithoutGroundTruthInput = {
    where?: ProblemWhereInput
    data: XOR<ProblemUpdateWithoutGroundTruthInput, ProblemUncheckedUpdateWithoutGroundTruthInput>
  }

  export type ProblemUpdateWithoutGroundTruthInput = {
    content?: StringFieldUpdateOperationsInput | string
    answer?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modelEvaluations?: ModelEvaluationUpdateManyWithoutProblemNestedInput
    quizResponses?: QuizResponseUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateWithoutGroundTruthInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    answer?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modelEvaluations?: ModelEvaluationUncheckedUpdateManyWithoutProblemNestedInput
    quizResponses?: QuizResponseUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type ModelEvaluationUpsertWithWhereUniqueWithoutGroundTruthInput = {
    where: ModelEvaluationWhereUniqueInput
    update: XOR<ModelEvaluationUpdateWithoutGroundTruthInput, ModelEvaluationUncheckedUpdateWithoutGroundTruthInput>
    create: XOR<ModelEvaluationCreateWithoutGroundTruthInput, ModelEvaluationUncheckedCreateWithoutGroundTruthInput>
  }

  export type ModelEvaluationUpdateWithWhereUniqueWithoutGroundTruthInput = {
    where: ModelEvaluationWhereUniqueInput
    data: XOR<ModelEvaluationUpdateWithoutGroundTruthInput, ModelEvaluationUncheckedUpdateWithoutGroundTruthInput>
  }

  export type ModelEvaluationUpdateManyWithWhereWithoutGroundTruthInput = {
    where: ModelEvaluationScalarWhereInput
    data: XOR<ModelEvaluationUpdateManyMutationInput, ModelEvaluationUncheckedUpdateManyWithoutGroundTruthInput>
  }

  export type GroundTruthCreateWithoutModelEvaluationsInput = {
    category: $Enums.Category
    subcategory: $Enums.Subcategory
    answer: number
    modelAnswers: JsonNullValueInput | InputJsonValue
    problem?: ProblemCreateNestedOneWithoutGroundTruthInput
  }

  export type GroundTruthUncheckedCreateWithoutModelEvaluationsInput = {
    id?: number
    category: $Enums.Category
    subcategory: $Enums.Subcategory
    answer: number
    modelAnswers: JsonNullValueInput | InputJsonValue
    problem?: ProblemUncheckedCreateNestedOneWithoutGroundTruthInput
  }

  export type GroundTruthCreateOrConnectWithoutModelEvaluationsInput = {
    where: GroundTruthWhereUniqueInput
    create: XOR<GroundTruthCreateWithoutModelEvaluationsInput, GroundTruthUncheckedCreateWithoutModelEvaluationsInput>
  }

  export type ProblemCreateWithoutModelEvaluationsInput = {
    content: string
    answer: number
    createdAt?: Date | string
    groundTruth: GroundTruthCreateNestedOneWithoutProblemInput
    quizResponses?: QuizResponseCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateWithoutModelEvaluationsInput = {
    id?: number
    content: string
    answer: number
    createdAt?: Date | string
    groundTruthId: number
    quizResponses?: QuizResponseUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutModelEvaluationsInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutModelEvaluationsInput, ProblemUncheckedCreateWithoutModelEvaluationsInput>
  }

  export type GroundTruthUpsertWithoutModelEvaluationsInput = {
    update: XOR<GroundTruthUpdateWithoutModelEvaluationsInput, GroundTruthUncheckedUpdateWithoutModelEvaluationsInput>
    create: XOR<GroundTruthCreateWithoutModelEvaluationsInput, GroundTruthUncheckedCreateWithoutModelEvaluationsInput>
    where?: GroundTruthWhereInput
  }

  export type GroundTruthUpdateToOneWithWhereWithoutModelEvaluationsInput = {
    where?: GroundTruthWhereInput
    data: XOR<GroundTruthUpdateWithoutModelEvaluationsInput, GroundTruthUncheckedUpdateWithoutModelEvaluationsInput>
  }

  export type GroundTruthUpdateWithoutModelEvaluationsInput = {
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    subcategory?: EnumSubcategoryFieldUpdateOperationsInput | $Enums.Subcategory
    answer?: IntFieldUpdateOperationsInput | number
    modelAnswers?: JsonNullValueInput | InputJsonValue
    problem?: ProblemUpdateOneWithoutGroundTruthNestedInput
  }

  export type GroundTruthUncheckedUpdateWithoutModelEvaluationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    subcategory?: EnumSubcategoryFieldUpdateOperationsInput | $Enums.Subcategory
    answer?: IntFieldUpdateOperationsInput | number
    modelAnswers?: JsonNullValueInput | InputJsonValue
    problem?: ProblemUncheckedUpdateOneWithoutGroundTruthNestedInput
  }

  export type ProblemUpsertWithoutModelEvaluationsInput = {
    update: XOR<ProblemUpdateWithoutModelEvaluationsInput, ProblemUncheckedUpdateWithoutModelEvaluationsInput>
    create: XOR<ProblemCreateWithoutModelEvaluationsInput, ProblemUncheckedCreateWithoutModelEvaluationsInput>
    where?: ProblemWhereInput
  }

  export type ProblemUpdateToOneWithWhereWithoutModelEvaluationsInput = {
    where?: ProblemWhereInput
    data: XOR<ProblemUpdateWithoutModelEvaluationsInput, ProblemUncheckedUpdateWithoutModelEvaluationsInput>
  }

  export type ProblemUpdateWithoutModelEvaluationsInput = {
    content?: StringFieldUpdateOperationsInput | string
    answer?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groundTruth?: GroundTruthUpdateOneRequiredWithoutProblemNestedInput
    quizResponses?: QuizResponseUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateWithoutModelEvaluationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    answer?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groundTruthId?: IntFieldUpdateOperationsInput | number
    quizResponses?: QuizResponseUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type QuizAttemptCreateWithoutSessionInput = {
    startTime?: Date | string
    endTime?: Date | string | null
    responses?: QuizResponseCreateNestedManyWithoutAttemptInput
    student: StudentCreateNestedOneWithoutQuizAttemptsInput
  }

  export type QuizAttemptUncheckedCreateWithoutSessionInput = {
    id?: number
    studentId: number
    startTime?: Date | string
    endTime?: Date | string | null
    responses?: QuizResponseUncheckedCreateNestedManyWithoutAttemptInput
  }

  export type QuizAttemptCreateOrConnectWithoutSessionInput = {
    where: QuizAttemptWhereUniqueInput
    create: XOR<QuizAttemptCreateWithoutSessionInput, QuizAttemptUncheckedCreateWithoutSessionInput>
  }

  export type QuizAttemptCreateManySessionInputEnvelope = {
    data: QuizAttemptCreateManySessionInput | QuizAttemptCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type QuizCodeCreateWithoutSessionInput = {
    code: string
    createdAt?: Date | string
    student: StudentCreateNestedOneWithoutQuizCodesInput
  }

  export type QuizCodeUncheckedCreateWithoutSessionInput = {
    code: string
    studentId: number
    createdAt?: Date | string
  }

  export type QuizCodeCreateOrConnectWithoutSessionInput = {
    where: QuizCodeWhereUniqueInput
    create: XOR<QuizCodeCreateWithoutSessionInput, QuizCodeUncheckedCreateWithoutSessionInput>
  }

  export type QuizCodeCreateManySessionInputEnvelope = {
    data: QuizCodeCreateManySessionInput | QuizCodeCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type ClassCreateWithoutQuizSessionsInput = {
    name: string
    createdAt?: Date | string
    teacher: TeacherCreateNestedOneWithoutClassesInput
    students?: StudentCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutQuizSessionsInput = {
    id?: number
    name: string
    teacherId: number
    createdAt?: Date | string
    students?: StudentUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutQuizSessionsInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutQuizSessionsInput, ClassUncheckedCreateWithoutQuizSessionsInput>
  }

  export type TeacherCreateWithoutQuizSessionsInput = {
    email: string
    hashedPassword: string
    createdAt?: Date | string
    name: string
    classes?: ClassCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutQuizSessionsInput = {
    id?: number
    email: string
    hashedPassword: string
    createdAt?: Date | string
    name: string
    classes?: ClassUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutQuizSessionsInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutQuizSessionsInput, TeacherUncheckedCreateWithoutQuizSessionsInput>
  }

  export type QuizAttemptUpsertWithWhereUniqueWithoutSessionInput = {
    where: QuizAttemptWhereUniqueInput
    update: XOR<QuizAttemptUpdateWithoutSessionInput, QuizAttemptUncheckedUpdateWithoutSessionInput>
    create: XOR<QuizAttemptCreateWithoutSessionInput, QuizAttemptUncheckedCreateWithoutSessionInput>
  }

  export type QuizAttemptUpdateWithWhereUniqueWithoutSessionInput = {
    where: QuizAttemptWhereUniqueInput
    data: XOR<QuizAttemptUpdateWithoutSessionInput, QuizAttemptUncheckedUpdateWithoutSessionInput>
  }

  export type QuizAttemptUpdateManyWithWhereWithoutSessionInput = {
    where: QuizAttemptScalarWhereInput
    data: XOR<QuizAttemptUpdateManyMutationInput, QuizAttemptUncheckedUpdateManyWithoutSessionInput>
  }

  export type QuizCodeUpsertWithWhereUniqueWithoutSessionInput = {
    where: QuizCodeWhereUniqueInput
    update: XOR<QuizCodeUpdateWithoutSessionInput, QuizCodeUncheckedUpdateWithoutSessionInput>
    create: XOR<QuizCodeCreateWithoutSessionInput, QuizCodeUncheckedCreateWithoutSessionInput>
  }

  export type QuizCodeUpdateWithWhereUniqueWithoutSessionInput = {
    where: QuizCodeWhereUniqueInput
    data: XOR<QuizCodeUpdateWithoutSessionInput, QuizCodeUncheckedUpdateWithoutSessionInput>
  }

  export type QuizCodeUpdateManyWithWhereWithoutSessionInput = {
    where: QuizCodeScalarWhereInput
    data: XOR<QuizCodeUpdateManyMutationInput, QuizCodeUncheckedUpdateManyWithoutSessionInput>
  }

  export type ClassUpsertWithoutQuizSessionsInput = {
    update: XOR<ClassUpdateWithoutQuizSessionsInput, ClassUncheckedUpdateWithoutQuizSessionsInput>
    create: XOR<ClassCreateWithoutQuizSessionsInput, ClassUncheckedCreateWithoutQuizSessionsInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutQuizSessionsInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutQuizSessionsInput, ClassUncheckedUpdateWithoutQuizSessionsInput>
  }

  export type ClassUpdateWithoutQuizSessionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: TeacherUpdateOneRequiredWithoutClassesNestedInput
    students?: StudentUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutQuizSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    teacherId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUncheckedUpdateManyWithoutClassNestedInput
  }

  export type TeacherUpsertWithoutQuizSessionsInput = {
    update: XOR<TeacherUpdateWithoutQuizSessionsInput, TeacherUncheckedUpdateWithoutQuizSessionsInput>
    create: XOR<TeacherCreateWithoutQuizSessionsInput, TeacherUncheckedCreateWithoutQuizSessionsInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutQuizSessionsInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutQuizSessionsInput, TeacherUncheckedUpdateWithoutQuizSessionsInput>
  }

  export type TeacherUpdateWithoutQuizSessionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    classes?: ClassUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutQuizSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    classes?: ClassUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type QuizSessionCreateWithoutQuizCodesInput = {
    startTime?: Date | string
    endTime?: Date | string | null
    status?: $Enums.QuizStatus
    settings?: NullableJsonNullValueInput | InputJsonValue
    attempts?: QuizAttemptCreateNestedManyWithoutSessionInput
    class: ClassCreateNestedOneWithoutQuizSessionsInput
    teacher: TeacherCreateNestedOneWithoutQuizSessionsInput
  }

  export type QuizSessionUncheckedCreateWithoutQuizCodesInput = {
    id?: number
    classId: number
    teacherId: number
    startTime?: Date | string
    endTime?: Date | string | null
    status?: $Enums.QuizStatus
    settings?: NullableJsonNullValueInput | InputJsonValue
    attempts?: QuizAttemptUncheckedCreateNestedManyWithoutSessionInput
  }

  export type QuizSessionCreateOrConnectWithoutQuizCodesInput = {
    where: QuizSessionWhereUniqueInput
    create: XOR<QuizSessionCreateWithoutQuizCodesInput, QuizSessionUncheckedCreateWithoutQuizCodesInput>
  }

  export type StudentCreateWithoutQuizCodesInput = {
    name: string
    userName: string
    quizAttempts?: QuizAttemptCreateNestedManyWithoutStudentInput
    class: ClassCreateNestedOneWithoutStudentsInput
  }

  export type StudentUncheckedCreateWithoutQuizCodesInput = {
    id?: number
    name: string
    classId: number
    userName: string
    quizAttempts?: QuizAttemptUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutQuizCodesInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutQuizCodesInput, StudentUncheckedCreateWithoutQuizCodesInput>
  }

  export type QuizSessionUpsertWithoutQuizCodesInput = {
    update: XOR<QuizSessionUpdateWithoutQuizCodesInput, QuizSessionUncheckedUpdateWithoutQuizCodesInput>
    create: XOR<QuizSessionCreateWithoutQuizCodesInput, QuizSessionUncheckedCreateWithoutQuizCodesInput>
    where?: QuizSessionWhereInput
  }

  export type QuizSessionUpdateToOneWithWhereWithoutQuizCodesInput = {
    where?: QuizSessionWhereInput
    data: XOR<QuizSessionUpdateWithoutQuizCodesInput, QuizSessionUncheckedUpdateWithoutQuizCodesInput>
  }

  export type QuizSessionUpdateWithoutQuizCodesInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    settings?: NullableJsonNullValueInput | InputJsonValue
    attempts?: QuizAttemptUpdateManyWithoutSessionNestedInput
    class?: ClassUpdateOneRequiredWithoutQuizSessionsNestedInput
    teacher?: TeacherUpdateOneRequiredWithoutQuizSessionsNestedInput
  }

  export type QuizSessionUncheckedUpdateWithoutQuizCodesInput = {
    id?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    settings?: NullableJsonNullValueInput | InputJsonValue
    attempts?: QuizAttemptUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type StudentUpsertWithoutQuizCodesInput = {
    update: XOR<StudentUpdateWithoutQuizCodesInput, StudentUncheckedUpdateWithoutQuizCodesInput>
    create: XOR<StudentCreateWithoutQuizCodesInput, StudentUncheckedCreateWithoutQuizCodesInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutQuizCodesInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutQuizCodesInput, StudentUncheckedUpdateWithoutQuizCodesInput>
  }

  export type StudentUpdateWithoutQuizCodesInput = {
    name?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    quizAttempts?: QuizAttemptUpdateManyWithoutStudentNestedInput
    class?: ClassUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateWithoutQuizCodesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    classId?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    quizAttempts?: QuizAttemptUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type QuizResponseCreateWithoutAttemptInput = {
    studentAnswer?: number | null
    timeSpent: number
    storyGrammarAnswers?: NullableJsonNullValueInput | InputJsonValue
    finalAnswerCorrect?: boolean | null
    storyGrammarCorrect?: boolean | null
    problem: ProblemCreateNestedOneWithoutQuizResponsesInput
  }

  export type QuizResponseUncheckedCreateWithoutAttemptInput = {
    id?: number
    problemId: number
    studentAnswer?: number | null
    timeSpent: number
    storyGrammarAnswers?: NullableJsonNullValueInput | InputJsonValue
    finalAnswerCorrect?: boolean | null
    storyGrammarCorrect?: boolean | null
  }

  export type QuizResponseCreateOrConnectWithoutAttemptInput = {
    where: QuizResponseWhereUniqueInput
    create: XOR<QuizResponseCreateWithoutAttemptInput, QuizResponseUncheckedCreateWithoutAttemptInput>
  }

  export type QuizResponseCreateManyAttemptInputEnvelope = {
    data: QuizResponseCreateManyAttemptInput | QuizResponseCreateManyAttemptInput[]
    skipDuplicates?: boolean
  }

  export type QuizSessionCreateWithoutAttemptsInput = {
    startTime?: Date | string
    endTime?: Date | string | null
    status?: $Enums.QuizStatus
    settings?: NullableJsonNullValueInput | InputJsonValue
    quizCodes?: QuizCodeCreateNestedManyWithoutSessionInput
    class: ClassCreateNestedOneWithoutQuizSessionsInput
    teacher: TeacherCreateNestedOneWithoutQuizSessionsInput
  }

  export type QuizSessionUncheckedCreateWithoutAttemptsInput = {
    id?: number
    classId: number
    teacherId: number
    startTime?: Date | string
    endTime?: Date | string | null
    status?: $Enums.QuizStatus
    settings?: NullableJsonNullValueInput | InputJsonValue
    quizCodes?: QuizCodeUncheckedCreateNestedManyWithoutSessionInput
  }

  export type QuizSessionCreateOrConnectWithoutAttemptsInput = {
    where: QuizSessionWhereUniqueInput
    create: XOR<QuizSessionCreateWithoutAttemptsInput, QuizSessionUncheckedCreateWithoutAttemptsInput>
  }

  export type StudentCreateWithoutQuizAttemptsInput = {
    name: string
    userName: string
    quizCodes?: QuizCodeCreateNestedManyWithoutStudentInput
    class: ClassCreateNestedOneWithoutStudentsInput
  }

  export type StudentUncheckedCreateWithoutQuizAttemptsInput = {
    id?: number
    name: string
    classId: number
    userName: string
    quizCodes?: QuizCodeUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutQuizAttemptsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutQuizAttemptsInput, StudentUncheckedCreateWithoutQuizAttemptsInput>
  }

  export type QuizResponseUpsertWithWhereUniqueWithoutAttemptInput = {
    where: QuizResponseWhereUniqueInput
    update: XOR<QuizResponseUpdateWithoutAttemptInput, QuizResponseUncheckedUpdateWithoutAttemptInput>
    create: XOR<QuizResponseCreateWithoutAttemptInput, QuizResponseUncheckedCreateWithoutAttemptInput>
  }

  export type QuizResponseUpdateWithWhereUniqueWithoutAttemptInput = {
    where: QuizResponseWhereUniqueInput
    data: XOR<QuizResponseUpdateWithoutAttemptInput, QuizResponseUncheckedUpdateWithoutAttemptInput>
  }

  export type QuizResponseUpdateManyWithWhereWithoutAttemptInput = {
    where: QuizResponseScalarWhereInput
    data: XOR<QuizResponseUpdateManyMutationInput, QuizResponseUncheckedUpdateManyWithoutAttemptInput>
  }

  export type QuizSessionUpsertWithoutAttemptsInput = {
    update: XOR<QuizSessionUpdateWithoutAttemptsInput, QuizSessionUncheckedUpdateWithoutAttemptsInput>
    create: XOR<QuizSessionCreateWithoutAttemptsInput, QuizSessionUncheckedCreateWithoutAttemptsInput>
    where?: QuizSessionWhereInput
  }

  export type QuizSessionUpdateToOneWithWhereWithoutAttemptsInput = {
    where?: QuizSessionWhereInput
    data: XOR<QuizSessionUpdateWithoutAttemptsInput, QuizSessionUncheckedUpdateWithoutAttemptsInput>
  }

  export type QuizSessionUpdateWithoutAttemptsInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    settings?: NullableJsonNullValueInput | InputJsonValue
    quizCodes?: QuizCodeUpdateManyWithoutSessionNestedInput
    class?: ClassUpdateOneRequiredWithoutQuizSessionsNestedInput
    teacher?: TeacherUpdateOneRequiredWithoutQuizSessionsNestedInput
  }

  export type QuizSessionUncheckedUpdateWithoutAttemptsInput = {
    id?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    settings?: NullableJsonNullValueInput | InputJsonValue
    quizCodes?: QuizCodeUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type StudentUpsertWithoutQuizAttemptsInput = {
    update: XOR<StudentUpdateWithoutQuizAttemptsInput, StudentUncheckedUpdateWithoutQuizAttemptsInput>
    create: XOR<StudentCreateWithoutQuizAttemptsInput, StudentUncheckedCreateWithoutQuizAttemptsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutQuizAttemptsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutQuizAttemptsInput, StudentUncheckedUpdateWithoutQuizAttemptsInput>
  }

  export type StudentUpdateWithoutQuizAttemptsInput = {
    name?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    quizCodes?: QuizCodeUpdateManyWithoutStudentNestedInput
    class?: ClassUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateWithoutQuizAttemptsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    classId?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    quizCodes?: QuizCodeUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type QuizAttemptCreateWithoutResponsesInput = {
    startTime?: Date | string
    endTime?: Date | string | null
    session: QuizSessionCreateNestedOneWithoutAttemptsInput
    student: StudentCreateNestedOneWithoutQuizAttemptsInput
  }

  export type QuizAttemptUncheckedCreateWithoutResponsesInput = {
    id?: number
    sessionId: number
    studentId: number
    startTime?: Date | string
    endTime?: Date | string | null
  }

  export type QuizAttemptCreateOrConnectWithoutResponsesInput = {
    where: QuizAttemptWhereUniqueInput
    create: XOR<QuizAttemptCreateWithoutResponsesInput, QuizAttemptUncheckedCreateWithoutResponsesInput>
  }

  export type ProblemCreateWithoutQuizResponsesInput = {
    content: string
    answer: number
    createdAt?: Date | string
    groundTruth: GroundTruthCreateNestedOneWithoutProblemInput
    modelEvaluations?: ModelEvaluationCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateWithoutQuizResponsesInput = {
    id?: number
    content: string
    answer: number
    createdAt?: Date | string
    groundTruthId: number
    modelEvaluations?: ModelEvaluationUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutQuizResponsesInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutQuizResponsesInput, ProblemUncheckedCreateWithoutQuizResponsesInput>
  }

  export type QuizAttemptUpsertWithoutResponsesInput = {
    update: XOR<QuizAttemptUpdateWithoutResponsesInput, QuizAttemptUncheckedUpdateWithoutResponsesInput>
    create: XOR<QuizAttemptCreateWithoutResponsesInput, QuizAttemptUncheckedCreateWithoutResponsesInput>
    where?: QuizAttemptWhereInput
  }

  export type QuizAttemptUpdateToOneWithWhereWithoutResponsesInput = {
    where?: QuizAttemptWhereInput
    data: XOR<QuizAttemptUpdateWithoutResponsesInput, QuizAttemptUncheckedUpdateWithoutResponsesInput>
  }

  export type QuizAttemptUpdateWithoutResponsesInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    session?: QuizSessionUpdateOneRequiredWithoutAttemptsNestedInput
    student?: StudentUpdateOneRequiredWithoutQuizAttemptsNestedInput
  }

  export type QuizAttemptUncheckedUpdateWithoutResponsesInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProblemUpsertWithoutQuizResponsesInput = {
    update: XOR<ProblemUpdateWithoutQuizResponsesInput, ProblemUncheckedUpdateWithoutQuizResponsesInput>
    create: XOR<ProblemCreateWithoutQuizResponsesInput, ProblemUncheckedCreateWithoutQuizResponsesInput>
    where?: ProblemWhereInput
  }

  export type ProblemUpdateToOneWithWhereWithoutQuizResponsesInput = {
    where?: ProblemWhereInput
    data: XOR<ProblemUpdateWithoutQuizResponsesInput, ProblemUncheckedUpdateWithoutQuizResponsesInput>
  }

  export type ProblemUpdateWithoutQuizResponsesInput = {
    content?: StringFieldUpdateOperationsInput | string
    answer?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groundTruth?: GroundTruthUpdateOneRequiredWithoutProblemNestedInput
    modelEvaluations?: ModelEvaluationUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateWithoutQuizResponsesInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    answer?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groundTruthId?: IntFieldUpdateOperationsInput | number
    modelEvaluations?: ModelEvaluationUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type ClassCreateManyTeacherInput = {
    id?: number
    name: string
    createdAt?: Date | string
  }

  export type QuizSessionCreateManyTeacherInput = {
    id?: number
    classId: number
    startTime?: Date | string
    endTime?: Date | string | null
    status?: $Enums.QuizStatus
    settings?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ClassUpdateWithoutTeacherInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizSessions?: QuizSessionUpdateManyWithoutClassNestedInput
    students?: StudentUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizSessions?: QuizSessionUncheckedUpdateManyWithoutClassNestedInput
    students?: StudentUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateManyWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizSessionUpdateWithoutTeacherInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    settings?: NullableJsonNullValueInput | InputJsonValue
    attempts?: QuizAttemptUpdateManyWithoutSessionNestedInput
    quizCodes?: QuizCodeUpdateManyWithoutSessionNestedInput
    class?: ClassUpdateOneRequiredWithoutQuizSessionsNestedInput
  }

  export type QuizSessionUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    settings?: NullableJsonNullValueInput | InputJsonValue
    attempts?: QuizAttemptUncheckedUpdateManyWithoutSessionNestedInput
    quizCodes?: QuizCodeUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type QuizSessionUncheckedUpdateManyWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    settings?: NullableJsonNullValueInput | InputJsonValue
  }

  export type QuizSessionCreateManyClassInput = {
    id?: number
    teacherId: number
    startTime?: Date | string
    endTime?: Date | string | null
    status?: $Enums.QuizStatus
    settings?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StudentCreateManyClassInput = {
    id?: number
    name: string
    userName: string
  }

  export type QuizSessionUpdateWithoutClassInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    settings?: NullableJsonNullValueInput | InputJsonValue
    attempts?: QuizAttemptUpdateManyWithoutSessionNestedInput
    quizCodes?: QuizCodeUpdateManyWithoutSessionNestedInput
    teacher?: TeacherUpdateOneRequiredWithoutQuizSessionsNestedInput
  }

  export type QuizSessionUncheckedUpdateWithoutClassInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    settings?: NullableJsonNullValueInput | InputJsonValue
    attempts?: QuizAttemptUncheckedUpdateManyWithoutSessionNestedInput
    quizCodes?: QuizCodeUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type QuizSessionUncheckedUpdateManyWithoutClassInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    settings?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StudentUpdateWithoutClassInput = {
    name?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    quizAttempts?: QuizAttemptUpdateManyWithoutStudentNestedInput
    quizCodes?: QuizCodeUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutClassInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    quizAttempts?: QuizAttemptUncheckedUpdateManyWithoutStudentNestedInput
    quizCodes?: QuizCodeUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutClassInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
  }

  export type QuizAttemptCreateManyStudentInput = {
    id?: number
    sessionId: number
    startTime?: Date | string
    endTime?: Date | string | null
  }

  export type QuizCodeCreateManyStudentInput = {
    code: string
    sessionId: number
    createdAt?: Date | string
  }

  export type QuizAttemptUpdateWithoutStudentInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responses?: QuizResponseUpdateManyWithoutAttemptNestedInput
    session?: QuizSessionUpdateOneRequiredWithoutAttemptsNestedInput
  }

  export type QuizAttemptUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responses?: QuizResponseUncheckedUpdateManyWithoutAttemptNestedInput
  }

  export type QuizAttemptUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuizCodeUpdateWithoutStudentInput = {
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: QuizSessionUpdateOneRequiredWithoutQuizCodesNestedInput
  }

  export type QuizCodeUncheckedUpdateWithoutStudentInput = {
    code?: StringFieldUpdateOperationsInput | string
    sessionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizCodeUncheckedUpdateManyWithoutStudentInput = {
    code?: StringFieldUpdateOperationsInput | string
    sessionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelEvaluationCreateManyProblemInput = {
    id?: number
    tokenUsage: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    predictedCategory?: $Enums.Category | null
    predictedSubcategory?: $Enums.Subcategory | null
    modelName: $Enums.AIModelName
    answer?: number | null
    isAnswerCorrect: boolean
    isModelMappingCorrect: boolean
    modelAnswers?: NullableJsonNullValueInput | InputJsonValue
    storyGrammarPrompts?: NullableJsonNullValueInput | InputJsonValue
    groundTruthId: number
    modelAnswerReasoning?: string | null
    subCategoryReasoning?: string | null
    supercategoryReasoning: string
  }

  export type QuizResponseCreateManyProblemInput = {
    id?: number
    attemptId: number
    studentAnswer?: number | null
    timeSpent: number
    storyGrammarAnswers?: NullableJsonNullValueInput | InputJsonValue
    finalAnswerCorrect?: boolean | null
    storyGrammarCorrect?: boolean | null
  }

  export type ModelEvaluationUpdateWithoutProblemInput = {
    tokenUsage?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    predictedCategory?: NullableEnumCategoryFieldUpdateOperationsInput | $Enums.Category | null
    predictedSubcategory?: NullableEnumSubcategoryFieldUpdateOperationsInput | $Enums.Subcategory | null
    modelName?: EnumAIModelNameFieldUpdateOperationsInput | $Enums.AIModelName
    answer?: NullableIntFieldUpdateOperationsInput | number | null
    isAnswerCorrect?: BoolFieldUpdateOperationsInput | boolean
    isModelMappingCorrect?: BoolFieldUpdateOperationsInput | boolean
    modelAnswers?: NullableJsonNullValueInput | InputJsonValue
    storyGrammarPrompts?: NullableJsonNullValueInput | InputJsonValue
    modelAnswerReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    subCategoryReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    supercategoryReasoning?: StringFieldUpdateOperationsInput | string
    groundTruth?: GroundTruthUpdateOneRequiredWithoutModelEvaluationsNestedInput
  }

  export type ModelEvaluationUncheckedUpdateWithoutProblemInput = {
    id?: IntFieldUpdateOperationsInput | number
    tokenUsage?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    predictedCategory?: NullableEnumCategoryFieldUpdateOperationsInput | $Enums.Category | null
    predictedSubcategory?: NullableEnumSubcategoryFieldUpdateOperationsInput | $Enums.Subcategory | null
    modelName?: EnumAIModelNameFieldUpdateOperationsInput | $Enums.AIModelName
    answer?: NullableIntFieldUpdateOperationsInput | number | null
    isAnswerCorrect?: BoolFieldUpdateOperationsInput | boolean
    isModelMappingCorrect?: BoolFieldUpdateOperationsInput | boolean
    modelAnswers?: NullableJsonNullValueInput | InputJsonValue
    storyGrammarPrompts?: NullableJsonNullValueInput | InputJsonValue
    groundTruthId?: IntFieldUpdateOperationsInput | number
    modelAnswerReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    subCategoryReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    supercategoryReasoning?: StringFieldUpdateOperationsInput | string
  }

  export type ModelEvaluationUncheckedUpdateManyWithoutProblemInput = {
    id?: IntFieldUpdateOperationsInput | number
    tokenUsage?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    predictedCategory?: NullableEnumCategoryFieldUpdateOperationsInput | $Enums.Category | null
    predictedSubcategory?: NullableEnumSubcategoryFieldUpdateOperationsInput | $Enums.Subcategory | null
    modelName?: EnumAIModelNameFieldUpdateOperationsInput | $Enums.AIModelName
    answer?: NullableIntFieldUpdateOperationsInput | number | null
    isAnswerCorrect?: BoolFieldUpdateOperationsInput | boolean
    isModelMappingCorrect?: BoolFieldUpdateOperationsInput | boolean
    modelAnswers?: NullableJsonNullValueInput | InputJsonValue
    storyGrammarPrompts?: NullableJsonNullValueInput | InputJsonValue
    groundTruthId?: IntFieldUpdateOperationsInput | number
    modelAnswerReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    subCategoryReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    supercategoryReasoning?: StringFieldUpdateOperationsInput | string
  }

  export type QuizResponseUpdateWithoutProblemInput = {
    studentAnswer?: NullableIntFieldUpdateOperationsInput | number | null
    timeSpent?: IntFieldUpdateOperationsInput | number
    storyGrammarAnswers?: NullableJsonNullValueInput | InputJsonValue
    finalAnswerCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    storyGrammarCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    attempt?: QuizAttemptUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type QuizResponseUncheckedUpdateWithoutProblemInput = {
    id?: IntFieldUpdateOperationsInput | number
    attemptId?: IntFieldUpdateOperationsInput | number
    studentAnswer?: NullableIntFieldUpdateOperationsInput | number | null
    timeSpent?: IntFieldUpdateOperationsInput | number
    storyGrammarAnswers?: NullableJsonNullValueInput | InputJsonValue
    finalAnswerCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    storyGrammarCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type QuizResponseUncheckedUpdateManyWithoutProblemInput = {
    id?: IntFieldUpdateOperationsInput | number
    attemptId?: IntFieldUpdateOperationsInput | number
    studentAnswer?: NullableIntFieldUpdateOperationsInput | number | null
    timeSpent?: IntFieldUpdateOperationsInput | number
    storyGrammarAnswers?: NullableJsonNullValueInput | InputJsonValue
    finalAnswerCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    storyGrammarCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ModelEvaluationCreateManyGroundTruthInput = {
    id?: number
    problemId: number
    tokenUsage: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    predictedCategory?: $Enums.Category | null
    predictedSubcategory?: $Enums.Subcategory | null
    modelName: $Enums.AIModelName
    answer?: number | null
    isAnswerCorrect: boolean
    isModelMappingCorrect: boolean
    modelAnswers?: NullableJsonNullValueInput | InputJsonValue
    storyGrammarPrompts?: NullableJsonNullValueInput | InputJsonValue
    modelAnswerReasoning?: string | null
    subCategoryReasoning?: string | null
    supercategoryReasoning: string
  }

  export type ModelEvaluationUpdateWithoutGroundTruthInput = {
    tokenUsage?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    predictedCategory?: NullableEnumCategoryFieldUpdateOperationsInput | $Enums.Category | null
    predictedSubcategory?: NullableEnumSubcategoryFieldUpdateOperationsInput | $Enums.Subcategory | null
    modelName?: EnumAIModelNameFieldUpdateOperationsInput | $Enums.AIModelName
    answer?: NullableIntFieldUpdateOperationsInput | number | null
    isAnswerCorrect?: BoolFieldUpdateOperationsInput | boolean
    isModelMappingCorrect?: BoolFieldUpdateOperationsInput | boolean
    modelAnswers?: NullableJsonNullValueInput | InputJsonValue
    storyGrammarPrompts?: NullableJsonNullValueInput | InputJsonValue
    modelAnswerReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    subCategoryReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    supercategoryReasoning?: StringFieldUpdateOperationsInput | string
    problem?: ProblemUpdateOneRequiredWithoutModelEvaluationsNestedInput
  }

  export type ModelEvaluationUncheckedUpdateWithoutGroundTruthInput = {
    id?: IntFieldUpdateOperationsInput | number
    problemId?: IntFieldUpdateOperationsInput | number
    tokenUsage?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    predictedCategory?: NullableEnumCategoryFieldUpdateOperationsInput | $Enums.Category | null
    predictedSubcategory?: NullableEnumSubcategoryFieldUpdateOperationsInput | $Enums.Subcategory | null
    modelName?: EnumAIModelNameFieldUpdateOperationsInput | $Enums.AIModelName
    answer?: NullableIntFieldUpdateOperationsInput | number | null
    isAnswerCorrect?: BoolFieldUpdateOperationsInput | boolean
    isModelMappingCorrect?: BoolFieldUpdateOperationsInput | boolean
    modelAnswers?: NullableJsonNullValueInput | InputJsonValue
    storyGrammarPrompts?: NullableJsonNullValueInput | InputJsonValue
    modelAnswerReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    subCategoryReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    supercategoryReasoning?: StringFieldUpdateOperationsInput | string
  }

  export type ModelEvaluationUncheckedUpdateManyWithoutGroundTruthInput = {
    id?: IntFieldUpdateOperationsInput | number
    problemId?: IntFieldUpdateOperationsInput | number
    tokenUsage?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    predictedCategory?: NullableEnumCategoryFieldUpdateOperationsInput | $Enums.Category | null
    predictedSubcategory?: NullableEnumSubcategoryFieldUpdateOperationsInput | $Enums.Subcategory | null
    modelName?: EnumAIModelNameFieldUpdateOperationsInput | $Enums.AIModelName
    answer?: NullableIntFieldUpdateOperationsInput | number | null
    isAnswerCorrect?: BoolFieldUpdateOperationsInput | boolean
    isModelMappingCorrect?: BoolFieldUpdateOperationsInput | boolean
    modelAnswers?: NullableJsonNullValueInput | InputJsonValue
    storyGrammarPrompts?: NullableJsonNullValueInput | InputJsonValue
    modelAnswerReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    subCategoryReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    supercategoryReasoning?: StringFieldUpdateOperationsInput | string
  }

  export type QuizAttemptCreateManySessionInput = {
    id?: number
    studentId: number
    startTime?: Date | string
    endTime?: Date | string | null
  }

  export type QuizCodeCreateManySessionInput = {
    code: string
    studentId: number
    createdAt?: Date | string
  }

  export type QuizAttemptUpdateWithoutSessionInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responses?: QuizResponseUpdateManyWithoutAttemptNestedInput
    student?: StudentUpdateOneRequiredWithoutQuizAttemptsNestedInput
  }

  export type QuizAttemptUncheckedUpdateWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responses?: QuizResponseUncheckedUpdateManyWithoutAttemptNestedInput
  }

  export type QuizAttemptUncheckedUpdateManyWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuizCodeUpdateWithoutSessionInput = {
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutQuizCodesNestedInput
  }

  export type QuizCodeUncheckedUpdateWithoutSessionInput = {
    code?: StringFieldUpdateOperationsInput | string
    studentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizCodeUncheckedUpdateManyWithoutSessionInput = {
    code?: StringFieldUpdateOperationsInput | string
    studentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizResponseCreateManyAttemptInput = {
    id?: number
    problemId: number
    studentAnswer?: number | null
    timeSpent: number
    storyGrammarAnswers?: NullableJsonNullValueInput | InputJsonValue
    finalAnswerCorrect?: boolean | null
    storyGrammarCorrect?: boolean | null
  }

  export type QuizResponseUpdateWithoutAttemptInput = {
    studentAnswer?: NullableIntFieldUpdateOperationsInput | number | null
    timeSpent?: IntFieldUpdateOperationsInput | number
    storyGrammarAnswers?: NullableJsonNullValueInput | InputJsonValue
    finalAnswerCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    storyGrammarCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    problem?: ProblemUpdateOneRequiredWithoutQuizResponsesNestedInput
  }

  export type QuizResponseUncheckedUpdateWithoutAttemptInput = {
    id?: IntFieldUpdateOperationsInput | number
    problemId?: IntFieldUpdateOperationsInput | number
    studentAnswer?: NullableIntFieldUpdateOperationsInput | number | null
    timeSpent?: IntFieldUpdateOperationsInput | number
    storyGrammarAnswers?: NullableJsonNullValueInput | InputJsonValue
    finalAnswerCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    storyGrammarCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type QuizResponseUncheckedUpdateManyWithoutAttemptInput = {
    id?: IntFieldUpdateOperationsInput | number
    problemId?: IntFieldUpdateOperationsInput | number
    studentAnswer?: NullableIntFieldUpdateOperationsInput | number | null
    timeSpent?: IntFieldUpdateOperationsInput | number
    storyGrammarAnswers?: NullableJsonNullValueInput | InputJsonValue
    finalAnswerCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    storyGrammarCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
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