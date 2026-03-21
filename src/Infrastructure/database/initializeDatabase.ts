import { createClient } from "@libsql/client";

const dbUrl = process.env.TURSO_DB_URL || "not-found";
const token = process.env.TURSO_DB_AUTH_TOKEN || "not-found";

export async function initializeDatabase(): Promise<void> {
  const db = createClient({ url: dbUrl, authToken: token });

  try {

  await db.execute(`
    CREATE TABLE IF NOT EXISTS PLANS (
        ID TEXT PRIMARY KEY,
        NAME TEXT,
        PRICE INTEGER,
        DELETED INTEGER,
        CREATEDAT TEXT,
        UPDATEDAT TEXT,
        CREATEDBY TEXT,
        UPDATEDBY TEXT
    );
`);

console.log("✔ Plan ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS SUSCRIPTIONS (
        ID TEXT PRIMARY KEY,
        COMPANY_ID TEXT,
        PLAN_ID TEXT,
        STATUS TEXT,
        CURRENT_PERIOD_START TEXT,
        CURRENT_PERIOD_END TEXT,
        DELETED INTEGER,
        CREATEDAT TEXT,
        UPDATEDAT TEXT,
        CREATEDBY TEXT,
        UPDATEDBY TEXT
    );
`);

console.log("✔ Suscription ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS COMPANIES (
        ID TEXT PRIMARY KEY,
        NAME TEXT,
        BUSINESS_TYPE TEXT,
        TAX_ID TEXT,
        EMAIL TEXT,
        PHONE TEXT,
        DELETED INTEGER,
        CREATEDAT TEXT,
        UPDATEDAT TEXT,
        CREATEDBY TEXT,
        UPDATEDBY TEXT
    );
`);

console.log("✔ Companie ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS UNITS (
        ID TEXT PRIMARY KEY,
        NAME TEXT,
        SYMBOL TEXT,
        DELETED INTEGER,
        CREATEDAT TEXT,
        UPDATEDAT TEXT,
        CREATEDBY TEXT,
        UPDATEDBY TEXT
    );
`);

console.log("✔ Unit ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS BRANCHS (
        ID TEXT PRIMARY KEY,
        COMPANY_ID TEXT,
        NAME TEXT,
        ADDRESS TEXT,
        PHONE TEXT,
        DELETED INTEGER,
        CREATEDAT TEXT,
        UPDATEDAT TEXT,
        CREATEDBY TEXT,
        UPDATEDBY TEXT
    );
`);

console.log("✔ Branch ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS ROLES (
        ID TEXT PRIMARY KEY,
        COMPANY_ID TEXT,
        NAME TEXT,
        DESCRIPTION TEXT,
        DELETED INTEGER,
        CREATEDAT TEXT,
        UPDATEDAT TEXT,
        CREATEDBY TEXT,
        UPDATEDBY TEXT
    );
`);

console.log("✔ Role ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS CATEGORIES (
        ID TEXT PRIMARY KEY,
        COMPANY_ID TEXT,
        NAME TEXT,
        DELETED INTEGER,
        CREATEDAT TEXT,
        UPDATEDAT TEXT,
        CREATEDBY TEXT,
        UPDATEDBY TEXT
    );
`);

console.log("✔ Categorie ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS USERS (
        ID TEXT PRIMARY KEY,
        COMPANY_ID TEXT,
        NAME TEXT,
        EMAIL TEXT,
        PASSWORD TEXT,
        ROLE_ID TEXT,
        IS_ACTIVE INTEGER,
        DELETED INTEGER,
        CREATEDAT TEXT,
        UPDATEDAT TEXT,
        CREATEDBY TEXT,
        UPDATEDBY TEXT
    );
`);

console.log("✔ User ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS PRODUCTS (
        ID TEXT PRIMARY KEY,
        COMPANY_ID TEXT,
        NAME TEXT,
        BARCODE TEXT,
        CATEGORY_ID TEXT,
        UNIT_ID TEXT,
        COST_PRICE INTEGER,
        SALE_PRICE INTEGER,
        TRACK_INVENTORY INTEGER,
        DELETED INTEGER,
        CREATEDAT TEXT,
        UPDATEDAT TEXT,
        CREATEDBY TEXT,
        UPDATEDBY TEXT
    );
`);

console.log("✔ Product ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS CASHREGISTERS (
        ID TEXT PRIMARY KEY,
        COMPANY_ID TEXT,
        BRANCH_ID TEXT,
        NAME TEXT,
        IS_ACTIVE INTEGER,
        DELETED INTEGER,
        CREATEDAT TEXT,
        UPDATEDAT TEXT,
        CREATEDBY TEXT,
        UPDATEDBY TEXT
    );
