async function delay(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

export async function SlowComponent() {
  // slow because of a delay, or fetching lots of data over the network or from a database
  await delay(5000);

  return (
    <div>
      <p className="text-green-400">
        Sorry I&apos;m late I got stuck in traffic!!
      </p>
    </div>
  );
}
