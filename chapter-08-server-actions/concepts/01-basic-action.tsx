// ==========================================
// Concept 8.1: Basic Server Action
// ==========================================

export default function BasicActionPage() {
  // 1. Define the server action
  async function submitName(formData: FormData) {
    'use server'; // Runs on the server
    const name = formData.get('username');
    console.log('Received:', name);
  }

  return (
    <form action={submitName}>
      <input type="text" name="username" />
      <button type="submit">Submit</button>
    </form>
  );
}