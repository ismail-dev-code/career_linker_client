const jobsCreatedByPromise = (email) => {
  return fetch(`https://career-linker-server.vercel.app/jobs?email=${email}`).then((res) =>
    res.json()
  );
};
export default jobsCreatedByPromise;
