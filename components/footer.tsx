export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <p className="text-sm text-muted-foreground">&copy; 2024 Healthcare Cyber Support. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

