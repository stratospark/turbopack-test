import { z } from 'zod';
import type { Prisma } from './prismaClient';
import { type TableSchema, DbSchema, Relation, ElectricClient, type HKT } from 'electric-sql/client/model';
import migrations from './migrations';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////

// JSON
//------------------------------------------------------

export type NullableJsonInput = Prisma.JsonValue | null;


export const JsonValue: z.ZodType<Prisma.JsonValue> = z.union([
  z.null(),
  z.string(),
  z.number(),
  z.boolean(),
  z.lazy(() => z.array(JsonValue)),
  z.lazy(() => z.record(JsonValue)),
]);

export type JsonValueType = z.infer<typeof JsonValue>;

export const NullableJsonValue = JsonValue
  .nullable();

export type NullableJsonValueType = z.infer<typeof NullableJsonValue>;

export const InputJsonValue: z.ZodType<Prisma.InputJsonValue> = z.union([
  z.null(),
  z.string(),
  z.number(),
  z.boolean(),
  z.lazy(() => z.array(InputJsonValue.nullable())),
  z.lazy(() => z.record(InputJsonValue.nullable())),
]);

export type InputJsonValueType = z.infer<typeof InputJsonValue>;


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const Card_promptsScalarFieldEnumSchema = z.enum(['id','text','state','deck_id','created_at','updated_at']);

export const CardsScalarFieldEnumSchema = z.enum(['id','card_prompt_id','front_text','back_text','created_at','updated_at']);

export const DecksScalarFieldEnumSchema = z.enum(['id','name','description','created_at','updated_at']);

export const JsonNullValueFilterSchema = z.enum(['DbNull','JsonNull','AnyNull',]);

export const MultimediaScalarFieldEnumSchema = z.enum(['id','multimedia_prompt_id','media_type','url','metadata','created_at','updated_at']);

export const Multimedia_promptsScalarFieldEnumSchema = z.enum(['id','text','state','card_id','created_at','updated_at']);

export const NullableJsonNullValueInputSchema = z.enum(['DbNull','JsonNull',])

