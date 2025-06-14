class Toaster {
    constructor(parameters = {}) {
        this.position = parameters.position || 'top-right';
        this.duration = parameters.duration || 3000;
    }

    show(options = {}) {
        const { message = 'Notification', type = 'info', duration = this.duration } = options;

        // Create container if neede d
        let container = document.querySelector(`.toaster-${this.position}`);
        if (!container) {
            container = document.createElement('div');
            container.className = `toaster toaster-${this.position}`;
            document.body.appendChild(container);
        }

        // Create toast
        const toast = document.createElement('div');
        toast.className = `toaster-message ${type}`;
        toast.innerHTML = `
            <span>${message}</span>
            <button class="toaster-close">×</button>
        `;

        // Add to container
        container.appendChild(toast);

        // Close button
        toast.querySelector('.toaster-close').onclick = () => {
            toast.remove();
        };

        // Auto remove
        if (duration > 0) {
            setTimeout(() => toast.remove(), duration);
        }
    }

    success(message) { this.show({ message, type: 'success' }); }
    error(message) { this.show({ message, type: 'error' }); }
    warning(message) { this.show({ message, type: 'warning' }); }
    info(message) { this.show({ message, type: 'info' }); }
}

// Usage:
// const toaster = new Toaster();
// toaster.success('Done!');
// toaster.error('Failed!');