`);

console.log("✔ CashRegister ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS PURCHASES (
        ID TEXT PRIMARY KEY,
        COMPANY_ID TEXT,
        BRANCH_ID TEXT,
        SUPPLIER TEXT,
        TOTAL INTEGER,
        STATUS TEXT,
        DELETED INTEGER,
        CREATEDAT TEXT,
        UPDATEDAT TEXT,
        CREATEDBY TEXT,
        UPDATEDBY TEXT
    );
`);

console.log("✔ Purchase ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS PURCHASEITEMS (
        ID TEXT PRIMARY KEY,
        COMPANY_ID TEXT,
        PURCHASE_ID TEXT,
        PRODUCT_ID TEXT,
        UNIT_ID TEXT,
        QUANTITY INTEGER,
        COST_PRICE INTEGER,
        SUBTOTAL INTEGER
    );
`);

console.log("✔ PurchaseItem ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS CASHMOVEMENTS (
        ID TEXT PRIMARY KEY,
        COMPANY_ID TEXT,
        CASH_REGISTER_ID TEXT,
        TYPE TEXT,
        AMOUNT INTEGER,
        DESCRIPTION TEXT,
        REFERENCE_ID TEXT,
        PAYMENT_METHOD TEXT,
        CREATEDAT TEXT,
        UPDATEDAT TEXT,
        CREATEDBY TEXT,
        UPDATEDBY TEXT,
        DELETED INTEGER
    );
`);

console.log("✔ CashMovement ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS SALES (
        ID TEXT PRIMARY KEY,
        COMPANY_ID TEXT,
        BRANCH_ID TEXT,
        USER_ID TEXT,
        CUSTOMER_NAME TEXT,
        TOTAL INTEGER,
        STATUS TEXT,
        CREATEDAT TEXT,
        UPDATEDAT TEXT,
        CREATEDBY TEXT,
        UPDATEDBY TEXT,
        DELETED INTEGER
    );
`);

console.log("✔ Sale ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS INVENTORIES (
        ID TEXT PRIMARY KEY,
        COMPANY_ID TEXT,
        BRANCH_ID TEXT,
        PRODUCT_ID TEXT,
        QUANTITY INTEGER,
        CREATEDAT TEXT,
        UPDATEDAT TEXT,
        CREATEDBY TEXT,
        UPDATEDBY TEXT
    );
`);

console.log("✔ Inventorie ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS INVENTORYMOVEMENTS (
        ID TEXT PRIMARY KEY,
        COMPANY_ID TEXT,
        BRANCH_ID TEXT,
        PRODUCT_ID TEXT,
        TYPE TEXT,
        QUANTITY INTEGER,
        REFERENCE_TYPE TEXT,
        REFERENCE_ID TEXT,
        DESCRIPTION TEXT,
        CREATEDAT TEXT,
        UPDATEDAT TEXT,
        CREATEDBY TEXT,
        UPDATEDBY TEXT
    );
`);

console.log("✔ InventoryMovement ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS PRODUCTUNITS (
        ID TEXT PRIMARY KEY,
        PRODUCT_ID TEXT,
        UNIT_ID TEXT,
        FACTOR INTEGER,
        IS_BASE INTEGER,
        CREATEDAT TEXT,
        UPDATEDAT TEXT,
        CREATEDBY TEXT,
        UPDATEDBY TEXT
    );
`);

console.log("✔ ProductUnit ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS SALEITEMS (
        ID TEXT PRIMARY KEY,
        COMPANY_ID TEXT,
        SALE_ID TEXT,
        PRODUCT_ID TEXT,
        UNIT_ID TEXT,
        QUANTITY INTEGER,
        PRICE INTEGER,
        SUBTOTAL INTEGER,
        CREATEDAT TEXT,
        UPDATEDAT TEXT,
        CREATEDBY TEXT,
        UPDATEDBY TEXT
    );
`);

console.log("✔ SaleItem ready");
await db.execute(`
    CREATE TABLE IF NOT EXISTS LOGS (
        ID TEXT PRIMARY KEY,
        ENTITY TEXT,
        ENTITY_ID TEXT,
        ACTION TEXT,
        DESCRIPTION TEXT,
        PERFORMED_BY TEXT,
        PERFORMED_AT TEXT
    );
`);

console.log("✔ Log ready");


  } catch (error) {
    console.error("Database init error:", error);
  } finally {
    await db.close();
  }
}