export const QueryModeSchema = z.enum(['default','insensitive']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const prompt_stateSchema = z.enum(['PENDING','PROCESSING','FAILED_RETRY','FAILED','COMPLETE']);

export type prompt_stateType = `${z.infer<typeof prompt_stateSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// CARD PROMPTS SCHEMA
/////////////////////////////////////////

export const Card_promptsSchema = z.object({
  state: prompt_stateSchema,
  id: z.string().uuid(),
  text: z.string(),
  deck_id: z.string().uuid(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
})

export type Card_prompts = z.infer<typeof Card_promptsSchema>

/////////////////////////////////////////
// CARDS SCHEMA
/////////////////////////////////////////

export const CardsSchema = z.object({
  id: z.string().uuid(),
  card_prompt_id: z.string().uuid(),
  front_text: z.string(),
  back_text: z.string().nullable(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
})

export type Cards = z.infer<typeof CardsSchema>

/////////////////////////////////////////
// DECKS SCHEMA
/////////////////////////////////////////

export const DecksSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string().nullable(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
})

export type Decks = z.infer<typeof DecksSchema>

/////////////////////////////////////////
// MULTIMEDIA SCHEMA
/////////////////////////////////////////

export const MultimediaSchema = z.object({
  id: z.string().uuid(),
  multimedia_prompt_id: z.string().uuid(),
  media_type: z.string(),
  url: z.string().nullable(),
  metadata: NullableJsonValue.optional(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
})

export type Multimedia = z.infer<typeof MultimediaSchema>

/////////////////////////////////////////
// MULTIMEDIA PROMPTS SCHEMA
/////////////////////////////////////////

export const Multimedia_promptsSchema = z.object({
  state: prompt_stateSchema,
  id: z.string().uuid(),
  text: z.string(),
  card_id: z.string().uuid(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
})

export type Multimedia_prompts = z.infer<typeof Multimedia_promptsSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// CARD PROMPTS
//------------------------------------------------------

export const Card_promptsIncludeSchema: z.ZodType<Prisma.Card_promptsInclude> = z.object({
  decks: z.union([z.boolean(),z.lazy(() => DecksArgsSchema)]).optional(),
  cards: z.union([z.boolean(),z.lazy(() => CardsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => Card_promptsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const Card_promptsArgsSchema: z.ZodType<Prisma.Card_promptsArgs> = z.object({
  select: z.lazy(() => Card_promptsSelectSchema).optional(),
  include: z.lazy(() => Card_promptsIncludeSchema).optional(),
}).strict();

export const Card_promptsCountOutputTypeArgsSchema: z.ZodType<Prisma.Card_promptsCountOutputTypeArgs> = z.object({
  select: z.lazy(() => Card_promptsCountOutputTypeSelectSchema).nullish(),
}).strict();

export const Card_promptsCountOutputTypeSelectSchema: z.ZodType<Prisma.Card_promptsCountOutputTypeSelect> = z.object({
  cards: z.boolean().optional(),
}).strict();

export const Card_promptsSelectSchema: z.ZodType<Prisma.Card_promptsSelect> = z.object({
  id: z.boolean().optional(),
  text: z.boolean().optional(),
  state: z.boolean().optional(),
  deck_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  decks: z.union([z.boolean(),z.lazy(() => DecksArgsSchema)]).optional(),
  cards: z.union([z.boolean(),z.lazy(() => CardsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => Card_promptsCountOutputTypeArgsSchema)]).optional(),
}).strict()

// CARDS
//------------------------------------------------------

export const CardsIncludeSchema: z.ZodType<Prisma.CardsInclude> = z.object({
  card_prompts: z.union([z.boolean(),z.lazy(() => Card_promptsArgsSchema)]).optional(),
  multimedia_prompts: z.union([z.boolean(),z.lazy(() => Multimedia_promptsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CardsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const CardsArgsSchema: z.ZodType<Prisma.CardsArgs> = z.object({
  select: z.lazy(() => CardsSelectSchema).optional(),
  include: z.lazy(() => CardsIncludeSchema).optional(),
}).strict();

export const CardsCountOutputTypeArgsSchema: z.ZodType<Prisma.CardsCountOutputTypeArgs> = z.object({
  select: z.lazy(() => CardsCountOutputTypeSelectSchema).nullish(),
}).strict();

export const CardsCountOutputTypeSelectSchema: z.ZodType<Prisma.CardsCountOutputTypeSelect> = z.object({
  multimedia_prompts: z.boolean().optional(),
}).strict();

export const CardsSelectSchema: z.ZodType<Prisma.CardsSelect> = z.object({
  id: z.boolean().optional(),
  card_prompt_id: z.boolean().optional(),
  front_text: z.boolean().optional(),
  back_text: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  card_prompts: z.union([z.boolean(),z.lazy(() => Card_promptsArgsSchema)]).optional(),
  multimedia_prompts: z.union([z.boolean(),z.lazy(() => Multimedia_promptsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CardsCountOutputTypeArgsSchema)]).optional(),
}).strict()

// DECKS
//------------------------------------------------------

export const DecksIncludeSchema: z.ZodType<Prisma.DecksInclude> = z.object({
  card_prompts: z.union([z.boolean(),z.lazy(() => Card_promptsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => DecksCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const DecksArgsSchema: z.ZodType<Prisma.DecksArgs> = z.object({
  select: z.lazy(() => DecksSelectSchema).optional(),
  include: z.lazy(() => DecksIncludeSchema).optional(),
}).strict();

export const DecksCountOutputTypeArgsSchema: z.ZodType<Prisma.DecksCountOutputTypeArgs> = z.object({
  select: z.lazy(() => DecksCountOutputTypeSelectSchema).nullish(),
}).strict();

export const DecksCountOutputTypeSelectSchema: z.ZodType<Prisma.DecksCountOutputTypeSelect> = z.object({
  card_prompts: z.boolean().optional(),
}).strict();

export const DecksSelectSchema: z.ZodType<Prisma.DecksSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  card_prompts: z.union([z.boolean(),z.lazy(() => Card_promptsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => DecksCountOutputTypeArgsSchema)]).optional(),
}).strict()

// MULTIMEDIA
//------------------------------------------------------

export const MultimediaIncludeSchema: z.ZodType<Prisma.MultimediaInclude> = z.object({
  multimedia_prompts: z.union([z.boolean(),z.lazy(() => Multimedia_promptsArgsSchema)]).optional(),
}).strict()

export const MultimediaArgsSchema: z.ZodType<Prisma.MultimediaArgs> = z.object({
  select: z.lazy(() => MultimediaSelectSchema).optional(),
  include: z.lazy(() => MultimediaIncludeSchema).optional(),
}).strict();

export const MultimediaSelectSchema: z.ZodType<Prisma.MultimediaSelect> = z.object({
  id: z.boolean().optional(),
  multimedia_prompt_id: z.boolean().optional(),
  media_type: z.boolean().optional(),
  url: z.boolean().optional(),
  metadata: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  multimedia_prompts: z.union([z.boolean(),z.lazy(() => Multimedia_promptsArgsSchema)]).optional(),
}).strict()

// MULTIMEDIA PROMPTS
//------------------------------------------------------

export const Multimedia_promptsIncludeSchema: z.ZodType<Prisma.Multimedia_promptsInclude> = z.object({
  multimedia: z.union([z.boolean(),z.lazy(() => MultimediaFindManyArgsSchema)]).optional(),
  cards: z.union([z.boolean(),z.lazy(() => CardsArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => Multimedia_promptsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const Multimedia_promptsArgsSchema: z.ZodType<Prisma.Multimedia_promptsArgs> = z.object({
  select: z.lazy(() => Multimedia_promptsSelectSchema).optional(),
  include: z.lazy(() => Multimedia_promptsIncludeSchema).optional(),
}).strict();

export const Multimedia_promptsCountOutputTypeArgsSchema: z.ZodType<Prisma.Multimedia_promptsCountOutputTypeArgs> = z.object({
  select: z.lazy(() => Multimedia_promptsCountOutputTypeSelectSchema).nullish(),
}).strict();

export const Multimedia_promptsCountOutputTypeSelectSchema: z.ZodType<Prisma.Multimedia_promptsCountOutputTypeSelect> = z.object({
  multimedia: z.boolean().optional(),
}).strict();

export const Multimedia_promptsSelectSchema: z.ZodType<Prisma.Multimedia_promptsSelect> = z.object({
  id: z.boolean().optional(),
  text: z.boolean().optional(),
  state: z.boolean().optional(),
  card_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  multimedia: z.union([z.boolean(),z.lazy(() => MultimediaFindManyArgsSchema)]).optional(),
  cards: z.union([z.boolean(),z.lazy(() => CardsArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => Multimedia_promptsCountOutputTypeArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const Card_promptsWhereInputSchema: z.ZodType<Prisma.Card_promptsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => Card_promptsWhereInputSchema),z.lazy(() => Card_promptsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => Card_promptsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Card_promptsWhereInputSchema),z.lazy(() => Card_promptsWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  text: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  state: z.union([ z.lazy(() => Enumprompt_stateFilterSchema),z.lazy(() => prompt_stateSchema) ]).optional(),
  deck_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  decks: z.union([ z.lazy(() => DecksRelationFilterSchema),z.lazy(() => DecksWhereInputSchema) ]).optional(),
  cards: z.lazy(() => CardsListRelationFilterSchema).optional()
}).strict();

export const Card_promptsOrderByWithRelationInputSchema: z.ZodType<Prisma.Card_promptsOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  deck_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  decks: z.lazy(() => DecksOrderByWithRelationInputSchema).optional(),
  cards: z.lazy(() => CardsOrderByRelationAggregateInputSchema).optional()
}).strict();

export const Card_promptsWhereUniqueInputSchema: z.ZodType<Prisma.Card_promptsWhereUniqueInput> = z.object({
  id: z.string().uuid().optional()
}).strict();

export const Card_promptsOrderByWithAggregationInputSchema: z.ZodType<Prisma.Card_promptsOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  deck_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => Card_promptsCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => Card_promptsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => Card_promptsMinOrderByAggregateInputSchema).optional()
}).strict();

export const Card_promptsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.Card_promptsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => Card_promptsScalarWhereWithAggregatesInputSchema),z.lazy(() => Card_promptsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => Card_promptsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Card_promptsScalarWhereWithAggregatesInputSchema),z.lazy(() => Card_promptsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  text: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  state: z.union([ z.lazy(() => Enumprompt_stateWithAggregatesFilterSchema),z.lazy(() => prompt_stateSchema) ]).optional(),
  deck_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const CardsWhereInputSchema: z.ZodType<Prisma.CardsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CardsWhereInputSchema),z.lazy(() => CardsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CardsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CardsWhereInputSchema),z.lazy(() => CardsWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  card_prompt_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  front_text: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  back_text: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  card_prompts: z.union([ z.lazy(() => Card_promptsRelationFilterSchema),z.lazy(() => Card_promptsWhereInputSchema) ]).optional(),
  multimedia_prompts: z.lazy(() => Multimedia_promptsListRelationFilterSchema).optional()
}).strict();

export const CardsOrderByWithRelationInputSchema: z.ZodType<Prisma.CardsOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  card_prompt_id: z.lazy(() => SortOrderSchema).optional(),
  front_text: z.lazy(() => SortOrderSchema).optional(),
  back_text: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  card_prompts: z.lazy(() => Card_promptsOrderByWithRelationInputSchema).optional(),
  multimedia_prompts: z.lazy(() => Multimedia_promptsOrderByRelationAggregateInputSchema).optional()
}).strict();

export const CardsWhereUniqueInputSchema: z.ZodType<Prisma.CardsWhereUniqueInput> = z.object({
  id: z.string().uuid().optional()
}).strict();

export const CardsOrderByWithAggregationInputSchema: z.ZodType<Prisma.CardsOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  card_prompt_id: z.lazy(() => SortOrderSchema).optional(),
  front_text: z.lazy(() => SortOrderSchema).optional(),
  back_text: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CardsCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CardsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CardsMinOrderByAggregateInputSchema).optional()
}).strict();

export const CardsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CardsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CardsScalarWhereWithAggregatesInputSchema),z.lazy(() => CardsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CardsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CardsScalarWhereWithAggregatesInputSchema),z.lazy(() => CardsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  card_prompt_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  front_text: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  back_text: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const DecksWhereInputSchema: z.ZodType<Prisma.DecksWhereInput> = z.object({
  AND: z.union([ z.lazy(() => DecksWhereInputSchema),z.lazy(() => DecksWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DecksWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DecksWhereInputSchema),z.lazy(() => DecksWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  card_prompts: z.lazy(() => Card_promptsListRelationFilterSchema).optional()
}).strict();

export const DecksOrderByWithRelationInputSchema: z.ZodType<Prisma.DecksOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  card_prompts: z.lazy(() => Card_promptsOrderByRelationAggregateInputSchema).optional()
}).strict();

export const DecksWhereUniqueInputSchema: z.ZodType<Prisma.DecksWhereUniqueInput> = z.object({
  id: z.string().uuid().optional()
}).strict();

export const DecksOrderByWithAggregationInputSchema: z.ZodType<Prisma.DecksOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => DecksCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => DecksMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => DecksMinOrderByAggregateInputSchema).optional()
}).strict();

export const DecksScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.DecksScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => DecksScalarWhereWithAggregatesInputSchema),z.lazy(() => DecksScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => DecksScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DecksScalarWhereWithAggregatesInputSchema),z.lazy(() => DecksScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const MultimediaWhereInputSchema: z.ZodType<Prisma.MultimediaWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MultimediaWhereInputSchema),z.lazy(() => MultimediaWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MultimediaWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MultimediaWhereInputSchema),z.lazy(() => MultimediaWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  multimedia_prompt_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  media_type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  metadata: z.lazy(() => JsonNullableFilterSchema).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  multimedia_prompts: z.union([ z.lazy(() => Multimedia_promptsRelationFilterSchema),z.lazy(() => Multimedia_promptsWhereInputSchema) ]).optional(),
}).strict();

export const MultimediaOrderByWithRelationInputSchema: z.ZodType<Prisma.MultimediaOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  multimedia_prompt_id: z.lazy(() => SortOrderSchema).optional(),
  media_type: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  metadata: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  multimedia_prompts: z.lazy(() => Multimedia_promptsOrderByWithRelationInputSchema).optional()
}).strict();

export const MultimediaWhereUniqueInputSchema: z.ZodType<Prisma.MultimediaWhereUniqueInput> = z.object({
  id: z.string().uuid().optional()
}).strict();

export const MultimediaOrderByWithAggregationInputSchema: z.ZodType<Prisma.MultimediaOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  multimedia_prompt_id: z.lazy(() => SortOrderSchema).optional(),
  media_type: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  metadata: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => MultimediaCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => MultimediaMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => MultimediaMinOrderByAggregateInputSchema).optional()
}).strict();

export const MultimediaScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.MultimediaScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => MultimediaScalarWhereWithAggregatesInputSchema),z.lazy(() => MultimediaScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => MultimediaScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MultimediaScalarWhereWithAggregatesInputSchema),z.lazy(() => MultimediaScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  multimedia_prompt_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  media_type: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  metadata: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const Multimedia_promptsWhereInputSchema: z.ZodType<Prisma.Multimedia_promptsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => Multimedia_promptsWhereInputSchema),z.lazy(() => Multimedia_promptsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => Multimedia_promptsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Multimedia_promptsWhereInputSchema),z.lazy(() => Multimedia_promptsWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  text: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  state: z.union([ z.lazy(() => Enumprompt_stateFilterSchema),z.lazy(() => prompt_stateSchema) ]).optional(),
  card_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  multimedia: z.lazy(() => MultimediaListRelationFilterSchema).optional(),
  cards: z.union([ z.lazy(() => CardsRelationFilterSchema),z.lazy(() => CardsWhereInputSchema) ]).optional(),
}).strict();

export const Multimedia_promptsOrderByWithRelationInputSchema: z.ZodType<Prisma.Multimedia_promptsOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  card_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  multimedia: z.lazy(() => MultimediaOrderByRelationAggregateInputSchema).optional(),
  cards: z.lazy(() => CardsOrderByWithRelationInputSchema).optional()
}).strict();

export const Multimedia_promptsWhereUniqueInputSchema: z.ZodType<Prisma.Multimedia_promptsWhereUniqueInput> = z.object({
  id: z.string().uuid().optional()
}).strict();

export const Multimedia_promptsOrderByWithAggregationInputSchema: z.ZodType<Prisma.Multimedia_promptsOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  card_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => Multimedia_promptsCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => Multimedia_promptsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => Multimedia_promptsMinOrderByAggregateInputSchema).optional()
}).strict();

export const Multimedia_promptsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.Multimedia_promptsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => Multimedia_promptsScalarWhereWithAggregatesInputSchema),z.lazy(() => Multimedia_promptsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => Multimedia_promptsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Multimedia_promptsScalarWhereWithAggregatesInputSchema),z.lazy(() => Multimedia_promptsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  text: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  state: z.union([ z.lazy(() => Enumprompt_stateWithAggregatesFilterSchema),z.lazy(() => prompt_stateSchema) ]).optional(),
  card_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const Card_promptsCreateInputSchema: z.ZodType<Prisma.Card_promptsCreateInput> = z.object({
  id: z.string().uuid(),
  text: z.string(),
  state: z.lazy(() => prompt_stateSchema),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  decks: z.lazy(() => DecksCreateNestedOneWithoutCard_promptsInputSchema),
  cards: z.lazy(() => CardsCreateNestedManyWithoutCard_promptsInputSchema).optional()
}).strict();

export const Card_promptsUncheckedCreateInputSchema: z.ZodType<Prisma.Card_promptsUncheckedCreateInput> = z.object({
  id: z.string().uuid(),
  text: z.string(),
  state: z.lazy(() => prompt_stateSchema),
  deck_id: z.string().uuid(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  cards: z.lazy(() => CardsUncheckedCreateNestedManyWithoutCard_promptsInputSchema).optional()
}).strict();

export const Card_promptsUpdateInputSchema: z.ZodType<Prisma.Card_promptsUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.lazy(() => prompt_stateSchema),z.lazy(() => Enumprompt_stateFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  decks: z.lazy(() => DecksUpdateOneRequiredWithoutCard_promptsNestedInputSchema).optional(),
  cards: z.lazy(() => CardsUpdateManyWithoutCard_promptsNestedInputSchema).optional()
}).strict();

export const Card_promptsUncheckedUpdateInputSchema: z.ZodType<Prisma.Card_promptsUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.lazy(() => prompt_stateSchema),z.lazy(() => Enumprompt_stateFieldUpdateOperationsInputSchema) ]).optional(),
  deck_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  cards: z.lazy(() => CardsUncheckedUpdateManyWithoutCard_promptsNestedInputSchema).optional()
}).strict();

export const Card_promptsCreateManyInputSchema: z.ZodType<Prisma.Card_promptsCreateManyInput> = z.object({
  id: z.string().uuid(),
  text: z.string(),
  state: z.lazy(() => prompt_stateSchema),
  deck_id: z.string().uuid(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date()
}).strict();

export const Card_promptsUpdateManyMutationInputSchema: z.ZodType<Prisma.Card_promptsUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.lazy(() => prompt_stateSchema),z.lazy(() => Enumprompt_stateFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const Card_promptsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.Card_promptsUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.lazy(() => prompt_stateSchema),z.lazy(() => Enumprompt_stateFieldUpdateOperationsInputSchema) ]).optional(),
  deck_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CardsCreateInputSchema: z.ZodType<Prisma.CardsCreateInput> = z.object({
  id: z.string().uuid(),
  front_text: z.string(),
  back_text: z.string().optional().nullable(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  card_prompts: z.lazy(() => Card_promptsCreateNestedOneWithoutCardsInputSchema),
  multimedia_prompts: z.lazy(() => Multimedia_promptsCreateNestedManyWithoutCardsInputSchema).optional()
}).strict();

export const CardsUncheckedCreateInputSchema: z.ZodType<Prisma.CardsUncheckedCreateInput> = z.object({
  id: z.string().uuid(),
  card_prompt_id: z.string().uuid(),
  front_text: z.string(),
  back_text: z.string().optional().nullable(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  multimedia_prompts: z.lazy(() => Multimedia_promptsUncheckedCreateNestedManyWithoutCardsInputSchema).optional()
}).strict();

export const CardsUpdateInputSchema: z.ZodType<Prisma.CardsUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  front_text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  back_text: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  card_prompts: z.lazy(() => Card_promptsUpdateOneRequiredWithoutCardsNestedInputSchema).optional(),
  multimedia_prompts: z.lazy(() => Multimedia_promptsUpdateManyWithoutCardsNestedInputSchema).optional()
}).strict();

export const CardsUncheckedUpdateInputSchema: z.ZodType<Prisma.CardsUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  card_prompt_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  front_text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  back_text: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  multimedia_prompts: z.lazy(() => Multimedia_promptsUncheckedUpdateManyWithoutCardsNestedInputSchema).optional()
}).strict();

export const CardsCreateManyInputSchema: z.ZodType<Prisma.CardsCreateManyInput> = z.object({
  id: z.string().uuid(),
  card_prompt_id: z.string().uuid(),
  front_text: z.string(),
  back_text: z.string().optional().nullable(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date()
}).strict();

export const CardsUpdateManyMutationInputSchema: z.ZodType<Prisma.CardsUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  front_text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  back_text: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CardsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CardsUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  card_prompt_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  front_text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  back_text: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const DecksCreateInputSchema: z.ZodType<Prisma.DecksCreateInput> = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string().optional().nullable(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  card_prompts: z.lazy(() => Card_promptsCreateNestedManyWithoutDecksInputSchema).optional()
}).strict();

export const DecksUncheckedCreateInputSchema: z.ZodType<Prisma.DecksUncheckedCreateInput> = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string().optional().nullable(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  card_prompts: z.lazy(() => Card_promptsUncheckedCreateNestedManyWithoutDecksInputSchema).optional()
}).strict();

export const DecksUpdateInputSchema: z.ZodType<Prisma.DecksUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  card_prompts: z.lazy(() => Card_promptsUpdateManyWithoutDecksNestedInputSchema).optional()
}).strict();

export const DecksUncheckedUpdateInputSchema: z.ZodType<Prisma.DecksUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  card_prompts: z.lazy(() => Card_promptsUncheckedUpdateManyWithoutDecksNestedInputSchema).optional()
}).strict();

export const DecksCreateManyInputSchema: z.ZodType<Prisma.DecksCreateManyInput> = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string().optional().nullable(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date()
}).strict();

export const DecksUpdateManyMutationInputSchema: z.ZodType<Prisma.DecksUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const DecksUncheckedUpdateManyInputSchema: z.ZodType<Prisma.DecksUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MultimediaCreateInputSchema: z.ZodType<Prisma.MultimediaCreateInput> = z.object({
  id: z.string().uuid(),
  media_type: z.string(),
  url: z.string().optional().nullable(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  multimedia_prompts: z.lazy(() => Multimedia_promptsCreateNestedOneWithoutMultimediaInputSchema)
}).strict();

export const MultimediaUncheckedCreateInputSchema: z.ZodType<Prisma.MultimediaUncheckedCreateInput> = z.object({
  id: z.string().uuid(),
  multimedia_prompt_id: z.string().uuid(),
  media_type: z.string(),
  url: z.string().optional().nullable(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date()
}).strict();

export const MultimediaUpdateInputSchema: z.ZodType<Prisma.MultimediaUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  media_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  multimedia_prompts: z.lazy(() => Multimedia_promptsUpdateOneRequiredWithoutMultimediaNestedInputSchema).optional()
}).strict();

export const MultimediaUncheckedUpdateInputSchema: z.ZodType<Prisma.MultimediaUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  multimedia_prompt_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  media_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MultimediaCreateManyInputSchema: z.ZodType<Prisma.MultimediaCreateManyInput> = z.object({
  id: z.string().uuid(),
  multimedia_prompt_id: z.string().uuid(),
  media_type: z.string(),
  url: z.string().optional().nullable(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date()
}).strict();

export const MultimediaUpdateManyMutationInputSchema: z.ZodType<Prisma.MultimediaUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  media_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MultimediaUncheckedUpdateManyInputSchema: z.ZodType<Prisma.MultimediaUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  multimedia_prompt_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  media_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const Multimedia_promptsCreateInputSchema: z.ZodType<Prisma.Multimedia_promptsCreateInput> = z.object({
  id: z.string().uuid(),
  text: z.string(),
  state: z.lazy(() => prompt_stateSchema),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  multimedia: z.lazy(() => MultimediaCreateNestedManyWithoutMultimedia_promptsInputSchema).optional(),
  cards: z.lazy(() => CardsCreateNestedOneWithoutMultimedia_promptsInputSchema)
}).strict();

export const Multimedia_promptsUncheckedCreateInputSchema: z.ZodType<Prisma.Multimedia_promptsUncheckedCreateInput> = z.object({
  id: z.string().uuid(),
  text: z.string(),
  state: z.lazy(() => prompt_stateSchema),
  card_id: z.string().uuid(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  multimedia: z.lazy(() => MultimediaUncheckedCreateNestedManyWithoutMultimedia_promptsInputSchema).optional()
}).strict();

export const Multimedia_promptsUpdateInputSchema: z.ZodType<Prisma.Multimedia_promptsUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.lazy(() => prompt_stateSchema),z.lazy(() => Enumprompt_stateFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  multimedia: z.lazy(() => MultimediaUpdateManyWithoutMultimedia_promptsNestedInputSchema).optional(),
  cards: z.lazy(() => CardsUpdateOneRequiredWithoutMultimedia_promptsNestedInputSchema).optional()
}).strict();

export const Multimedia_promptsUncheckedUpdateInputSchema: z.ZodType<Prisma.Multimedia_promptsUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.lazy(() => prompt_stateSchema),z.lazy(() => Enumprompt_stateFieldUpdateOperationsInputSchema) ]).optional(),
  card_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  multimedia: z.lazy(() => MultimediaUncheckedUpdateManyWithoutMultimedia_promptsNestedInputSchema).optional()
}).strict();

export const Multimedia_promptsCreateManyInputSchema: z.ZodType<Prisma.Multimedia_promptsCreateManyInput> = z.object({
  id: z.string().uuid(),
  text: z.string(),
  state: z.lazy(() => prompt_stateSchema),
  card_id: z.string().uuid(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date()
}).strict();

export const Multimedia_promptsUpdateManyMutationInputSchema: z.ZodType<Prisma.Multimedia_promptsUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.lazy(() => prompt_stateSchema),z.lazy(() => Enumprompt_stateFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const Multimedia_promptsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.Multimedia_promptsUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.lazy(() => prompt_stateSchema),z.lazy(() => Enumprompt_stateFieldUpdateOperationsInputSchema) ]).optional(),
  card_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UuidFilterSchema: z.ZodType<Prisma.UuidFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidFilterSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const Enumprompt_stateFilterSchema: z.ZodType<Prisma.Enumprompt_stateFilter> = z.object({
  equals: z.lazy(() => prompt_stateSchema).optional(),
  in: z.lazy(() => prompt_stateSchema).array().optional(),
  notIn: z.lazy(() => prompt_stateSchema).array().optional(),
  not: z.union([ z.lazy(() => prompt_stateSchema),z.lazy(() => NestedEnumprompt_stateFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const DecksRelationFilterSchema: z.ZodType<Prisma.DecksRelationFilter> = z.object({
  is: z.lazy(() => DecksWhereInputSchema).optional(),
  isNot: z.lazy(() => DecksWhereInputSchema).optional()
}).strict();

export const CardsListRelationFilterSchema: z.ZodType<Prisma.CardsListRelationFilter> = z.object({
  every: z.lazy(() => CardsWhereInputSchema).optional(),
  some: z.lazy(() => CardsWhereInputSchema).optional(),
  none: z.lazy(() => CardsWhereInputSchema).optional()
}).strict();

export const CardsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CardsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Card_promptsCountOrderByAggregateInputSchema: z.ZodType<Prisma.Card_promptsCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  deck_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Card_promptsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.Card_promptsMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  deck_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Card_promptsMinOrderByAggregateInputSchema: z.ZodType<Prisma.Card_promptsMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  deck_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UuidWithAggregatesFilterSchema: z.ZodType<Prisma.UuidWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const Enumprompt_stateWithAggregatesFilterSchema: z.ZodType<Prisma.Enumprompt_stateWithAggregatesFilter> = z.object({
  equals: z.lazy(() => prompt_stateSchema).optional(),
  in: z.lazy(() => prompt_stateSchema).array().optional(),
  notIn: z.lazy(() => prompt_stateSchema).array().optional(),
  not: z.union([ z.lazy(() => prompt_stateSchema),z.lazy(() => NestedEnumprompt_stateWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumprompt_stateFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumprompt_stateFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const Card_promptsRelationFilterSchema: z.ZodType<Prisma.Card_promptsRelationFilter> = z.object({
  is: z.lazy(() => Card_promptsWhereInputSchema).optional(),
  isNot: z.lazy(() => Card_promptsWhereInputSchema).optional()
}).strict();

export const Multimedia_promptsListRelationFilterSchema: z.ZodType<Prisma.Multimedia_promptsListRelationFilter> = z.object({
  every: z.lazy(() => Multimedia_promptsWhereInputSchema).optional(),
  some: z.lazy(() => Multimedia_promptsWhereInputSchema).optional(),
  none: z.lazy(() => Multimedia_promptsWhereInputSchema).optional()
}).strict();

export const Multimedia_promptsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.Multimedia_promptsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CardsCountOrderByAggregateInputSchema: z.ZodType<Prisma.CardsCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  card_prompt_id: z.lazy(() => SortOrderSchema).optional(),
  front_text: z.lazy(() => SortOrderSchema).optional(),
  back_text: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CardsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CardsMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  card_prompt_id: z.lazy(() => SortOrderSchema).optional(),
  front_text: z.lazy(() => SortOrderSchema).optional(),
  back_text: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CardsMinOrderByAggregateInputSchema: z.ZodType<Prisma.CardsMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  card_prompt_id: z.lazy(() => SortOrderSchema).optional(),
  front_text: z.lazy(() => SortOrderSchema).optional(),
  back_text: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const Card_promptsListRelationFilterSchema: z.ZodType<Prisma.Card_promptsListRelationFilter> = z.object({
  every: z.lazy(() => Card_promptsWhereInputSchema).optional(),
  some: z.lazy(() => Card_promptsWhereInputSchema).optional(),
  none: z.lazy(() => Card_promptsWhereInputSchema).optional()
}).strict();

export const Card_promptsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.Card_promptsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DecksCountOrderByAggregateInputSchema: z.ZodType<Prisma.DecksCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DecksMaxOrderByAggregateInputSchema: z.ZodType<Prisma.DecksMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DecksMinOrderByAggregateInputSchema: z.ZodType<Prisma.DecksMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const JsonNullableFilterSchema: z.ZodType<Prisma.JsonNullableFilter> = z.object({
  equals: z.union([ InputJsonValue,z.lazy(() => JsonNullValueFilterSchema) ]).optional(),
  path: z.string().array().optional(),
  string_contains: z.string().optional(),
  string_starts_with: z.string().optional(),
  string_ends_with: z.string().optional(),
  array_contains: InputJsonValue.optional().nullable(),
  array_starts_with: InputJsonValue.optional().nullable(),
  array_ends_with: InputJsonValue.optional().nullable(),
  lt: InputJsonValue.optional(),
  lte: InputJsonValue.optional(),
  gt: InputJsonValue.optional(),
  gte: InputJsonValue.optional(),
  not: z.union([ InputJsonValue,z.lazy(() => JsonNullValueFilterSchema) ]).optional(),
}).strict();

export const Multimedia_promptsRelationFilterSchema: z.ZodType<Prisma.Multimedia_promptsRelationFilter> = z.object({
  is: z.lazy(() => Multimedia_promptsWhereInputSchema).optional(),
  isNot: z.lazy(() => Multimedia_promptsWhereInputSchema).optional()
}).strict();

export const MultimediaCountOrderByAggregateInputSchema: z.ZodType<Prisma.MultimediaCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  multimedia_prompt_id: z.lazy(() => SortOrderSchema).optional(),
  media_type: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  metadata: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MultimediaMaxOrderByAggregateInputSchema: z.ZodType<Prisma.MultimediaMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  multimedia_prompt_id: z.lazy(() => SortOrderSchema).optional(),
  media_type: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MultimediaMinOrderByAggregateInputSchema: z.ZodType<Prisma.MultimediaMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  multimedia_prompt_id: z.lazy(() => SortOrderSchema).optional(),
  media_type: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const JsonNullableWithAggregatesFilterSchema: z.ZodType<Prisma.JsonNullableWithAggregatesFilter> = z.object({
  equals: z.union([ InputJsonValue,z.lazy(() => JsonNullValueFilterSchema) ]).optional(),
  path: z.string().array().optional(),
  string_contains: z.string().optional(),
  string_starts_with: z.string().optional(),
  string_ends_with: z.string().optional(),
  array_contains: InputJsonValue.optional().nullable(),
  array_starts_with: InputJsonValue.optional().nullable(),
  array_ends_with: InputJsonValue.optional().nullable(),
  lt: InputJsonValue.optional(),
  lte: InputJsonValue.optional(),
  gt: InputJsonValue.optional(),
  gte: InputJsonValue.optional(),
  not: z.union([ InputJsonValue,z.lazy(() => JsonNullValueFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedJsonNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedJsonNullableFilterSchema).optional()
}).strict();

export const MultimediaListRelationFilterSchema: z.ZodType<Prisma.MultimediaListRelationFilter> = z.object({
  every: z.lazy(() => MultimediaWhereInputSchema).optional(),
  some: z.lazy(() => MultimediaWhereInputSchema).optional(),
  none: z.lazy(() => MultimediaWhereInputSchema).optional()
}).strict();

export const CardsRelationFilterSchema: z.ZodType<Prisma.CardsRelationFilter> = z.object({
  is: z.lazy(() => CardsWhereInputSchema).optional(),
  isNot: z.lazy(() => CardsWhereInputSchema).optional()
}).strict();

export const MultimediaOrderByRelationAggregateInputSchema: z.ZodType<Prisma.MultimediaOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Multimedia_promptsCountOrderByAggregateInputSchema: z.ZodType<Prisma.Multimedia_promptsCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  card_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Multimedia_promptsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.Multimedia_promptsMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  card_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Multimedia_promptsMinOrderByAggregateInputSchema: z.ZodType<Prisma.Multimedia_promptsMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  card_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DecksCreateNestedOneWithoutCard_promptsInputSchema: z.ZodType<Prisma.DecksCreateNestedOneWithoutCard_promptsInput> = z.object({
  create: z.union([ z.lazy(() => DecksCreateWithoutCard_promptsInputSchema),z.lazy(() => DecksUncheckedCreateWithoutCard_promptsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DecksCreateOrConnectWithoutCard_promptsInputSchema).optional(),
  connect: z.lazy(() => DecksWhereUniqueInputSchema).optional()
}).strict();

export const CardsCreateNestedManyWithoutCard_promptsInputSchema: z.ZodType<Prisma.CardsCreateNestedManyWithoutCard_promptsInput> = z.object({
  create: z.union([ z.lazy(() => CardsCreateWithoutCard_promptsInputSchema),z.lazy(() => CardsCreateWithoutCard_promptsInputSchema).array(),z.lazy(() => CardsUncheckedCreateWithoutCard_promptsInputSchema),z.lazy(() => CardsUncheckedCreateWithoutCard_promptsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CardsCreateOrConnectWithoutCard_promptsInputSchema),z.lazy(() => CardsCreateOrConnectWithoutCard_promptsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CardsCreateManyCard_promptsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CardsWhereUniqueInputSchema),z.lazy(() => CardsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CardsUncheckedCreateNestedManyWithoutCard_promptsInputSchema: z.ZodType<Prisma.CardsUncheckedCreateNestedManyWithoutCard_promptsInput> = z.object({
  create: z.union([ z.lazy(() => CardsCreateWithoutCard_promptsInputSchema),z.lazy(() => CardsCreateWithoutCard_promptsInputSchema).array(),z.lazy(() => CardsUncheckedCreateWithoutCard_promptsInputSchema),z.lazy(() => CardsUncheckedCreateWithoutCard_promptsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CardsCreateOrConnectWithoutCard_promptsInputSchema),z.lazy(() => CardsCreateOrConnectWithoutCard_promptsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CardsCreateManyCard_promptsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CardsWhereUniqueInputSchema),z.lazy(() => CardsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const Enumprompt_stateFieldUpdateOperationsInputSchema: z.ZodType<Prisma.Enumprompt_stateFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => prompt_stateSchema).optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const DecksUpdateOneRequiredWithoutCard_promptsNestedInputSchema: z.ZodType<Prisma.DecksUpdateOneRequiredWithoutCard_promptsNestedInput> = z.object({
  create: z.union([ z.lazy(() => DecksCreateWithoutCard_promptsInputSchema),z.lazy(() => DecksUncheckedCreateWithoutCard_promptsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DecksCreateOrConnectWithoutCard_promptsInputSchema).optional(),
  upsert: z.lazy(() => DecksUpsertWithoutCard_promptsInputSchema).optional(),
  connect: z.lazy(() => DecksWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DecksUpdateWithoutCard_promptsInputSchema),z.lazy(() => DecksUncheckedUpdateWithoutCard_promptsInputSchema) ]).optional(),
}).strict();

export const CardsUpdateManyWithoutCard_promptsNestedInputSchema: z.ZodType<Prisma.CardsUpdateManyWithoutCard_promptsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CardsCreateWithoutCard_promptsInputSchema),z.lazy(() => CardsCreateWithoutCard_promptsInputSchema).array(),z.lazy(() => CardsUncheckedCreateWithoutCard_promptsInputSchema),z.lazy(() => CardsUncheckedCreateWithoutCard_promptsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CardsCreateOrConnectWithoutCard_promptsInputSchema),z.lazy(() => CardsCreateOrConnectWithoutCard_promptsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CardsUpsertWithWhereUniqueWithoutCard_promptsInputSchema),z.lazy(() => CardsUpsertWithWhereUniqueWithoutCard_promptsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CardsCreateManyCard_promptsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CardsWhereUniqueInputSchema),z.lazy(() => CardsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CardsWhereUniqueInputSchema),z.lazy(() => CardsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CardsWhereUniqueInputSchema),z.lazy(() => CardsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CardsWhereUniqueInputSchema),z.lazy(() => CardsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CardsUpdateWithWhereUniqueWithoutCard_promptsInputSchema),z.lazy(() => CardsUpdateWithWhereUniqueWithoutCard_promptsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CardsUpdateManyWithWhereWithoutCard_promptsInputSchema),z.lazy(() => CardsUpdateManyWithWhereWithoutCard_promptsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CardsScalarWhereInputSchema),z.lazy(() => CardsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CardsUncheckedUpdateManyWithoutCard_promptsNestedInputSchema: z.ZodType<Prisma.CardsUncheckedUpdateManyWithoutCard_promptsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CardsCreateWithoutCard_promptsInputSchema),z.lazy(() => CardsCreateWithoutCard_promptsInputSchema).array(),z.lazy(() => CardsUncheckedCreateWithoutCard_promptsInputSchema),z.lazy(() => CardsUncheckedCreateWithoutCard_promptsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CardsCreateOrConnectWithoutCard_promptsInputSchema),z.lazy(() => CardsCreateOrConnectWithoutCard_promptsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CardsUpsertWithWhereUniqueWithoutCard_promptsInputSchema),z.lazy(() => CardsUpsertWithWhereUniqueWithoutCard_promptsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CardsCreateManyCard_promptsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CardsWhereUniqueInputSchema),z.lazy(() => CardsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CardsWhereUniqueInputSchema),z.lazy(() => CardsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CardsWhereUniqueInputSchema),z.lazy(() => CardsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CardsWhereUniqueInputSchema),z.lazy(() => CardsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CardsUpdateWithWhereUniqueWithoutCard_promptsInputSchema),z.lazy(() => CardsUpdateWithWhereUniqueWithoutCard_promptsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CardsUpdateManyWithWhereWithoutCard_promptsInputSchema),z.lazy(() => CardsUpdateManyWithWhereWithoutCard_promptsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CardsScalarWhereInputSchema),z.lazy(() => CardsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const Card_promptsCreateNestedOneWithoutCardsInputSchema: z.ZodType<Prisma.Card_promptsCreateNestedOneWithoutCardsInput> = z.object({
  create: z.union([ z.lazy(() => Card_promptsCreateWithoutCardsInputSchema),z.lazy(() => Card_promptsUncheckedCreateWithoutCardsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => Card_promptsCreateOrConnectWithoutCardsInputSchema).optional(),
  connect: z.lazy(() => Card_promptsWhereUniqueInputSchema).optional()
}).strict();

export const Multimedia_promptsCreateNestedManyWithoutCardsInputSchema: z.ZodType<Prisma.Multimedia_promptsCreateNestedManyWithoutCardsInput> = z.object({
  create: z.union([ z.lazy(() => Multimedia_promptsCreateWithoutCardsInputSchema),z.lazy(() => Multimedia_promptsCreateWithoutCardsInputSchema).array(),z.lazy(() => Multimedia_promptsUncheckedCreateWithoutCardsInputSchema),z.lazy(() => Multimedia_promptsUncheckedCreateWithoutCardsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Multimedia_promptsCreateOrConnectWithoutCardsInputSchema),z.lazy(() => Multimedia_promptsCreateOrConnectWithoutCardsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Multimedia_promptsCreateManyCardsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => Multimedia_promptsWhereUniqueInputSchema),z.lazy(() => Multimedia_promptsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const Multimedia_promptsUncheckedCreateNestedManyWithoutCardsInputSchema: z.ZodType<Prisma.Multimedia_promptsUncheckedCreateNestedManyWithoutCardsInput> = z.object({
  create: z.union([ z.lazy(() => Multimedia_promptsCreateWithoutCardsInputSchema),z.lazy(() => Multimedia_promptsCreateWithoutCardsInputSchema).array(),z.lazy(() => Multimedia_promptsUncheckedCreateWithoutCardsInputSchema),z.lazy(() => Multimedia_promptsUncheckedCreateWithoutCardsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Multimedia_promptsCreateOrConnectWithoutCardsInputSchema),z.lazy(() => Multimedia_promptsCreateOrConnectWithoutCardsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Multimedia_promptsCreateManyCardsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => Multimedia_promptsWhereUniqueInputSchema),z.lazy(() => Multimedia_promptsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const Card_promptsUpdateOneRequiredWithoutCardsNestedInputSchema: z.ZodType<Prisma.Card_promptsUpdateOneRequiredWithoutCardsNestedInput> = z.object({
  create: z.union([ z.lazy(() => Card_promptsCreateWithoutCardsInputSchema),z.lazy(() => Card_promptsUncheckedCreateWithoutCardsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => Card_promptsCreateOrConnectWithoutCardsInputSchema).optional(),
  upsert: z.lazy(() => Card_promptsUpsertWithoutCardsInputSchema).optional(),
  connect: z.lazy(() => Card_promptsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => Card_promptsUpdateWithoutCardsInputSchema),z.lazy(() => Card_promptsUncheckedUpdateWithoutCardsInputSchema) ]).optional(),
}).strict();

export const Multimedia_promptsUpdateManyWithoutCardsNestedInputSchema: z.ZodType<Prisma.Multimedia_promptsUpdateManyWithoutCardsNestedInput> = z.object({
  create: z.union([ z.lazy(() => Multimedia_promptsCreateWithoutCardsInputSchema),z.lazy(() => Multimedia_promptsCreateWithoutCardsInputSchema).array(),z.lazy(() => Multimedia_promptsUncheckedCreateWithoutCardsInputSchema),z.lazy(() => Multimedia_promptsUncheckedCreateWithoutCardsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Multimedia_promptsCreateOrConnectWithoutCardsInputSchema),z.lazy(() => Multimedia_promptsCreateOrConnectWithoutCardsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => Multimedia_promptsUpsertWithWhereUniqueWithoutCardsInputSchema),z.lazy(() => Multimedia_promptsUpsertWithWhereUniqueWithoutCardsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Multimedia_promptsCreateManyCardsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => Multimedia_promptsWhereUniqueInputSchema),z.lazy(() => Multimedia_promptsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => Multimedia_promptsWhereUniqueInputSchema),z.lazy(() => Multimedia_promptsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => Multimedia_promptsWhereUniqueInputSchema),z.lazy(() => Multimedia_promptsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => Multimedia_promptsWhereUniqueInputSchema),z.lazy(() => Multimedia_promptsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => Multimedia_promptsUpdateWithWhereUniqueWithoutCardsInputSchema),z.lazy(() => Multimedia_promptsUpdateWithWhereUniqueWithoutCardsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => Multimedia_promptsUpdateManyWithWhereWithoutCardsInputSchema),z.lazy(() => Multimedia_promptsUpdateManyWithWhereWithoutCardsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => Multimedia_promptsScalarWhereInputSchema),z.lazy(() => Multimedia_promptsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const Multimedia_promptsUncheckedUpdateManyWithoutCardsNestedInputSchema: z.ZodType<Prisma.Multimedia_promptsUncheckedUpdateManyWithoutCardsNestedInput> = z.object({
  create: z.union([ z.lazy(() => Multimedia_promptsCreateWithoutCardsInputSchema),z.lazy(() => Multimedia_promptsCreateWithoutCardsInputSchema).array(),z.lazy(() => Multimedia_promptsUncheckedCreateWithoutCardsInputSchema),z.lazy(() => Multimedia_promptsUncheckedCreateWithoutCardsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Multimedia_promptsCreateOrConnectWithoutCardsInputSchema),z.lazy(() => Multimedia_promptsCreateOrConnectWithoutCardsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => Multimedia_promptsUpsertWithWhereUniqueWithoutCardsInputSchema),z.lazy(() => Multimedia_promptsUpsertWithWhereUniqueWithoutCardsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Multimedia_promptsCreateManyCardsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => Multimedia_promptsWhereUniqueInputSchema),z.lazy(() => Multimedia_promptsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => Multimedia_promptsWhereUniqueInputSchema),z.lazy(() => Multimedia_promptsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => Multimedia_promptsWhereUniqueInputSchema),z.lazy(() => Multimedia_promptsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => Multimedia_promptsWhereUniqueInputSchema),z.lazy(() => Multimedia_promptsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => Multimedia_promptsUpdateWithWhereUniqueWithoutCardsInputSchema),z.lazy(() => Multimedia_promptsUpdateWithWhereUniqueWithoutCardsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => Multimedia_promptsUpdateManyWithWhereWithoutCardsInputSchema),z.lazy(() => Multimedia_promptsUpdateManyWithWhereWithoutCardsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => Multimedia_promptsScalarWhereInputSchema),z.lazy(() => Multimedia_promptsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const Card_promptsCreateNestedManyWithoutDecksInputSchema: z.ZodType<Prisma.Card_promptsCreateNestedManyWithoutDecksInput> = z.object({
  create: z.union([ z.lazy(() => Card_promptsCreateWithoutDecksInputSchema),z.lazy(() => Card_promptsCreateWithoutDecksInputSchema).array(),z.lazy(() => Card_promptsUncheckedCreateWithoutDecksInputSchema),z.lazy(() => Card_promptsUncheckedCreateWithoutDecksInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Card_promptsCreateOrConnectWithoutDecksInputSchema),z.lazy(() => Card_promptsCreateOrConnectWithoutDecksInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Card_promptsCreateManyDecksInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => Card_promptsWhereUniqueInputSchema),z.lazy(() => Card_promptsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const Card_promptsUncheckedCreateNestedManyWithoutDecksInputSchema: z.ZodType<Prisma.Card_promptsUncheckedCreateNestedManyWithoutDecksInput> = z.object({
  create: z.union([ z.lazy(() => Card_promptsCreateWithoutDecksInputSchema),z.lazy(() => Card_promptsCreateWithoutDecksInputSchema).array(),z.lazy(() => Card_promptsUncheckedCreateWithoutDecksInputSchema),z.lazy(() => Card_promptsUncheckedCreateWithoutDecksInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Card_promptsCreateOrConnectWithoutDecksInputSchema),z.lazy(() => Card_promptsCreateOrConnectWithoutDecksInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Card_promptsCreateManyDecksInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => Card_promptsWhereUniqueInputSchema),z.lazy(() => Card_promptsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const Card_promptsUpdateManyWithoutDecksNestedInputSchema: z.ZodType<Prisma.Card_promptsUpdateManyWithoutDecksNestedInput> = z.object({
  create: z.union([ z.lazy(() => Card_promptsCreateWithoutDecksInputSchema),z.lazy(() => Card_promptsCreateWithoutDecksInputSchema).array(),z.lazy(() => Card_promptsUncheckedCreateWithoutDecksInputSchema),z.lazy(() => Card_promptsUncheckedCreateWithoutDecksInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Card_promptsCreateOrConnectWithoutDecksInputSchema),z.lazy(() => Card_promptsCreateOrConnectWithoutDecksInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => Card_promptsUpsertWithWhereUniqueWithoutDecksInputSchema),z.lazy(() => Card_promptsUpsertWithWhereUniqueWithoutDecksInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Card_promptsCreateManyDecksInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => Card_promptsWhereUniqueInputSchema),z.lazy(() => Card_promptsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => Card_promptsWhereUniqueInputSchema),z.lazy(() => Card_promptsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => Card_promptsWhereUniqueInputSchema),z.lazy(() => Card_promptsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => Card_promptsWhereUniqueInputSchema),z.lazy(() => Card_promptsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => Card_promptsUpdateWithWhereUniqueWithoutDecksInputSchema),z.lazy(() => Card_promptsUpdateWithWhereUniqueWithoutDecksInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => Card_promptsUpdateManyWithWhereWithoutDecksInputSchema),z.lazy(() => Card_promptsUpdateManyWithWhereWithoutDecksInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => Card_promptsScalarWhereInputSchema),z.lazy(() => Card_promptsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const Card_promptsUncheckedUpdateManyWithoutDecksNestedInputSchema: z.ZodType<Prisma.Card_promptsUncheckedUpdateManyWithoutDecksNestedInput> = z.object({
  create: z.union([ z.lazy(() => Card_promptsCreateWithoutDecksInputSchema),z.lazy(() => Card_promptsCreateWithoutDecksInputSchema).array(),z.lazy(() => Card_promptsUncheckedCreateWithoutDecksInputSchema),z.lazy(() => Card_promptsUncheckedCreateWithoutDecksInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Card_promptsCreateOrConnectWithoutDecksInputSchema),z.lazy(() => Card_promptsCreateOrConnectWithoutDecksInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => Card_promptsUpsertWithWhereUniqueWithoutDecksInputSchema),z.lazy(() => Card_promptsUpsertWithWhereUniqueWithoutDecksInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Card_promptsCreateManyDecksInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => Card_promptsWhereUniqueInputSchema),z.lazy(() => Card_promptsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => Card_promptsWhereUniqueInputSchema),z.lazy(() => Card_promptsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => Card_promptsWhereUniqueInputSchema),z.lazy(() => Card_promptsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => Card_promptsWhereUniqueInputSchema),z.lazy(() => Card_promptsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => Card_promptsUpdateWithWhereUniqueWithoutDecksInputSchema),z.lazy(() => Card_promptsUpdateWithWhereUniqueWithoutDecksInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => Card_promptsUpdateManyWithWhereWithoutDecksInputSchema),z.lazy(() => Card_promptsUpdateManyWithWhereWithoutDecksInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => Card_promptsScalarWhereInputSchema),z.lazy(() => Card_promptsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const Multimedia_promptsCreateNestedOneWithoutMultimediaInputSchema: z.ZodType<Prisma.Multimedia_promptsCreateNestedOneWithoutMultimediaInput> = z.object({
  create: z.union([ z.lazy(() => Multimedia_promptsCreateWithoutMultimediaInputSchema),z.lazy(() => Multimedia_promptsUncheckedCreateWithoutMultimediaInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => Multimedia_promptsCreateOrConnectWithoutMultimediaInputSchema).optional(),
  connect: z.lazy(() => Multimedia_promptsWhereUniqueInputSchema).optional()
}).strict();

export const Multimedia_promptsUpdateOneRequiredWithoutMultimediaNestedInputSchema: z.ZodType<Prisma.Multimedia_promptsUpdateOneRequiredWithoutMultimediaNestedInput> = z.object({
  create: z.union([ z.lazy(() => Multimedia_promptsCreateWithoutMultimediaInputSchema),z.lazy(() => Multimedia_promptsUncheckedCreateWithoutMultimediaInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => Multimedia_promptsCreateOrConnectWithoutMultimediaInputSchema).optional(),
  upsert: z.lazy(() => Multimedia_promptsUpsertWithoutMultimediaInputSchema).optional(),
  connect: z.lazy(() => Multimedia_promptsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => Multimedia_promptsUpdateWithoutMultimediaInputSchema),z.lazy(() => Multimedia_promptsUncheckedUpdateWithoutMultimediaInputSchema) ]).optional(),
}).strict();

export const MultimediaCreateNestedManyWithoutMultimedia_promptsInputSchema: z.ZodType<Prisma.MultimediaCreateNestedManyWithoutMultimedia_promptsInput> = z.object({
  create: z.union([ z.lazy(() => MultimediaCreateWithoutMultimedia_promptsInputSchema),z.lazy(() => MultimediaCreateWithoutMultimedia_promptsInputSchema).array(),z.lazy(() => MultimediaUncheckedCreateWithoutMultimedia_promptsInputSchema),z.lazy(() => MultimediaUncheckedCreateWithoutMultimedia_promptsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MultimediaCreateOrConnectWithoutMultimedia_promptsInputSchema),z.lazy(() => MultimediaCreateOrConnectWithoutMultimedia_promptsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MultimediaCreateManyMultimedia_promptsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MultimediaWhereUniqueInputSchema),z.lazy(() => MultimediaWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CardsCreateNestedOneWithoutMultimedia_promptsInputSchema: z.ZodType<Prisma.CardsCreateNestedOneWithoutMultimedia_promptsInput> = z.object({
  create: z.union([ z.lazy(() => CardsCreateWithoutMultimedia_promptsInputSchema),z.lazy(() => CardsUncheckedCreateWithoutMultimedia_promptsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CardsCreateOrConnectWithoutMultimedia_promptsInputSchema).optional(),
  connect: z.lazy(() => CardsWhereUniqueInputSchema).optional()
}).strict();

export const MultimediaUncheckedCreateNestedManyWithoutMultimedia_promptsInputSchema: z.ZodType<Prisma.MultimediaUncheckedCreateNestedManyWithoutMultimedia_promptsInput> = z.object({
  create: z.union([ z.lazy(() => MultimediaCreateWithoutMultimedia_promptsInputSchema),z.lazy(() => MultimediaCreateWithoutMultimedia_promptsInputSchema).array(),z.lazy(() => MultimediaUncheckedCreateWithoutMultimedia_promptsInputSchema),z.lazy(() => MultimediaUncheckedCreateWithoutMultimedia_promptsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MultimediaCreateOrConnectWithoutMultimedia_promptsInputSchema),z.lazy(() => MultimediaCreateOrConnectWithoutMultimedia_promptsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MultimediaCreateManyMultimedia_promptsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MultimediaWhereUniqueInputSchema),z.lazy(() => MultimediaWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const MultimediaUpdateManyWithoutMultimedia_promptsNestedInputSchema: z.ZodType<Prisma.MultimediaUpdateManyWithoutMultimedia_promptsNestedInput> = z.object({
  create: z.union([ z.lazy(() => MultimediaCreateWithoutMultimedia_promptsInputSchema),z.lazy(() => MultimediaCreateWithoutMultimedia_promptsInputSchema).array(),z.lazy(() => MultimediaUncheckedCreateWithoutMultimedia_promptsInputSchema),z.lazy(() => MultimediaUncheckedCreateWithoutMultimedia_promptsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MultimediaCreateOrConnectWithoutMultimedia_promptsInputSchema),z.lazy(() => MultimediaCreateOrConnectWithoutMultimedia_promptsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MultimediaUpsertWithWhereUniqueWithoutMultimedia_promptsInputSchema),z.lazy(() => MultimediaUpsertWithWhereUniqueWithoutMultimedia_promptsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MultimediaCreateManyMultimedia_promptsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MultimediaWhereUniqueInputSchema),z.lazy(() => MultimediaWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MultimediaWhereUniqueInputSchema),z.lazy(() => MultimediaWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MultimediaWhereUniqueInputSchema),z.lazy(() => MultimediaWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MultimediaWhereUniqueInputSchema),z.lazy(() => MultimediaWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MultimediaUpdateWithWhereUniqueWithoutMultimedia_promptsInputSchema),z.lazy(() => MultimediaUpdateWithWhereUniqueWithoutMultimedia_promptsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MultimediaUpdateManyWithWhereWithoutMultimedia_promptsInputSchema),z.lazy(() => MultimediaUpdateManyWithWhereWithoutMultimedia_promptsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MultimediaScalarWhereInputSchema),z.lazy(() => MultimediaScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CardsUpdateOneRequiredWithoutMultimedia_promptsNestedInputSchema: z.ZodType<Prisma.CardsUpdateOneRequiredWithoutMultimedia_promptsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CardsCreateWithoutMultimedia_promptsInputSchema),z.lazy(() => CardsUncheckedCreateWithoutMultimedia_promptsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CardsCreateOrConnectWithoutMultimedia_promptsInputSchema).optional(),
  upsert: z.lazy(() => CardsUpsertWithoutMultimedia_promptsInputSchema).optional(),
  connect: z.lazy(() => CardsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CardsUpdateWithoutMultimedia_promptsInputSchema),z.lazy(() => CardsUncheckedUpdateWithoutMultimedia_promptsInputSchema) ]).optional(),
}).strict();

export const MultimediaUncheckedUpdateManyWithoutMultimedia_promptsNestedInputSchema: z.ZodType<Prisma.MultimediaUncheckedUpdateManyWithoutMultimedia_promptsNestedInput> = z.object({
  create: z.union([ z.lazy(() => MultimediaCreateWithoutMultimedia_promptsInputSchema),z.lazy(() => MultimediaCreateWithoutMultimedia_promptsInputSchema).array(),z.lazy(() => MultimediaUncheckedCreateWithoutMultimedia_promptsInputSchema),z.lazy(() => MultimediaUncheckedCreateWithoutMultimedia_promptsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MultimediaCreateOrConnectWithoutMultimedia_promptsInputSchema),z.lazy(() => MultimediaCreateOrConnectWithoutMultimedia_promptsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MultimediaUpsertWithWhereUniqueWithoutMultimedia_promptsInputSchema),z.lazy(() => MultimediaUpsertWithWhereUniqueWithoutMultimedia_promptsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MultimediaCreateManyMultimedia_promptsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MultimediaWhereUniqueInputSchema),z.lazy(() => MultimediaWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MultimediaWhereUniqueInputSchema),z.lazy(() => MultimediaWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MultimediaWhereUniqueInputSchema),z.lazy(() => MultimediaWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MultimediaWhereUniqueInputSchema),z.lazy(() => MultimediaWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MultimediaUpdateWithWhereUniqueWithoutMultimedia_promptsInputSchema),z.lazy(() => MultimediaUpdateWithWhereUniqueWithoutMultimedia_promptsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MultimediaUpdateManyWithWhereWithoutMultimedia_promptsInputSchema),z.lazy(() => MultimediaUpdateManyWithWhereWithoutMultimedia_promptsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MultimediaScalarWhereInputSchema),z.lazy(() => MultimediaScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NestedUuidFilterSchema: z.ZodType<Prisma.NestedUuidFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidFilterSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedEnumprompt_stateFilterSchema: z.ZodType<Prisma.NestedEnumprompt_stateFilter> = z.object({
  equals: z.lazy(() => prompt_stateSchema).optional(),
  in: z.lazy(() => prompt_stateSchema).array().optional(),
  notIn: z.lazy(() => prompt_stateSchema).array().optional(),
  not: z.union([ z.lazy(() => prompt_stateSchema),z.lazy(() => NestedEnumprompt_stateFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedUuidWithAggregatesFilterSchema: z.ZodType<Prisma.NestedUuidWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedEnumprompt_stateWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumprompt_stateWithAggregatesFilter> = z.object({
  equals: z.lazy(() => prompt_stateSchema).optional(),
  in: z.lazy(() => prompt_stateSchema).array().optional(),
  notIn: z.lazy(() => prompt_stateSchema).array().optional(),
  not: z.union([ z.lazy(() => prompt_stateSchema),z.lazy(() => NestedEnumprompt_stateWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumprompt_stateFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumprompt_stateFilterSchema).optional()
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedJsonNullableFilterSchema: z.ZodType<Prisma.NestedJsonNullableFilter> = z.object({
  equals: z.union([ InputJsonValue,z.lazy(() => JsonNullValueFilterSchema) ]).optional(),
  path: z.string().array().optional(),
  string_contains: z.string().optional(),
  string_starts_with: z.string().optional(),
  string_ends_with: z.string().optional(),
  array_contains: InputJsonValue.optional().nullable(),
  array_starts_with: InputJsonValue.optional().nullable(),
  array_ends_with: InputJsonValue.optional().nullable(),
  lt: InputJsonValue.optional(),
  lte: InputJsonValue.optional(),
  gt: InputJsonValue.optional(),
  gte: InputJsonValue.optional(),
  not: z.union([ InputJsonValue,z.lazy(() => JsonNullValueFilterSchema) ]).optional(),
}).strict();

export const DecksCreateWithoutCard_promptsInputSchema: z.ZodType<Prisma.DecksCreateWithoutCard_promptsInput> = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional().nullable(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date()
}).strict();

export const DecksUncheckedCreateWithoutCard_promptsInputSchema: z.ZodType<Prisma.DecksUncheckedCreateWithoutCard_promptsInput> = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional().nullable(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date()
}).strict();

export const DecksCreateOrConnectWithoutCard_promptsInputSchema: z.ZodType<Prisma.DecksCreateOrConnectWithoutCard_promptsInput> = z.object({
  where: z.lazy(() => DecksWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DecksCreateWithoutCard_promptsInputSchema),z.lazy(() => DecksUncheckedCreateWithoutCard_promptsInputSchema) ]),
}).strict();

export const CardsCreateWithoutCard_promptsInputSchema: z.ZodType<Prisma.CardsCreateWithoutCard_promptsInput> = z.object({
  id: z.string(),
  front_text: z.string(),
  back_text: z.string().optional().nullable(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  multimedia_prompts: z.lazy(() => Multimedia_promptsCreateNestedManyWithoutCardsInputSchema).optional()
}).strict();

export const CardsUncheckedCreateWithoutCard_promptsInputSchema: z.ZodType<Prisma.CardsUncheckedCreateWithoutCard_promptsInput> = z.object({
  id: z.string(),
  front_text: z.string(),
  back_text: z.string().optional().nullable(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  multimedia_prompts: z.lazy(() => Multimedia_promptsUncheckedCreateNestedManyWithoutCardsInputSchema).optional()
}).strict();

export const CardsCreateOrConnectWithoutCard_promptsInputSchema: z.ZodType<Prisma.CardsCreateOrConnectWithoutCard_promptsInput> = z.object({
  where: z.lazy(() => CardsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CardsCreateWithoutCard_promptsInputSchema),z.lazy(() => CardsUncheckedCreateWithoutCard_promptsInputSchema) ]),
}).strict();

export const CardsCreateManyCard_promptsInputEnvelopeSchema: z.ZodType<Prisma.CardsCreateManyCard_promptsInputEnvelope> = z.object({
  data: z.lazy(() => CardsCreateManyCard_promptsInputSchema).array(),
  skipDuplicates: z.boolean().optional()
}).strict();

export const DecksUpsertWithoutCard_promptsInputSchema: z.ZodType<Prisma.DecksUpsertWithoutCard_promptsInput> = z.object({
  update: z.union([ z.lazy(() => DecksUpdateWithoutCard_promptsInputSchema),z.lazy(() => DecksUncheckedUpdateWithoutCard_promptsInputSchema) ]),
  create: z.union([ z.lazy(() => DecksCreateWithoutCard_promptsInputSchema),z.lazy(() => DecksUncheckedCreateWithoutCard_promptsInputSchema) ]),
}).strict();

export const DecksUpdateWithoutCard_promptsInputSchema: z.ZodType<Prisma.DecksUpdateWithoutCard_promptsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const DecksUncheckedUpdateWithoutCard_promptsInputSchema: z.ZodType<Prisma.DecksUncheckedUpdateWithoutCard_promptsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CardsUpsertWithWhereUniqueWithoutCard_promptsInputSchema: z.ZodType<Prisma.CardsUpsertWithWhereUniqueWithoutCard_promptsInput> = z.object({
  where: z.lazy(() => CardsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CardsUpdateWithoutCard_promptsInputSchema),z.lazy(() => CardsUncheckedUpdateWithoutCard_promptsInputSchema) ]),
  create: z.union([ z.lazy(() => CardsCreateWithoutCard_promptsInputSchema),z.lazy(() => CardsUncheckedCreateWithoutCard_promptsInputSchema) ]),
}).strict();

export const CardsUpdateWithWhereUniqueWithoutCard_promptsInputSchema: z.ZodType<Prisma.CardsUpdateWithWhereUniqueWithoutCard_promptsInput> = z.object({
  where: z.lazy(() => CardsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CardsUpdateWithoutCard_promptsInputSchema),z.lazy(() => CardsUncheckedUpdateWithoutCard_promptsInputSchema) ]),
}).strict();

export const CardsUpdateManyWithWhereWithoutCard_promptsInputSchema: z.ZodType<Prisma.CardsUpdateManyWithWhereWithoutCard_promptsInput> = z.object({
  where: z.lazy(() => CardsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CardsUpdateManyMutationInputSchema),z.lazy(() => CardsUncheckedUpdateManyWithoutCardsInputSchema) ]),
}).strict();

export const CardsScalarWhereInputSchema: z.ZodType<Prisma.CardsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CardsScalarWhereInputSchema),z.lazy(() => CardsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CardsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CardsScalarWhereInputSchema),z.lazy(() => CardsScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  card_prompt_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  front_text: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  back_text: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const Card_promptsCreateWithoutCardsInputSchema: z.ZodType<Prisma.Card_promptsCreateWithoutCardsInput> = z.object({
  id: z.string(),
  text: z.string(),
  state: z.lazy(() => prompt_stateSchema),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  decks: z.lazy(() => DecksCreateNestedOneWithoutCard_promptsInputSchema)
}).strict();

export const Card_promptsUncheckedCreateWithoutCardsInputSchema: z.ZodType<Prisma.Card_promptsUncheckedCreateWithoutCardsInput> = z.object({
  id: z.string(),
  text: z.string(),
  state: z.lazy(() => prompt_stateSchema),
  deck_id: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date()
}).strict();

export const Card_promptsCreateOrConnectWithoutCardsInputSchema: z.ZodType<Prisma.Card_promptsCreateOrConnectWithoutCardsInput> = z.object({
  where: z.lazy(() => Card_promptsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => Card_promptsCreateWithoutCardsInputSchema),z.lazy(() => Card_promptsUncheckedCreateWithoutCardsInputSchema) ]),
}).strict();

export const Multimedia_promptsCreateWithoutCardsInputSchema: z.ZodType<Prisma.Multimedia_promptsCreateWithoutCardsInput> = z.object({
  id: z.string(),
  text: z.string(),
  state: z.lazy(() => prompt_stateSchema),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  multimedia: z.lazy(() => MultimediaCreateNestedManyWithoutMultimedia_promptsInputSchema).optional()
}).strict();

export const Multimedia_promptsUncheckedCreateWithoutCardsInputSchema: z.ZodType<Prisma.Multimedia_promptsUncheckedCreateWithoutCardsInput> = z.object({
  id: z.string(),
  text: z.string(),
  state: z.lazy(() => prompt_stateSchema),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  multimedia: z.lazy(() => MultimediaUncheckedCreateNestedManyWithoutMultimedia_promptsInputSchema).optional()
}).strict();

export const Multimedia_promptsCreateOrConnectWithoutCardsInputSchema: z.ZodType<Prisma.Multimedia_promptsCreateOrConnectWithoutCardsInput> = z.object({
  where: z.lazy(() => Multimedia_promptsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => Multimedia_promptsCreateWithoutCardsInputSchema),z.lazy(() => Multimedia_promptsUncheckedCreateWithoutCardsInputSchema) ]),
}).strict();

export const Multimedia_promptsCreateManyCardsInputEnvelopeSchema: z.ZodType<Prisma.Multimedia_promptsCreateManyCardsInputEnvelope> = z.object({
  data: z.lazy(() => Multimedia_promptsCreateManyCardsInputSchema).array(),
  skipDuplicates: z.boolean().optional()
}).strict();

export const Card_promptsUpsertWithoutCardsInputSchema: z.ZodType<Prisma.Card_promptsUpsertWithoutCardsInput> = z.object({
  update: z.union([ z.lazy(() => Card_promptsUpdateWithoutCardsInputSchema),z.lazy(() => Card_promptsUncheckedUpdateWithoutCardsInputSchema) ]),
  create: z.union([ z.lazy(() => Card_promptsCreateWithoutCardsInputSchema),z.lazy(() => Card_promptsUncheckedCreateWithoutCardsInputSchema) ]),
}).strict();

export const Card_promptsUpdateWithoutCardsInputSchema: z.ZodType<Prisma.Card_promptsUpdateWithoutCardsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.lazy(() => prompt_stateSchema),z.lazy(() => Enumprompt_stateFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  decks: z.lazy(() => DecksUpdateOneRequiredWithoutCard_promptsNestedInputSchema).optional()
}).strict();

export const Card_promptsUncheckedUpdateWithoutCardsInputSchema: z.ZodType<Prisma.Card_promptsUncheckedUpdateWithoutCardsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.lazy(() => prompt_stateSchema),z.lazy(() => Enumprompt_stateFieldUpdateOperationsInputSchema) ]).optional(),
  deck_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const Multimedia_promptsUpsertWithWhereUniqueWithoutCardsInputSchema: z.ZodType<Prisma.Multimedia_promptsUpsertWithWhereUniqueWithoutCardsInput> = z.object({
  where: z.lazy(() => Multimedia_promptsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => Multimedia_promptsUpdateWithoutCardsInputSchema),z.lazy(() => Multimedia_promptsUncheckedUpdateWithoutCardsInputSchema) ]),
  create: z.union([ z.lazy(() => Multimedia_promptsCreateWithoutCardsInputSchema),z.lazy(() => Multimedia_promptsUncheckedCreateWithoutCardsInputSchema) ]),
}).strict();

export const Multimedia_promptsUpdateWithWhereUniqueWithoutCardsInputSchema: z.ZodType<Prisma.Multimedia_promptsUpdateWithWhereUniqueWithoutCardsInput> = z.object({
  where: z.lazy(() => Multimedia_promptsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => Multimedia_promptsUpdateWithoutCardsInputSchema),z.lazy(() => Multimedia_promptsUncheckedUpdateWithoutCardsInputSchema) ]),
}).strict();

export const Multimedia_promptsUpdateManyWithWhereWithoutCardsInputSchema: z.ZodType<Prisma.Multimedia_promptsUpdateManyWithWhereWithoutCardsInput> = z.object({
  where: z.lazy(() => Multimedia_promptsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => Multimedia_promptsUpdateManyMutationInputSchema),z.lazy(() => Multimedia_promptsUncheckedUpdateManyWithoutMultimedia_promptsInputSchema) ]),
}).strict();

export const Multimedia_promptsScalarWhereInputSchema: z.ZodType<Prisma.Multimedia_promptsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => Multimedia_promptsScalarWhereInputSchema),z.lazy(() => Multimedia_promptsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => Multimedia_promptsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Multimedia_promptsScalarWhereInputSchema),z.lazy(() => Multimedia_promptsScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  text: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  state: z.union([ z.lazy(() => Enumprompt_stateFilterSchema),z.lazy(() => prompt_stateSchema) ]).optional(),
  card_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const Card_promptsCreateWithoutDecksInputSchema: z.ZodType<Prisma.Card_promptsCreateWithoutDecksInput> = z.object({
  id: z.string(),
  text: z.string(),
  state: z.lazy(() => prompt_stateSchema),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  cards: z.lazy(() => CardsCreateNestedManyWithoutCard_promptsInputSchema).optional()
}).strict();

export const Card_promptsUncheckedCreateWithoutDecksInputSchema: z.ZodType<Prisma.Card_promptsUncheckedCreateWithoutDecksInput> = z.object({
  id: z.string(),
  text: z.string(),
  state: z.lazy(() => prompt_stateSchema),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  cards: z.lazy(() => CardsUncheckedCreateNestedManyWithoutCard_promptsInputSchema).optional()
}).strict();

export const Card_promptsCreateOrConnectWithoutDecksInputSchema: z.ZodType<Prisma.Card_promptsCreateOrConnectWithoutDecksInput> = z.object({
  where: z.lazy(() => Card_promptsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => Card_promptsCreateWithoutDecksInputSchema),z.lazy(() => Card_promptsUncheckedCreateWithoutDecksInputSchema) ]),
}).strict();

export const Card_promptsCreateManyDecksInputEnvelopeSchema: z.ZodType<Prisma.Card_promptsCreateManyDecksInputEnvelope> = z.object({
  data: z.lazy(() => Card_promptsCreateManyDecksInputSchema).array(),
  skipDuplicates: z.boolean().optional()
}).strict();

export const Card_promptsUpsertWithWhereUniqueWithoutDecksInputSchema: z.ZodType<Prisma.Card_promptsUpsertWithWhereUniqueWithoutDecksInput> = z.object({
  where: z.lazy(() => Card_promptsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => Card_promptsUpdateWithoutDecksInputSchema),z.lazy(() => Card_promptsUncheckedUpdateWithoutDecksInputSchema) ]),
  create: z.union([ z.lazy(() => Card_promptsCreateWithoutDecksInputSchema),z.lazy(() => Card_promptsUncheckedCreateWithoutDecksInputSchema) ]),
}).strict();

export const Card_promptsUpdateWithWhereUniqueWithoutDecksInputSchema: z.ZodType<Prisma.Card_promptsUpdateWithWhereUniqueWithoutDecksInput> = z.object({
  where: z.lazy(() => Card_promptsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => Card_promptsUpdateWithoutDecksInputSchema),z.lazy(() => Card_promptsUncheckedUpdateWithoutDecksInputSchema) ]),
}).strict();

export const Card_promptsUpdateManyWithWhereWithoutDecksInputSchema: z.ZodType<Prisma.Card_promptsUpdateManyWithWhereWithoutDecksInput> = z.object({
  where: z.lazy(() => Card_promptsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => Card_promptsUpdateManyMutationInputSchema),z.lazy(() => Card_promptsUncheckedUpdateManyWithoutCard_promptsInputSchema) ]),
}).strict();

export const Card_promptsScalarWhereInputSchema: z.ZodType<Prisma.Card_promptsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => Card_promptsScalarWhereInputSchema),z.lazy(() => Card_promptsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => Card_promptsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Card_promptsScalarWhereInputSchema),z.lazy(() => Card_promptsScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  text: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  state: z.union([ z.lazy(() => Enumprompt_stateFilterSchema),z.lazy(() => prompt_stateSchema) ]).optional(),
  deck_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const Multimedia_promptsCreateWithoutMultimediaInputSchema: z.ZodType<Prisma.Multimedia_promptsCreateWithoutMultimediaInput> = z.object({
  id: z.string(),
  text: z.string(),
  state: z.lazy(() => prompt_stateSchema),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  cards: z.lazy(() => CardsCreateNestedOneWithoutMultimedia_promptsInputSchema)
}).strict();

export const Multimedia_promptsUncheckedCreateWithoutMultimediaInputSchema: z.ZodType<Prisma.Multimedia_promptsUncheckedCreateWithoutMultimediaInput> = z.object({
  id: z.string(),
  text: z.string(),
  state: z.lazy(() => prompt_stateSchema),
  card_id: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date()
}).strict();

export const Multimedia_promptsCreateOrConnectWithoutMultimediaInputSchema: z.ZodType<Prisma.Multimedia_promptsCreateOrConnectWithoutMultimediaInput> = z.object({
  where: z.lazy(() => Multimedia_promptsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => Multimedia_promptsCreateWithoutMultimediaInputSchema),z.lazy(() => Multimedia_promptsUncheckedCreateWithoutMultimediaInputSchema) ]),
}).strict();

export const Multimedia_promptsUpsertWithoutMultimediaInputSchema: z.ZodType<Prisma.Multimedia_promptsUpsertWithoutMultimediaInput> = z.object({
  update: z.union([ z.lazy(() => Multimedia_promptsUpdateWithoutMultimediaInputSchema),z.lazy(() => Multimedia_promptsUncheckedUpdateWithoutMultimediaInputSchema) ]),
  create: z.union([ z.lazy(() => Multimedia_promptsCreateWithoutMultimediaInputSchema),z.lazy(() => Multimedia_promptsUncheckedCreateWithoutMultimediaInputSchema) ]),
}).strict();

export const Multimedia_promptsUpdateWithoutMultimediaInputSchema: z.ZodType<Prisma.Multimedia_promptsUpdateWithoutMultimediaInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.lazy(() => prompt_stateSchema),z.lazy(() => Enumprompt_stateFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  cards: z.lazy(() => CardsUpdateOneRequiredWithoutMultimedia_promptsNestedInputSchema).optional()
}).strict();

export const Multimedia_promptsUncheckedUpdateWithoutMultimediaInputSchema: z.ZodType<Prisma.Multimedia_promptsUncheckedUpdateWithoutMultimediaInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.lazy(() => prompt_stateSchema),z.lazy(() => Enumprompt_stateFieldUpdateOperationsInputSchema) ]).optional(),
  card_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MultimediaCreateWithoutMultimedia_promptsInputSchema: z.ZodType<Prisma.MultimediaCreateWithoutMultimedia_promptsInput> = z.object({
  id: z.string(),
  media_type: z.string(),
  url: z.string().optional().nullable(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date()
}).strict();

export const MultimediaUncheckedCreateWithoutMultimedia_promptsInputSchema: z.ZodType<Prisma.MultimediaUncheckedCreateWithoutMultimedia_promptsInput> = z.object({
  id: z.string(),
  media_type: z.string(),
  url: z.string().optional().nullable(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date()
}).strict();

export const MultimediaCreateOrConnectWithoutMultimedia_promptsInputSchema: z.ZodType<Prisma.MultimediaCreateOrConnectWithoutMultimedia_promptsInput> = z.object({
  where: z.lazy(() => MultimediaWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MultimediaCreateWithoutMultimedia_promptsInputSchema),z.lazy(() => MultimediaUncheckedCreateWithoutMultimedia_promptsInputSchema) ]),
}).strict();

export const MultimediaCreateManyMultimedia_promptsInputEnvelopeSchema: z.ZodType<Prisma.MultimediaCreateManyMultimedia_promptsInputEnvelope> = z.object({
  data: z.lazy(() => MultimediaCreateManyMultimedia_promptsInputSchema).array(),
  skipDuplicates: z.boolean().optional()
}).strict();

export const CardsCreateWithoutMultimedia_promptsInputSchema: z.ZodType<Prisma.CardsCreateWithoutMultimedia_promptsInput> = z.object({
  id: z.string(),
  front_text: z.string(),
  back_text: z.string().optional().nullable(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  card_prompts: z.lazy(() => Card_promptsCreateNestedOneWithoutCardsInputSchema)
}).strict();

export const CardsUncheckedCreateWithoutMultimedia_promptsInputSchema: z.ZodType<Prisma.CardsUncheckedCreateWithoutMultimedia_promptsInput> = z.object({
  id: z.string(),
  card_prompt_id: z.string(),
  front_text: z.string(),
  back_text: z.string().optional().nullable(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date()
}).strict();

export const CardsCreateOrConnectWithoutMultimedia_promptsInputSchema: z.ZodType<Prisma.CardsCreateOrConnectWithoutMultimedia_promptsInput> = z.object({
  where: z.lazy(() => CardsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CardsCreateWithoutMultimedia_promptsInputSchema),z.lazy(() => CardsUncheckedCreateWithoutMultimedia_promptsInputSchema) ]),
}).strict();

export const MultimediaUpsertWithWhereUniqueWithoutMultimedia_promptsInputSchema: z.ZodType<Prisma.MultimediaUpsertWithWhereUniqueWithoutMultimedia_promptsInput> = z.object({
  where: z.lazy(() => MultimediaWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MultimediaUpdateWithoutMultimedia_promptsInputSchema),z.lazy(() => MultimediaUncheckedUpdateWithoutMultimedia_promptsInputSchema) ]),
  create: z.union([ z.lazy(() => MultimediaCreateWithoutMultimedia_promptsInputSchema),z.lazy(() => MultimediaUncheckedCreateWithoutMultimedia_promptsInputSchema) ]),
}).strict();

export const MultimediaUpdateWithWhereUniqueWithoutMultimedia_promptsInputSchema: z.ZodType<Prisma.MultimediaUpdateWithWhereUniqueWithoutMultimedia_promptsInput> = z.object({
  where: z.lazy(() => MultimediaWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MultimediaUpdateWithoutMultimedia_promptsInputSchema),z.lazy(() => MultimediaUncheckedUpdateWithoutMultimedia_promptsInputSchema) ]),
}).strict();

export const MultimediaUpdateManyWithWhereWithoutMultimedia_promptsInputSchema: z.ZodType<Prisma.MultimediaUpdateManyWithWhereWithoutMultimedia_promptsInput> = z.object({
  where: z.lazy(() => MultimediaScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MultimediaUpdateManyMutationInputSchema),z.lazy(() => MultimediaUncheckedUpdateManyWithoutMultimediaInputSchema) ]),
}).strict();

export const MultimediaScalarWhereInputSchema: z.ZodType<Prisma.MultimediaScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MultimediaScalarWhereInputSchema),z.lazy(() => MultimediaScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MultimediaScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MultimediaScalarWhereInputSchema),z.lazy(() => MultimediaScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  multimedia_prompt_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  media_type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  metadata: z.lazy(() => JsonNullableFilterSchema).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const CardsUpsertWithoutMultimedia_promptsInputSchema: z.ZodType<Prisma.CardsUpsertWithoutMultimedia_promptsInput> = z.object({
  update: z.union([ z.lazy(() => CardsUpdateWithoutMultimedia_promptsInputSchema),z.lazy(() => CardsUncheckedUpdateWithoutMultimedia_promptsInputSchema) ]),
  create: z.union([ z.lazy(() => CardsCreateWithoutMultimedia_promptsInputSchema),z.lazy(() => CardsUncheckedCreateWithoutMultimedia_promptsInputSchema) ]),
}).strict();

export const CardsUpdateWithoutMultimedia_promptsInputSchema: z.ZodType<Prisma.CardsUpdateWithoutMultimedia_promptsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  front_text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  back_text: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  card_prompts: z.lazy(() => Card_promptsUpdateOneRequiredWithoutCardsNestedInputSchema).optional()
}).strict();

export const CardsUncheckedUpdateWithoutMultimedia_promptsInputSchema: z.ZodType<Prisma.CardsUncheckedUpdateWithoutMultimedia_promptsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  card_prompt_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  front_text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  back_text: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CardsCreateManyCard_promptsInputSchema: z.ZodType<Prisma.CardsCreateManyCard_promptsInput> = z.object({
  id: z.string().uuid(),
  front_text: z.string(),
  back_text: z.string().optional().nullable(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date()
}).strict();

export const CardsUpdateWithoutCard_promptsInputSchema: z.ZodType<Prisma.CardsUpdateWithoutCard_promptsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  front_text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  back_text: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  multimedia_prompts: z.lazy(() => Multimedia_promptsUpdateManyWithoutCardsNestedInputSchema).optional()
}).strict();

export const CardsUncheckedUpdateWithoutCard_promptsInputSchema: z.ZodType<Prisma.CardsUncheckedUpdateWithoutCard_promptsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  front_text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  back_text: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  multimedia_prompts: z.lazy(() => Multimedia_promptsUncheckedUpdateManyWithoutCardsNestedInputSchema).optional()
}).strict();

export const CardsUncheckedUpdateManyWithoutCardsInputSchema: z.ZodType<Prisma.CardsUncheckedUpdateManyWithoutCardsInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  front_text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  back_text: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const Multimedia_promptsCreateManyCardsInputSchema: z.ZodType<Prisma.Multimedia_promptsCreateManyCardsInput> = z.object({
  id: z.string().uuid(),
  text: z.string(),
  state: z.lazy(() => prompt_stateSchema),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date()
}).strict();

export const Multimedia_promptsUpdateWithoutCardsInputSchema: z.ZodType<Prisma.Multimedia_promptsUpdateWithoutCardsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.lazy(() => prompt_stateSchema),z.lazy(() => Enumprompt_stateFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  multimedia: z.lazy(() => MultimediaUpdateManyWithoutMultimedia_promptsNestedInputSchema).optional()
}).strict();

export const Multimedia_promptsUncheckedUpdateWithoutCardsInputSchema: z.ZodType<Prisma.Multimedia_promptsUncheckedUpdateWithoutCardsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.lazy(() => prompt_stateSchema),z.lazy(() => Enumprompt_stateFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  multimedia: z.lazy(() => MultimediaUncheckedUpdateManyWithoutMultimedia_promptsNestedInputSchema).optional()
}).strict();

export const Multimedia_promptsUncheckedUpdateManyWithoutMultimedia_promptsInputSchema: z.ZodType<Prisma.Multimedia_promptsUncheckedUpdateManyWithoutMultimedia_promptsInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.lazy(() => prompt_stateSchema),z.lazy(() => Enumprompt_stateFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const Card_promptsCreateManyDecksInputSchema: z.ZodType<Prisma.Card_promptsCreateManyDecksInput> = z.object({
  id: z.string().uuid(),
  text: z.string(),
  state: z.lazy(() => prompt_stateSchema),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date()
}).strict();

export const Card_promptsUpdateWithoutDecksInputSchema: z.ZodType<Prisma.Card_promptsUpdateWithoutDecksInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.lazy(() => prompt_stateSchema),z.lazy(() => Enumprompt_stateFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  cards: z.lazy(() => CardsUpdateManyWithoutCard_promptsNestedInputSchema).optional()
}).strict();

export const Card_promptsUncheckedUpdateWithoutDecksInputSchema: z.ZodType<Prisma.Card_promptsUncheckedUpdateWithoutDecksInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.lazy(() => prompt_stateSchema),z.lazy(() => Enumprompt_stateFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  cards: z.lazy(() => CardsUncheckedUpdateManyWithoutCard_promptsNestedInputSchema).optional()
}).strict();

export const Card_promptsUncheckedUpdateManyWithoutCard_promptsInputSchema: z.ZodType<Prisma.Card_promptsUncheckedUpdateManyWithoutCard_promptsInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.lazy(() => prompt_stateSchema),z.lazy(() => Enumprompt_stateFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MultimediaCreateManyMultimedia_promptsInputSchema: z.ZodType<Prisma.MultimediaCreateManyMultimedia_promptsInput> = z.object({
  id: z.string().uuid(),
  media_type: z.string(),
  url: z.string().optional().nullable(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date()
}).strict();

export const MultimediaUpdateWithoutMultimedia_promptsInputSchema: z.ZodType<Prisma.MultimediaUpdateWithoutMultimedia_promptsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  media_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MultimediaUncheckedUpdateWithoutMultimedia_promptsInputSchema: z.ZodType<Prisma.MultimediaUncheckedUpdateWithoutMultimedia_promptsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  media_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MultimediaUncheckedUpdateManyWithoutMultimediaInputSchema: z.ZodType<Prisma.MultimediaUncheckedUpdateManyWithoutMultimediaInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  media_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const Card_promptsFindFirstArgsSchema: z.ZodType<Prisma.Card_promptsFindFirstArgs> = z.object({
  select: Card_promptsSelectSchema.optional(),
  include: Card_promptsIncludeSchema.optional(),
  where: Card_promptsWhereInputSchema.optional(),
  orderBy: z.union([ Card_promptsOrderByWithRelationInputSchema.array(),Card_promptsOrderByWithRelationInputSchema ]).optional(),
  cursor: Card_promptsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Card_promptsScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.Card_promptsFindFirstArgs>

export const Card_promptsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.Card_promptsFindFirstOrThrowArgs> = z.object({
  select: Card_promptsSelectSchema.optional(),
  include: Card_promptsIncludeSchema.optional(),
  where: Card_promptsWhereInputSchema.optional(),
  orderBy: z.union([ Card_promptsOrderByWithRelationInputSchema.array(),Card_promptsOrderByWithRelationInputSchema ]).optional(),
  cursor: Card_promptsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Card_promptsScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.Card_promptsFindFirstOrThrowArgs>

export const Card_promptsFindManyArgsSchema: z.ZodType<Prisma.Card_promptsFindManyArgs> = z.object({
  select: Card_promptsSelectSchema.optional(),
  include: Card_promptsIncludeSchema.optional(),
  where: Card_promptsWhereInputSchema.optional(),
  orderBy: z.union([ Card_promptsOrderByWithRelationInputSchema.array(),Card_promptsOrderByWithRelationInputSchema ]).optional(),
  cursor: Card_promptsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Card_promptsScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.Card_promptsFindManyArgs>

export const Card_promptsAggregateArgsSchema: z.ZodType<Prisma.Card_promptsAggregateArgs> = z.object({
  where: Card_promptsWhereInputSchema.optional(),
  orderBy: z.union([ Card_promptsOrderByWithRelationInputSchema.array(),Card_promptsOrderByWithRelationInputSchema ]).optional(),
  cursor: Card_promptsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.Card_promptsAggregateArgs>

export const Card_promptsGroupByArgsSchema: z.ZodType<Prisma.Card_promptsGroupByArgs> = z.object({
  where: Card_promptsWhereInputSchema.optional(),
  orderBy: z.union([ Card_promptsOrderByWithAggregationInputSchema.array(),Card_promptsOrderByWithAggregationInputSchema ]).optional(),
  by: Card_promptsScalarFieldEnumSchema.array(),
  having: Card_promptsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.Card_promptsGroupByArgs>

export const Card_promptsFindUniqueArgsSchema: z.ZodType<Prisma.Card_promptsFindUniqueArgs> = z.object({
  select: Card_promptsSelectSchema.optional(),
  include: Card_promptsIncludeSchema.optional(),
  where: Card_promptsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Card_promptsFindUniqueArgs>

export const Card_promptsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.Card_promptsFindUniqueOrThrowArgs> = z.object({
  select: Card_promptsSelectSchema.optional(),
  include: Card_promptsIncludeSchema.optional(),
  where: Card_promptsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Card_promptsFindUniqueOrThrowArgs>

export const CardsFindFirstArgsSchema: z.ZodType<Prisma.CardsFindFirstArgs> = z.object({
  select: CardsSelectSchema.optional(),
  include: CardsIncludeSchema.optional(),
  where: CardsWhereInputSchema.optional(),
  orderBy: z.union([ CardsOrderByWithRelationInputSchema.array(),CardsOrderByWithRelationInputSchema ]).optional(),
  cursor: CardsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: CardsScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.CardsFindFirstArgs>

export const CardsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CardsFindFirstOrThrowArgs> = z.object({
  select: CardsSelectSchema.optional(),
  include: CardsIncludeSchema.optional(),
  where: CardsWhereInputSchema.optional(),
  orderBy: z.union([ CardsOrderByWithRelationInputSchema.array(),CardsOrderByWithRelationInputSchema ]).optional(),
  cursor: CardsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: CardsScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.CardsFindFirstOrThrowArgs>

export const CardsFindManyArgsSchema: z.ZodType<Prisma.CardsFindManyArgs> = z.object({
  select: CardsSelectSchema.optional(),
  include: CardsIncludeSchema.optional(),
  where: CardsWhereInputSchema.optional(),
  orderBy: z.union([ CardsOrderByWithRelationInputSchema.array(),CardsOrderByWithRelationInputSchema ]).optional(),
  cursor: CardsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: CardsScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.CardsFindManyArgs>

export const CardsAggregateArgsSchema: z.ZodType<Prisma.CardsAggregateArgs> = z.object({
  where: CardsWhereInputSchema.optional(),
  orderBy: z.union([ CardsOrderByWithRelationInputSchema.array(),CardsOrderByWithRelationInputSchema ]).optional(),
  cursor: CardsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.CardsAggregateArgs>

export const CardsGroupByArgsSchema: z.ZodType<Prisma.CardsGroupByArgs> = z.object({
  where: CardsWhereInputSchema.optional(),
  orderBy: z.union([ CardsOrderByWithAggregationInputSchema.array(),CardsOrderByWithAggregationInputSchema ]).optional(),
  by: CardsScalarFieldEnumSchema.array(),
  having: CardsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.CardsGroupByArgs>

export const CardsFindUniqueArgsSchema: z.ZodType<Prisma.CardsFindUniqueArgs> = z.object({
  select: CardsSelectSchema.optional(),
  include: CardsIncludeSchema.optional(),
  where: CardsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.CardsFindUniqueArgs>

export const CardsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CardsFindUniqueOrThrowArgs> = z.object({
  select: CardsSelectSchema.optional(),
  include: CardsIncludeSchema.optional(),
  where: CardsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.CardsFindUniqueOrThrowArgs>

export const DecksFindFirstArgsSchema: z.ZodType<Prisma.DecksFindFirstArgs> = z.object({
  select: DecksSelectSchema.optional(),
  include: DecksIncludeSchema.optional(),
  where: DecksWhereInputSchema.optional(),
  orderBy: z.union([ DecksOrderByWithRelationInputSchema.array(),DecksOrderByWithRelationInputSchema ]).optional(),
  cursor: DecksWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: DecksScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.DecksFindFirstArgs>

export const DecksFindFirstOrThrowArgsSchema: z.ZodType<Prisma.DecksFindFirstOrThrowArgs> = z.object({
  select: DecksSelectSchema.optional(),
  include: DecksIncludeSchema.optional(),
  where: DecksWhereInputSchema.optional(),
  orderBy: z.union([ DecksOrderByWithRelationInputSchema.array(),DecksOrderByWithRelationInputSchema ]).optional(),
  cursor: DecksWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: DecksScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.DecksFindFirstOrThrowArgs>

export const DecksFindManyArgsSchema: z.ZodType<Prisma.DecksFindManyArgs> = z.object({
  select: DecksSelectSchema.optional(),
  include: DecksIncludeSchema.optional(),
  where: DecksWhereInputSchema.optional(),
  orderBy: z.union([ DecksOrderByWithRelationInputSchema.array(),DecksOrderByWithRelationInputSchema ]).optional(),
  cursor: DecksWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: DecksScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.DecksFindManyArgs>

export const DecksAggregateArgsSchema: z.ZodType<Prisma.DecksAggregateArgs> = z.object({
  where: DecksWhereInputSchema.optional(),
  orderBy: z.union([ DecksOrderByWithRelationInputSchema.array(),DecksOrderByWithRelationInputSchema ]).optional(),
  cursor: DecksWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.DecksAggregateArgs>

export const DecksGroupByArgsSchema: z.ZodType<Prisma.DecksGroupByArgs> = z.object({
  where: DecksWhereInputSchema.optional(),
  orderBy: z.union([ DecksOrderByWithAggregationInputSchema.array(),DecksOrderByWithAggregationInputSchema ]).optional(),
  by: DecksScalarFieldEnumSchema.array(),
  having: DecksScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.DecksGroupByArgs>

export const DecksFindUniqueArgsSchema: z.ZodType<Prisma.DecksFindUniqueArgs> = z.object({
  select: DecksSelectSchema.optional(),
  include: DecksIncludeSchema.optional(),
  where: DecksWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.DecksFindUniqueArgs>

export const DecksFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.DecksFindUniqueOrThrowArgs> = z.object({
  select: DecksSelectSchema.optional(),
  include: DecksIncludeSchema.optional(),
  where: DecksWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.DecksFindUniqueOrThrowArgs>

export const MultimediaFindFirstArgsSchema: z.ZodType<Prisma.MultimediaFindFirstArgs> = z.object({
  select: MultimediaSelectSchema.optional(),
  include: MultimediaIncludeSchema.optional(),
  where: MultimediaWhereInputSchema.optional(),
  orderBy: z.union([ MultimediaOrderByWithRelationInputSchema.array(),MultimediaOrderByWithRelationInputSchema ]).optional(),
  cursor: MultimediaWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: MultimediaScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.MultimediaFindFirstArgs>

export const MultimediaFindFirstOrThrowArgsSchema: z.ZodType<Prisma.MultimediaFindFirstOrThrowArgs> = z.object({
  select: MultimediaSelectSchema.optional(),
  include: MultimediaIncludeSchema.optional(),
  where: MultimediaWhereInputSchema.optional(),
  orderBy: z.union([ MultimediaOrderByWithRelationInputSchema.array(),MultimediaOrderByWithRelationInputSchema ]).optional(),
  cursor: MultimediaWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: MultimediaScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.MultimediaFindFirstOrThrowArgs>

export const MultimediaFindManyArgsSchema: z.ZodType<Prisma.MultimediaFindManyArgs> = z.object({
  select: MultimediaSelectSchema.optional(),
  include: MultimediaIncludeSchema.optional(),
  where: MultimediaWhereInputSchema.optional(),
  orderBy: z.union([ MultimediaOrderByWithRelationInputSchema.array(),MultimediaOrderByWithRelationInputSchema ]).optional(),
  cursor: MultimediaWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: MultimediaScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.MultimediaFindManyArgs>

export const MultimediaAggregateArgsSchema: z.ZodType<Prisma.MultimediaAggregateArgs> = z.object({
  where: MultimediaWhereInputSchema.optional(),
  orderBy: z.union([ MultimediaOrderByWithRelationInputSchema.array(),MultimediaOrderByWithRelationInputSchema ]).optional(),
  cursor: MultimediaWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.MultimediaAggregateArgs>

export const MultimediaGroupByArgsSchema: z.ZodType<Prisma.MultimediaGroupByArgs> = z.object({
  where: MultimediaWhereInputSchema.optional(),
  orderBy: z.union([ MultimediaOrderByWithAggregationInputSchema.array(),MultimediaOrderByWithAggregationInputSchema ]).optional(),
  by: MultimediaScalarFieldEnumSchema.array(),
  having: MultimediaScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.MultimediaGroupByArgs>

export const MultimediaFindUniqueArgsSchema: z.ZodType<Prisma.MultimediaFindUniqueArgs> = z.object({
  select: MultimediaSelectSchema.optional(),
  include: MultimediaIncludeSchema.optional(),
  where: MultimediaWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.MultimediaFindUniqueArgs>

export const MultimediaFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.MultimediaFindUniqueOrThrowArgs> = z.object({
  select: MultimediaSelectSchema.optional(),
  include: MultimediaIncludeSchema.optional(),
  where: MultimediaWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.MultimediaFindUniqueOrThrowArgs>

export const Multimedia_promptsFindFirstArgsSchema: z.ZodType<Prisma.Multimedia_promptsFindFirstArgs> = z.object({
  select: Multimedia_promptsSelectSchema.optional(),
  include: Multimedia_promptsIncludeSchema.optional(),
  where: Multimedia_promptsWhereInputSchema.optional(),
  orderBy: z.union([ Multimedia_promptsOrderByWithRelationInputSchema.array(),Multimedia_promptsOrderByWithRelationInputSchema ]).optional(),
  cursor: Multimedia_promptsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Multimedia_promptsScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.Multimedia_promptsFindFirstArgs>

export const Multimedia_promptsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.Multimedia_promptsFindFirstOrThrowArgs> = z.object({
  select: Multimedia_promptsSelectSchema.optional(),
  include: Multimedia_promptsIncludeSchema.optional(),
  where: Multimedia_promptsWhereInputSchema.optional(),
  orderBy: z.union([ Multimedia_promptsOrderByWithRelationInputSchema.array(),Multimedia_promptsOrderByWithRelationInputSchema ]).optional(),
  cursor: Multimedia_promptsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Multimedia_promptsScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.Multimedia_promptsFindFirstOrThrowArgs>

export const Multimedia_promptsFindManyArgsSchema: z.ZodType<Prisma.Multimedia_promptsFindManyArgs> = z.object({
  select: Multimedia_promptsSelectSchema.optional(),
  include: Multimedia_promptsIncludeSchema.optional(),
  where: Multimedia_promptsWhereInputSchema.optional(),
  orderBy: z.union([ Multimedia_promptsOrderByWithRelationInputSchema.array(),Multimedia_promptsOrderByWithRelationInputSchema ]).optional(),
  cursor: Multimedia_promptsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Multimedia_promptsScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.Multimedia_promptsFindManyArgs>

export const Multimedia_promptsAggregateArgsSchema: z.ZodType<Prisma.Multimedia_promptsAggregateArgs> = z.object({
  where: Multimedia_promptsWhereInputSchema.optional(),
  orderBy: z.union([ Multimedia_promptsOrderByWithRelationInputSchema.array(),Multimedia_promptsOrderByWithRelationInputSchema ]).optional(),
  cursor: Multimedia_promptsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.Multimedia_promptsAggregateArgs>

export const Multimedia_promptsGroupByArgsSchema: z.ZodType<Prisma.Multimedia_promptsGroupByArgs> = z.object({
  where: Multimedia_promptsWhereInputSchema.optional(),
  orderBy: z.union([ Multimedia_promptsOrderByWithAggregationInputSchema.array(),Multimedia_promptsOrderByWithAggregationInputSchema ]).optional(),
  by: Multimedia_promptsScalarFieldEnumSchema.array(),
  having: Multimedia_promptsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.Multimedia_promptsGroupByArgs>

export const Multimedia_promptsFindUniqueArgsSchema: z.ZodType<Prisma.Multimedia_promptsFindUniqueArgs> = z.object({
  select: Multimedia_promptsSelectSchema.optional(),
  include: Multimedia_promptsIncludeSchema.optional(),
  where: Multimedia_promptsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Multimedia_promptsFindUniqueArgs>

export const Multimedia_promptsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.Multimedia_promptsFindUniqueOrThrowArgs> = z.object({
  select: Multimedia_promptsSelectSchema.optional(),
  include: Multimedia_promptsIncludeSchema.optional(),
  where: Multimedia_promptsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Multimedia_promptsFindUniqueOrThrowArgs>

export const Card_promptsCreateArgsSchema: z.ZodType<Prisma.Card_promptsCreateArgs> = z.object({
  select: Card_promptsSelectSchema.optional(),
  include: Card_promptsIncludeSchema.optional(),
  data: z.union([ Card_promptsCreateInputSchema,Card_promptsUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.Card_promptsCreateArgs>

export const Card_promptsUpsertArgsSchema: z.ZodType<Prisma.Card_promptsUpsertArgs> = z.object({
  select: Card_promptsSelectSchema.optional(),
  include: Card_promptsIncludeSchema.optional(),
  where: Card_promptsWhereUniqueInputSchema,
  create: z.union([ Card_promptsCreateInputSchema,Card_promptsUncheckedCreateInputSchema ]),
  update: z.union([ Card_promptsUpdateInputSchema,Card_promptsUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.Card_promptsUpsertArgs>

export const Card_promptsCreateManyArgsSchema: z.ZodType<Prisma.Card_promptsCreateManyArgs> = z.object({
  data: Card_promptsCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.Card_promptsCreateManyArgs>

export const Card_promptsDeleteArgsSchema: z.ZodType<Prisma.Card_promptsDeleteArgs> = z.object({
  select: Card_promptsSelectSchema.optional(),
  include: Card_promptsIncludeSchema.optional(),
  where: Card_promptsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Card_promptsDeleteArgs>

export const Card_promptsUpdateArgsSchema: z.ZodType<Prisma.Card_promptsUpdateArgs> = z.object({
  select: Card_promptsSelectSchema.optional(),
  include: Card_promptsIncludeSchema.optional(),
  data: z.union([ Card_promptsUpdateInputSchema,Card_promptsUncheckedUpdateInputSchema ]),
  where: Card_promptsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Card_promptsUpdateArgs>

export const Card_promptsUpdateManyArgsSchema: z.ZodType<Prisma.Card_promptsUpdateManyArgs> = z.object({
  data: z.union([ Card_promptsUpdateManyMutationInputSchema,Card_promptsUncheckedUpdateManyInputSchema ]),
  where: Card_promptsWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.Card_promptsUpdateManyArgs>

export const Card_promptsDeleteManyArgsSchema: z.ZodType<Prisma.Card_promptsDeleteManyArgs> = z.object({
  where: Card_promptsWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.Card_promptsDeleteManyArgs>

export const CardsCreateArgsSchema: z.ZodType<Prisma.CardsCreateArgs> = z.object({
  select: CardsSelectSchema.optional(),
  include: CardsIncludeSchema.optional(),
  data: z.union([ CardsCreateInputSchema,CardsUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.CardsCreateArgs>

export const CardsUpsertArgsSchema: z.ZodType<Prisma.CardsUpsertArgs> = z.object({
  select: CardsSelectSchema.optional(),
  include: CardsIncludeSchema.optional(),
  where: CardsWhereUniqueInputSchema,
  create: z.union([ CardsCreateInputSchema,CardsUncheckedCreateInputSchema ]),
  update: z.union([ CardsUpdateInputSchema,CardsUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.CardsUpsertArgs>

export const CardsCreateManyArgsSchema: z.ZodType<Prisma.CardsCreateManyArgs> = z.object({
  data: CardsCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.CardsCreateManyArgs>

export const CardsDeleteArgsSchema: z.ZodType<Prisma.CardsDeleteArgs> = z.object({
  select: CardsSelectSchema.optional(),
  include: CardsIncludeSchema.optional(),
  where: CardsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.CardsDeleteArgs>

export const CardsUpdateArgsSchema: z.ZodType<Prisma.CardsUpdateArgs> = z.object({
  select: CardsSelectSchema.optional(),
  include: CardsIncludeSchema.optional(),
  data: z.union([ CardsUpdateInputSchema,CardsUncheckedUpdateInputSchema ]),
  where: CardsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.CardsUpdateArgs>

export const CardsUpdateManyArgsSchema: z.ZodType<Prisma.CardsUpdateManyArgs> = z.object({
  data: z.union([ CardsUpdateManyMutationInputSchema,CardsUncheckedUpdateManyInputSchema ]),
  where: CardsWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.CardsUpdateManyArgs>

export const CardsDeleteManyArgsSchema: z.ZodType<Prisma.CardsDeleteManyArgs> = z.object({
  where: CardsWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.CardsDeleteManyArgs>

export const DecksCreateArgsSchema: z.ZodType<Prisma.DecksCreateArgs> = z.object({
  select: DecksSelectSchema.optional(),
  include: DecksIncludeSchema.optional(),
  data: z.union([ DecksCreateInputSchema,DecksUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.DecksCreateArgs>

export const DecksUpsertArgsSchema: z.ZodType<Prisma.DecksUpsertArgs> = z.object({
  select: DecksSelectSchema.optional(),
  include: DecksIncludeSchema.optional(),
  where: DecksWhereUniqueInputSchema,
  create: z.union([ DecksCreateInputSchema,DecksUncheckedCreateInputSchema ]),
  update: z.union([ DecksUpdateInputSchema,DecksUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.DecksUpsertArgs>

export const DecksCreateManyArgsSchema: z.ZodType<Prisma.DecksCreateManyArgs> = z.object({
  data: DecksCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.DecksCreateManyArgs>

export const DecksDeleteArgsSchema: z.ZodType<Prisma.DecksDeleteArgs> = z.object({
  select: DecksSelectSchema.optional(),
  include: DecksIncludeSchema.optional(),
  where: DecksWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.DecksDeleteArgs>

export const DecksUpdateArgsSchema: z.ZodType<Prisma.DecksUpdateArgs> = z.object({
  select: DecksSelectSchema.optional(),
  include: DecksIncludeSchema.optional(),
  data: z.union([ DecksUpdateInputSchema,DecksUncheckedUpdateInputSchema ]),
  where: DecksWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.DecksUpdateArgs>

export const DecksUpdateManyArgsSchema: z.ZodType<Prisma.DecksUpdateManyArgs> = z.object({
  data: z.union([ DecksUpdateManyMutationInputSchema,DecksUncheckedUpdateManyInputSchema ]),
  where: DecksWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.DecksUpdateManyArgs>

export const DecksDeleteManyArgsSchema: z.ZodType<Prisma.DecksDeleteManyArgs> = z.object({
  where: DecksWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.DecksDeleteManyArgs>

export const MultimediaCreateArgsSchema: z.ZodType<Prisma.MultimediaCreateArgs> = z.object({
  select: MultimediaSelectSchema.optional(),
  include: MultimediaIncludeSchema.optional(),
  data: z.union([ MultimediaCreateInputSchema,MultimediaUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.MultimediaCreateArgs>

export const MultimediaUpsertArgsSchema: z.ZodType<Prisma.MultimediaUpsertArgs> = z.object({
  select: MultimediaSelectSchema.optional(),
  include: MultimediaIncludeSchema.optional(),
  where: MultimediaWhereUniqueInputSchema,
  create: z.union([ MultimediaCreateInputSchema,MultimediaUncheckedCreateInputSchema ]),
  update: z.union([ MultimediaUpdateInputSchema,MultimediaUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.MultimediaUpsertArgs>

export const MultimediaCreateManyArgsSchema: z.ZodType<Prisma.MultimediaCreateManyArgs> = z.object({
  data: MultimediaCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.MultimediaCreateManyArgs>

export const MultimediaDeleteArgsSchema: z.ZodType<Prisma.MultimediaDeleteArgs> = z.object({
  select: MultimediaSelectSchema.optional(),
  include: MultimediaIncludeSchema.optional(),
  where: MultimediaWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.MultimediaDeleteArgs>

export const MultimediaUpdateArgsSchema: z.ZodType<Prisma.MultimediaUpdateArgs> = z.object({
  select: MultimediaSelectSchema.optional(),
  include: MultimediaIncludeSchema.optional(),
  data: z.union([ MultimediaUpdateInputSchema,MultimediaUncheckedUpdateInputSchema ]),
  where: MultimediaWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.MultimediaUpdateArgs>

export const MultimediaUpdateManyArgsSchema: z.ZodType<Prisma.MultimediaUpdateManyArgs> = z.object({
  data: z.union([ MultimediaUpdateManyMutationInputSchema,MultimediaUncheckedUpdateManyInputSchema ]),
  where: MultimediaWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.MultimediaUpdateManyArgs>

export const MultimediaDeleteManyArgsSchema: z.ZodType<Prisma.MultimediaDeleteManyArgs> = z.object({
  where: MultimediaWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.MultimediaDeleteManyArgs>

export const Multimedia_promptsCreateArgsSchema: z.ZodType<Prisma.Multimedia_promptsCreateArgs> = z.object({
  select: Multimedia_promptsSelectSchema.optional(),
  include: Multimedia_promptsIncludeSchema.optional(),
  data: z.union([ Multimedia_promptsCreateInputSchema,Multimedia_promptsUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.Multimedia_promptsCreateArgs>

export const Multimedia_promptsUpsertArgsSchema: z.ZodType<Prisma.Multimedia_promptsUpsertArgs> = z.object({
  select: Multimedia_promptsSelectSchema.optional(),
  include: Multimedia_promptsIncludeSchema.optional(),
  where: Multimedia_promptsWhereUniqueInputSchema,
  create: z.union([ Multimedia_promptsCreateInputSchema,Multimedia_promptsUncheckedCreateInputSchema ]),
  update: z.union([ Multimedia_promptsUpdateInputSchema,Multimedia_promptsUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.Multimedia_promptsUpsertArgs>

export const Multimedia_promptsCreateManyArgsSchema: z.ZodType<Prisma.Multimedia_promptsCreateManyArgs> = z.object({
  data: Multimedia_promptsCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.Multimedia_promptsCreateManyArgs>

export const Multimedia_promptsDeleteArgsSchema: z.ZodType<Prisma.Multimedia_promptsDeleteArgs> = z.object({
  select: Multimedia_promptsSelectSchema.optional(),
  include: Multimedia_promptsIncludeSchema.optional(),
  where: Multimedia_promptsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Multimedia_promptsDeleteArgs>

export const Multimedia_promptsUpdateArgsSchema: z.ZodType<Prisma.Multimedia_promptsUpdateArgs> = z.object({
  select: Multimedia_promptsSelectSchema.optional(),
  include: Multimedia_promptsIncludeSchema.optional(),
  data: z.union([ Multimedia_promptsUpdateInputSchema,Multimedia_promptsUncheckedUpdateInputSchema ]),
  where: Multimedia_promptsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Multimedia_promptsUpdateArgs>

export const Multimedia_promptsUpdateManyArgsSchema: z.ZodType<Prisma.Multimedia_promptsUpdateManyArgs> = z.object({
  data: z.union([ Multimedia_promptsUpdateManyMutationInputSchema,Multimedia_promptsUncheckedUpdateManyInputSchema ]),
  where: Multimedia_promptsWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.Multimedia_promptsUpdateManyArgs>

export const Multimedia_promptsDeleteManyArgsSchema: z.ZodType<Prisma.Multimedia_promptsDeleteManyArgs> = z.object({
  where: Multimedia_promptsWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.Multimedia_promptsDeleteManyArgs>

interface Card_promptsGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.Card_promptsArgs
  readonly type: Omit<Prisma.Card_promptsGetPayload<this['_A']>, "Please either choose `select` or `include`">
}

interface CardsGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.CardsArgs
  readonly type: Omit<Prisma.CardsGetPayload<this['_A']>, "Please either choose `select` or `include`">
}

interface DecksGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.DecksArgs
  readonly type: Omit<Prisma.DecksGetPayload<this['_A']>, "Please either choose `select` or `include`">
}

interface MultimediaGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.MultimediaArgs
  readonly type: Omit<Prisma.MultimediaGetPayload<this['_A']>, "Please either choose `select` or `include`">
}

interface Multimedia_promptsGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.Multimedia_promptsArgs
  readonly type: Omit<Prisma.Multimedia_promptsGetPayload<this['_A']>, "Please either choose `select` or `include`">
}

export const tableSchemas = {
  card_prompts: {
    fields: new Map([
      [
        "id",
        "UUID"
      ],
      [
        "text",
        "TEXT"
      ],
      [
        "state",
        "TEXT"
      ],
      [
        "deck_id",
        "UUID"
      ],
      [
        "created_at",
        "TIMESTAMP"
      ],
      [
        "updated_at",
        "TIMESTAMP"
      ]
    ]),
    relations: [
      new Relation("decks", "deck_id", "id", "decks", "Card_promptsToDecks", "one"),
      new Relation("cards", "", "", "cards", "Card_promptsToCards", "many"),
    ],
    modelSchema: (Card_promptsCreateInputSchema as any)
      .partial()
      .or((Card_promptsUncheckedCreateInputSchema as any).partial()),
    createSchema: Card_promptsCreateArgsSchema,
    createManySchema: Card_promptsCreateManyArgsSchema,
    findUniqueSchema: Card_promptsFindUniqueArgsSchema,
    findSchema: Card_promptsFindFirstArgsSchema,
    updateSchema: Card_promptsUpdateArgsSchema,
    updateManySchema: Card_promptsUpdateManyArgsSchema,
    upsertSchema: Card_promptsUpsertArgsSchema,
    deleteSchema: Card_promptsDeleteArgsSchema,
    deleteManySchema: Card_promptsDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof Card_promptsUncheckedCreateInputSchema>,
    Prisma.Card_promptsCreateArgs['data'],
    Prisma.Card_promptsUpdateArgs['data'],
    Prisma.Card_promptsFindFirstArgs['select'],
    Prisma.Card_promptsFindFirstArgs['where'],
    Prisma.Card_promptsFindUniqueArgs['where'],
    Omit<Prisma.Card_promptsInclude, '_count'>,
    Prisma.Card_promptsFindFirstArgs['orderBy'],
    Prisma.Card_promptsScalarFieldEnum,
    Card_promptsGetPayload
  >,
  cards: {
    fields: new Map([
      [
        "id",
        "UUID"
      ],
      [
        "card_prompt_id",
        "UUID"
      ],
      [
        "front_text",
        "TEXT"
      ],
      [
        "back_text",
        "TEXT"
      ],
      [
        "created_at",
        "TIMESTAMP"
      ],
      [
        "updated_at",
        "TIMESTAMP"
      ]
    ]),
    relations: [
      new Relation("card_prompts", "card_prompt_id", "id", "card_prompts", "Card_promptsToCards", "one"),
      new Relation("multimedia_prompts", "", "", "multimedia_prompts", "CardsToMultimedia_prompts", "many"),
    ],
    modelSchema: (CardsCreateInputSchema as any)
      .partial()
      .or((CardsUncheckedCreateInputSchema as any).partial()),
    createSchema: CardsCreateArgsSchema,
    createManySchema: CardsCreateManyArgsSchema,
    findUniqueSchema: CardsFindUniqueArgsSchema,
    findSchema: CardsFindFirstArgsSchema,
    updateSchema: CardsUpdateArgsSchema,
    updateManySchema: CardsUpdateManyArgsSchema,
    upsertSchema: CardsUpsertArgsSchema,
    deleteSchema: CardsDeleteArgsSchema,
    deleteManySchema: CardsDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof CardsUncheckedCreateInputSchema>,
    Prisma.CardsCreateArgs['data'],
    Prisma.CardsUpdateArgs['data'],
    Prisma.CardsFindFirstArgs['select'],
    Prisma.CardsFindFirstArgs['where'],
    Prisma.CardsFindUniqueArgs['where'],
    Omit<Prisma.CardsInclude, '_count'>,
    Prisma.CardsFindFirstArgs['orderBy'],
    Prisma.CardsScalarFieldEnum,
    CardsGetPayload
  >,
  decks: {
    fields: new Map([
      [
        "id",
        "UUID"
      ],
      [
        "name",
        "TEXT"
      ],
      [
        "description",
        "TEXT"
      ],
      [
        "created_at",
        "TIMESTAMP"
      ],
      [
        "updated_at",
        "TIMESTAMP"
      ]
    ]),
    relations: [
      new Relation("card_prompts", "", "", "card_prompts", "Card_promptsToDecks", "many"),
    ],
    modelSchema: (DecksCreateInputSchema as any)
      .partial()
      .or((DecksUncheckedCreateInputSchema as any).partial()),
    createSchema: DecksCreateArgsSchema,
    createManySchema: DecksCreateManyArgsSchema,
    findUniqueSchema: DecksFindUniqueArgsSchema,
    findSchema: DecksFindFirstArgsSchema,
    updateSchema: DecksUpdateArgsSchema,
    updateManySchema: DecksUpdateManyArgsSchema,
    upsertSchema: DecksUpsertArgsSchema,
    deleteSchema: DecksDeleteArgsSchema,
    deleteManySchema: DecksDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof DecksUncheckedCreateInputSchema>,
    Prisma.DecksCreateArgs['data'],
    Prisma.DecksUpdateArgs['data'],
    Prisma.DecksFindFirstArgs['select'],
    Prisma.DecksFindFirstArgs['where'],
    Prisma.DecksFindUniqueArgs['where'],
    Omit<Prisma.DecksInclude, '_count'>,
    Prisma.DecksFindFirstArgs['orderBy'],
    Prisma.DecksScalarFieldEnum,
    DecksGetPayload
  >,
  multimedia: {
    fields: new Map([
      [
        "id",
        "UUID"
      ],
      [
        "multimedia_prompt_id",
        "UUID"
      ],
      [
        "media_type",
        "TEXT"
      ],
      [
        "url",
        "TEXT"
      ],
      [
        "metadata",
        "JSONB"
      ],
      [
        "created_at",
        "TIMESTAMP"
      ],
      [
        "updated_at",
        "TIMESTAMP"
      ]
    ]),
    relations: [
      new Relation("multimedia_prompts", "multimedia_prompt_id", "id", "multimedia_prompts", "MultimediaToMultimedia_prompts", "one"),
    ],
    modelSchema: (MultimediaCreateInputSchema as any)
      .partial()
      .or((MultimediaUncheckedCreateInputSchema as any).partial()),
    createSchema: MultimediaCreateArgsSchema,
    createManySchema: MultimediaCreateManyArgsSchema,
    findUniqueSchema: MultimediaFindUniqueArgsSchema,
    findSchema: MultimediaFindFirstArgsSchema,
    updateSchema: MultimediaUpdateArgsSchema,
    updateManySchema: MultimediaUpdateManyArgsSchema,
    upsertSchema: MultimediaUpsertArgsSchema,
    deleteSchema: MultimediaDeleteArgsSchema,
    deleteManySchema: MultimediaDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof MultimediaUncheckedCreateInputSchema>,
    Prisma.MultimediaCreateArgs['data'],
    Prisma.MultimediaUpdateArgs['data'],
    Prisma.MultimediaFindFirstArgs['select'],
    Prisma.MultimediaFindFirstArgs['where'],
    Prisma.MultimediaFindUniqueArgs['where'],
    Omit<Prisma.MultimediaInclude, '_count'>,
    Prisma.MultimediaFindFirstArgs['orderBy'],
    Prisma.MultimediaScalarFieldEnum,
    MultimediaGetPayload
  >,
  multimedia_prompts: {
    fields: new Map([
      [
        "id",
        "UUID"
      ],
      [
        "text",
        "TEXT"
      ],
      [
        "state",
        "TEXT"
      ],
      [
        "card_id",
        "UUID"
      ],
      [
        "created_at",
        "TIMESTAMP"
      ],
      [
        "updated_at",
        "TIMESTAMP"
      ]
    ]),
    relations: [
      new Relation("multimedia", "", "", "multimedia", "MultimediaToMultimedia_prompts", "many"),
      new Relation("cards", "card_id", "id", "cards", "CardsToMultimedia_prompts", "one"),
    ],
    modelSchema: (Multimedia_promptsCreateInputSchema as any)
      .partial()
      .or((Multimedia_promptsUncheckedCreateInputSchema as any).partial()),
    createSchema: Multimedia_promptsCreateArgsSchema,
    createManySchema: Multimedia_promptsCreateManyArgsSchema,
    findUniqueSchema: Multimedia_promptsFindUniqueArgsSchema,
    findSchema: Multimedia_promptsFindFirstArgsSchema,
    updateSchema: Multimedia_promptsUpdateArgsSchema,
    updateManySchema: Multimedia_promptsUpdateManyArgsSchema,
    upsertSchema: Multimedia_promptsUpsertArgsSchema,
    deleteSchema: Multimedia_promptsDeleteArgsSchema,
    deleteManySchema: Multimedia_promptsDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof Multimedia_promptsUncheckedCreateInputSchema>,
    Prisma.Multimedia_promptsCreateArgs['data'],
    Prisma.Multimedia_promptsUpdateArgs['data'],
    Prisma.Multimedia_promptsFindFirstArgs['select'],
    Prisma.Multimedia_promptsFindFirstArgs['where'],
    Prisma.Multimedia_promptsFindUniqueArgs['where'],
    Omit<Prisma.Multimedia_promptsInclude, '_count'>,
    Prisma.Multimedia_promptsFindFirstArgs['orderBy'],
    Prisma.Multimedia_promptsScalarFieldEnum,
    Multimedia_promptsGetPayload
  >,
}

export const schema = new DbSchema(tableSchemas, migrations)
export type Electric = ElectricClient<typeof schema>
export const JsonNull = { __is_electric_json_null__: true }
