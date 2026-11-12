import styles from "./page.module.css";

const coffees = [
  { name: "Morning Fog", origin: "Brazil", roast: "Medium", notes: "Milk chocolate, hazelnut, low acidity", price: 16 },
  { name: "Highland Bloom", origin: "Ethiopia", roast: "Light", notes: "Jasmine, blueberry, bright and tea-like", price: 19 },
  { name: "Ember", origin: "Sumatra", roast: "Dark", notes: "Cedar, dark cocoa, heavy body", price: 17 },
  { name: "Night Owl Decaf", origin: "Colombia", roast: "Medium", notes: "Caramel, red apple; Swiss Water decaf", price: 18 },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Northwind Coffee Roasters</h1>
      <p className={styles.lead}>
        Small-batch coffee, roasted on Mondays and shipped on Tuesdays. Every bag is 340 g of whole beans;
        ask for ground coffee in the order notes.
      </p>
      <div className={styles.grid}>
        {coffees.map((c) => (
          <article key={c.name} className={styles.card}>
            <h2>{c.name}</h2>
            <p className={styles.meta}>{c.origin} · {c.roast} roast</p>
            <p>{c.notes}</p>
            <p className={styles.price}>${c.price}</p>
          </article>
        ))}
      </div>
      <h2 className={styles.h2}>Shipping and subscriptions</h2>
      <p>Free shipping in the US on orders over $35; otherwise $5. A subscription saves 10% and can be paused or cancelled any time from your account.</p>
      <p>We do not ship outside the US and Canada yet.</p>
    </main>
  );
}
