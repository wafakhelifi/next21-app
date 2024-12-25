export default function Footer() {
  return (
    <footer className="bg-black-800 text-black py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()}  All rights reserved.</p>
      </div>
    </footer>
  );
}
